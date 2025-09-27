import { NextRequest, NextResponse } from 'next/server';

// ConvertKit API integration
async function subscribeToConvertKit(email: string, firstName: string) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    throw new Error('ConvertKit configuration missing');
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      email: email,
      first_name: firstName,
      tags: ['DGNL-HCM-2026', 'Ebook-Download'] // Add tags for better segmentation
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`ConvertKit API error: ${errorData.message || 'Unknown error'}`);
  }

  return await response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Tên và email là bắt buộc' },
        { status: 400 }
      );
    }

    // Enhanced name validation
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Tên phải có ít nhất 2 ký tự' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ' },
        { status: 400 }
      );
    }

    // Subscribe to ConvertKit
    try {
      const convertKitResponse = await subscribeToConvertKit(email.trim(), name.trim());
      console.log('ConvertKit subscription successful:', {
        email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
        name: name.trim(),
        convertKitId: convertKitResponse.subscription?.id,
        timestamp: new Date().toISOString()
      });
    } catch (convertKitError) {
      console.error('ConvertKit subscription failed:', convertKitError);
      
      // Check if it's a duplicate email error (ConvertKit returns this when email already exists)
      const errorMessage = convertKitError instanceof Error ? convertKitError.message : 'Unknown error';
      if (errorMessage.includes('already subscribed') || errorMessage.includes('duplicate')) {
        console.log('Email already subscribed, continuing...');
      } else {
        // For other errors, we might want to still continue or return an error
        // For now, let's continue but log the error
        console.warn('ConvertKit error (continuing):', errorMessage);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cảm ơn bạn! Chúng tôi sẽ gửi bộ đề qua email trong vòng 5 phút.',
      data: {
        name: name.trim(),
        email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'), // Mask email for security
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error processing ebook submission:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau ít phút.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Endpoint này chỉ nhận POST requests' },
    { status: 405 }
  );
}