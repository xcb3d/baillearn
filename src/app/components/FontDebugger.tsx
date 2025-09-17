'use client'

import { useEffect, useState } from 'react'

interface FontInfo {
  name: string
  loaded: boolean
  available: boolean
  actualFont: string
}

export default function FontDebugger() {
  const [fontInfo, setFontInfo] = useState<FontInfo[]>([])
  const [debugVisible, setDebugVisible] = useState(false)

  useEffect(() => {
    const checkFonts = async () => {
      const fontsToCheck = [
        'Roboto Flex Variable',
        'Roboto Flex',
        'Inter',
        'system-ui',
        'sans-serif'
      ]

      const results: FontInfo[] = []

      for (const fontName of fontsToCheck) {
        try {
          // Check if font is available using document.fonts API
          const available = document.fonts.check(`16px "${fontName}"`)
          
          // Try to load the font
          let loaded = false
          try {
            await document.fonts.load(`16px "${fontName}"`)
            loaded = document.fonts.check(`16px "${fontName}"`)
          } catch {
            loaded = false
          }

          // Get actual computed font
          const testElement = document.createElement('div')
          testElement.style.fontFamily = `"${fontName}", sans-serif`
          testElement.style.position = 'absolute'
          testElement.style.visibility = 'hidden'
          testElement.textContent = 'Test'
          document.body.appendChild(testElement)
          
          const computedStyle = window.getComputedStyle(testElement)
          const actualFont = computedStyle.fontFamily
          
          document.body.removeChild(testElement)

          results.push({
            name: fontName,
            loaded,
            available,
            actualFont
          })

          console.log(`🔍 Font Debug - ${fontName}:`, {
            available,
            loaded,
            actualFont: actualFont.substring(0, 50) + (actualFont.length > 50 ? '...' : '')
          })

        } catch (error) {
          console.error(`❌ Error checking font ${fontName}:`, error)
          results.push({
            name: fontName,
            loaded: false,
            available: false,
            actualFont: 'Error'
          })
        }
      }

      setFontInfo(results)
    }

    // Check fonts immediately
    checkFonts()

    // Also check after fonts are loaded
    document.fonts.ready.then(() => {
      console.log('📚 All fonts loaded, rechecking...')
      checkFonts()
    })

    // Log font loading events
    document.fonts.addEventListener('loading', (event) => {
      console.log('⏳ Font loading:', (event as FontFaceSetLoadEvent).fontfaces?.[0]?.family)
    })

    document.fonts.addEventListener('loadingdone', (event) => {
      console.log('✅ Font loaded:', (event as FontFaceSetLoadEvent).fontfaces?.[0]?.family)
    })

    document.fonts.addEventListener('loadingerror', (event) => {
      console.error('❌ Font loading error:', (event as FontFaceSetLoadEvent).fontfaces?.[0]?.family)
    })

  }, [])

  // Test different font classes
  const fontTests = [
    { class: 'font-roboto-flex', label: 'Roboto Flex Class' },
    { class: 'font-roboto-flex-custom', label: 'Roboto Flex Custom' },
    { class: 'test-roboto-flex', label: 'Test Roboto Flex' },
    { class: 'font-inter', label: 'Inter Font' },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setDebugVisible(!debugVisible)}
        className="bg-red-600 text-white px-3 py-2 rounded-md text-xs font-mono hover:bg-red-700 transition-colors"
        title="Font Debugger"
      >
        🔍 Font Debug
      </button>

      {/* Debug panel */}
      {debugVisible && (
        <div className="absolute bottom-12 right-0 bg-black/90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-auto font-mono text-xs">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-yellow-300">Font Debugger</h3>
            <button 
              onClick={() => setDebugVisible(false)}
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>

          {/* Font availability status */}
          <div className="mb-4">
            <h4 className="text-yellow-300 mb-2">Font Status:</h4>
            {fontInfo.map((font, index) => (
              <div key={index} className="mb-1 text-xs">
                <span className={font.available ? 'text-green-400' : 'text-red-400'}>
                  {font.available ? '✅' : '❌'}
                </span>
                <span className={font.loaded ? 'text-green-400' : 'text-orange-400'}>
                  {font.loaded ? '📚' : '⏳'}
                </span>
                <span className="ml-2">{font.name}</span>
              </div>
            ))}
          </div>

          {/* Visual font tests */}
          <div className="mb-4">
            <h4 className="text-yellow-300 mb-2">Visual Tests:</h4>
            {fontTests.map((test, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-800 rounded">
                <div className="text-gray-400 text-xs">{test.label}:</div>
                <div className={`${test.class} text-white text-sm`}>
                  The quick brown fox jumps over lazy dog 1234567890
                </div>
              </div>
            ))}
          </div>

          {/* Computed styles */}
          <div>
            <h4 className="text-yellow-300 mb-2">Computed Fonts:</h4>
            {fontInfo.slice(0, 3).map((font, index) => (
              <div key={index} className="mb-1 text-xs">
                <div className="text-gray-400">{font.name}:</div>
                <div className="text-green-300 break-all">
                  {font.actualFont.substring(0, 40)}...
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}