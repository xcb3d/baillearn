import { NextRequest, NextResponse } from 'next/server';

async function subscribeToConvertKit(email: string, firstName: string) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_VACT_GROUP_FORM_ID || process.env.CONVERTKIT_FORM_ID;

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
      tags: ['V-ACT-2026', 'Group-Kin', 'Livestream-Materials']
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

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Tên và email là bắt buộc' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Tên phải có ít nhất 2 ký tự' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ' },
        { status: 400 }
      );
    }

    try {
      const convertKitResponse = await subscribeToConvertKit(email.trim(), name.trim());
      console.log('ConvertKit subscription successful (V-ACT Group):', {
        email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
        name: name.trim(),
        convertKitId: convertKitResponse.subscription?.id,
        timestamp: new Date().toISOString()
      });
    } catch (convertKitError) {
      console.error('ConvertKit subscription failed:', convertKitError);
      
      const errorMessage = convertKitError instanceof Error ? convertKitError.message : 'Unknown error';
      if (errorMessage.includes('already subscribed') || errorMessage.includes('duplicate')) {
        console.log('Email already subscribed, continuing...');
      } else {
        console.warn('ConvertKit error (continuing):', errorMessage);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Tham gia thành công! Link tham gia group sẽ được gửi đến email của bạn.',
      data: {
        name: name.trim(),
        email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error processing V-ACT group submission:', error);
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
