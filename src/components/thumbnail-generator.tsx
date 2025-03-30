"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Download, Settings, EyeOff } from "lucide-react"

export default function ThumbnailGenerator() {
  const thumbnailRef = useRef<HTMLDivElement>(null)
  const [fontLoaded, setFontLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showSettings, setShowSettings] = useState(true)

  // Configuration state
  const [config, setConfig] = useState({
    // Text settings
    topText: "AURA",
    bottomText: "PRINTERS",
    topTextColor: "#2ecc71",
    bottomTextColor: "#ffffff",
    topTextSize: 8, // text-8xl
    bottomTextSize: 9, // text-9xl

    // Background settings
    backgroundImage: "https://i.postimg.cc/Bv5q3LD1/image.png",
    overlayColor: "#174D25",
    overlayOpacity: 45, // 0.45

    // Logo settings
    auraLogo: "https://i.postimg.cc/jdM8CF8v/LOGO-Aura-Development-512x512-Transparent-by-Flight-Design.png",
    showESX: false,
    showQB: true,
    showQBX: true,
    esxLogo: "https://i.postimg.cc/6pTMZfgK/image.png",
    qbLogo: "https://i.postimg.cc/MGQtPKzr/image.png",
    qbxLogo: "https://i.postimg.cc/B6fpd96Z/image.png",
  })

  // Load Impact font (similar to the one in the reference)
  useEffect(() => {
    // Create a link element for the Impact-like font (Anton is similar)
    const fontLink = document.createElement("link")
    fontLink.href = "https://fonts.googleapis.com/css2?family=Anton&display=swap"
    fontLink.rel = "stylesheet"
    document.head.appendChild(fontLink)

    // Set a timeout to ensure the font is loaded
    const timer = setTimeout(() => {
      setFontLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleDownload = () => {
    if (!thumbnailRef.current || !fontLoaded || !imageLoaded) return

    const width = 1280 // YouTube thumbnail width
    const height = 720 // YouTube thumbnail height

    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    // Create a new image for the background
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = config.backgroundImage

    // Load all logos
    const auraLogo = new Image()
    auraLogo.crossOrigin = "anonymous"
    auraLogo.src = config.auraLogo

    const esxLogo = new Image()
    esxLogo.crossOrigin = "anonymous"
    esxLogo.src = config.esxLogo

    const qbLogo = new Image()
    qbLogo.crossOrigin = "anonymous"
    qbLogo.src = config.qbLogo

    const qbxLogo = new Image()
    qbxLogo.crossOrigin = "anonymous"
    qbxLogo.src = config.qbxLogo

    // Wait for all images to load
    Promise.all([
      new Promise((resolve) => {
        img.onload = resolve
      }),
      new Promise((resolve) => {
        auraLogo.onload = resolve
      }),
      new Promise((resolve) => {
        esxLogo.onload = resolve
      }),
      new Promise((resolve) => {
        qbLogo.onload = resolve
      }),
      new Promise((resolve) => {
        qbxLogo.onload = resolve
      }),
    ]).then(() => {
      // Apply image enhancement
      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")
      tempCanvas.width = width
      tempCanvas.height = height

      // Draw and enhance the image
      tempCtx.drawImage(img, 0, 0, width, height)

      // Apply slight sharpening and vibrance
      tempCtx.globalCompositeOperation = "source-atop"
      tempCtx.fillStyle = "rgba(255, 255, 255, 0.05)"
      tempCtx.fillRect(0, 0, width, height)

      // Draw the enhanced image to the main canvas
      ctx.drawImage(tempCanvas, 0, 0, width, height)

      // Draw background image with quality enhancement
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.drawImage(img, 0, 0, width, height)

      // Apply slight contrast enhancement
      ctx.globalCompositeOperation = "source-atop"
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = "source-over"

      // Add gradient overlay with configured color and opacity
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
          ? {
              r: Number.parseInt(result[1], 16),
              g: Number.parseInt(result[2], 16),
              b: Number.parseInt(result[3], 16),
            }
          : { r: 0, g: 0, b: 0 }
      }

      const rgb = hexToRgb(config.overlayColor)
      const overlayOpacity = config.overlayOpacity / 100

      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${overlayOpacity})`
      ctx.fillRect(0, 0, width, height)

      // Add gradient effect with increased intensity
      const gradient = ctx.createRadialGradient(width / 2, height / 2, height / 3, width / 2, height / 2, height)
      gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`)
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Set up text styling
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Reset shadow for text
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)"
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 3
      ctx.shadowOffsetY = 3

      // Calculate font sizes based on config
      const topFontSize = 70 + config.topTextSize * 5 // Base 70px + scaling
      const bottomFontSize = 70 + config.bottomTextSize * 5 // Base 70px + scaling

      // Draw top text with shadow
      ctx.fillStyle = config.topTextColor
      ctx.font = `bold ${topFontSize}px Anton, Impact, sans-serif`
      ctx.fillText(config.topText, width / 2, height / 2 - 90)

      // Draw bottom text with shadow
      ctx.fillStyle = config.bottomTextColor
      ctx.font = `bold ${bottomFontSize}px Anton, Impact, sans-serif`
      ctx.fillText(config.bottomText, width / 2, height / 2 + 70)

      // Draw Aura logo in extreme bottom left with shadow
      const auraLogoSize = 120
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)"
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 5
      ctx.shadowOffsetY = 5
      ctx.drawImage(auraLogo, 5, height - auraLogoSize - 5, auraLogoSize, auraLogoSize)

      // Draw framework logos in bottom right
      const logoSize = 85
      const logoSpacing = 25

      // Calculate how many logos to show
      const visibleLogos = [
        config.showESX ? esxLogo : null,
        config.showQB ? qbLogo : null,
        config.showQBX ? qbxLogo : null,
      ].filter(Boolean)

      const totalWidth = visibleLogos.length * logoSize + (visibleLogos.length - 1) * logoSpacing
      const startX = width - totalWidth - 20

      // Draw each visible logo
      visibleLogos.forEach((logo, index) => {
        if (logo) {
          const xPos = startX + (logoSize + logoSpacing) * index
          ctx.drawImage(logo, xPos, height - logoSize - 30, logoSize, logoSize)
        }
      })

      // Convert to data URL and download
      const dataUrl = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = `aura-${config.bottomText.toLowerCase()}-thumbnail.png`
      link.href = dataUrl
      link.click()
    })
  }

  // Function to handle image URL input
  const handleImageUrlInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const url = e.target.value
    handleConfigChange(key, url)

    // Reset image loaded state if changing background
    if (key === "backgroundImage") {
      setImageLoaded(false)
    }
  }

  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-6">
      {/* Settings Panel */}
      <div
        className={`${showSettings ? "block" : "hidden"} lg:block bg-gray-800 p-4 rounded-lg shadow-lg lg:w-1/3 mb-6 lg:mb-0 overflow-y-auto max-h-[80vh]`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Thumbnail Settings</h2>
          <button onClick={() => setShowSettings(!showSettings)} className="lg:hidden p-2 bg-gray-700 rounded-full">
            <EyeOff size={20} />
          </button>
        </div>

        {/* Text Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Text Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Top Text</label>
            <input
              type="text"
              value={config.topText}
              onChange={(e) => handleConfigChange("topText", e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Bottom Text</label>
            <input
              type="text"
              value={config.bottomText}
              onChange={(e) => handleConfigChange("bottomText", e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Top Text Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.topTextColor}
                  onChange={(e) => handleConfigChange("topTextColor", e.target.value)}
                  className="color-picker"
                />
                <span className="text-xs">{config.topTextColor}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bottom Text Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={config.bottomTextColor}
                  onChange={(e) => handleConfigChange("bottomTextColor", e.target.value)}
                  className="color-picker"
                />
                <span className="text-xs">{config.bottomTextColor}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Top Text Size: {config.topTextSize}</label>
              <input
                type="range"
                min="5"
                max="12"
                value={config.topTextSize}
                onChange={(e) => handleConfigChange("topTextSize", Number.parseInt(e.target.value))}
                className="custom-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bottom Text Size: {config.bottomTextSize}</label>
              <input
                type="range"
                min="5"
                max="12"
                value={config.bottomTextSize}
                onChange={(e) => handleConfigChange("bottomTextSize", Number.parseInt(e.target.value))}
                className="custom-slider"
              />
            </div>
          </div>
        </div>

        {/* Background Settings */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Background Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Background Image URL</label>
            <input
              type="text"
              value={config.backgroundImage}
              onChange={(e) => handleImageUrlInput(e, "backgroundImage")}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Overlay Color</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={config.overlayColor}
                onChange={(e) => handleConfigChange("overlayColor", e.target.value)}
                className="color-picker"
              />
              <span className="text-xs">{config.overlayColor}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Overlay Opacity: {config.overlayOpacity}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={config.overlayOpacity}
              onChange={(e) => handleConfigChange("overlayOpacity", Number.parseInt(e.target.value))}
              className="custom-slider"
            />
          </div>
        </div>

        {/* Logo Settings */}
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Logo Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Aura Logo URL</label>
            <input
              type="text"
              value={config.auraLogo}
              onChange={(e) => handleImageUrlInput(e, "auraLogo")}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-2">Framework Logos</label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showESX"
                  checked={config.showESX}
                  onChange={(e) => handleConfigChange("showESX", e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="showESX" className="text-sm">
                  Show ESX Logo
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showQB"
                  checked={config.showQB}
                  onChange={(e) => handleConfigChange("showQB", e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="showQB" className="text-sm">
                  Show QB Logo
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showQBX"
                  checked={config.showQBX}
                  onChange={(e) => handleConfigChange("showQBX", e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="showQBX" className="text-sm">
                  Show QBX Logo
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">ESX Logo URL</label>
              <input
                type="text"
                value={config.esxLogo}
                onChange={(e) => handleImageUrlInput(e, "esxLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">QB Logo URL</label>
              <input
                type="text"
                value={config.qbLogo}
                onChange={(e) => handleImageUrlInput(e, "qbLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">QBX Logo URL</label>
              <input
                type="text"
                value={config.qbxLogo}
                onChange={(e) => handleImageUrlInput(e, "qbxLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="lg:w-2/3 relative">
        {!showSettings && (
          <button
            onClick={() => setShowSettings(true)}
            className="absolute top-2 left-2 z-10 p-2 bg-gray-800 rounded-full lg:hidden"
          >
            <Settings size={20} />
          </button>
        )}

        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto"
          style={{ width: "1280px", height: "720px", maxWidth: "100%" }}
          ref={thumbnailRef}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={config.backgroundImage || "/placeholder.svg"}
              alt="Thumbnail Background"
              className="w-full h-full object-cover"
              onLoad={(e) => {
                // Apply contrast enhancement
                const target = e.target as HTMLImageElement
                target.style.filter = "contrast(1.1) brightness(0.95)"
                setImageLoaded(true)
              }}
              onError={() => {
                // Handle image load error
                console.error("Failed to load background image")
              }}
            />
          </div>

          {/* Overlay with configured color */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              backgroundColor: `${config.overlayColor}${Math.round(config.overlayOpacity * 2.55)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            {/* Gradient effect */}
            <div
              className="absolute inset-0 bg-gradient-radial"
              style={
                {
                  "--tw-gradient-from": `${config.overlayColor}33`,
                  "--tw-gradient-to": `${config.overlayColor}99`,
                } as any
              }
            ></div>

            {/* Two-line text */}
            <h1
              className={`text-${config.topTextSize}xl font-bold tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                color: config.topTextColor,
              }}
            >
              {config.topText}
            </h1>
            <div className="h-10"></div>
            <h2
              className={`text-${config.bottomTextSize}xl font-bold tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                color: config.bottomTextColor,
              }}
            >
              {config.bottomText}
            </h2>

            {/* Aura logo in bottom left */}
            <div className="absolute bottom-1 left-1">
              <img
                src={config.auraLogo || "/placeholder.svg"}
                alt="Aura Development Logo"
                className="h-24 w-24 object-contain drop-shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://via.placeholder.com/100?text=Logo+Error"
                }}
              />
            </div>

            {/* Framework logos in bottom right */}
            <div className="absolute bottom-6 right-4 flex items-center gap-5">
              {config.showESX && (
                <img
                  src={config.esxLogo || "/placeholder.svg"}
                  alt="ESX Logo"
                  className="h-16 w-16 object-contain drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "https://via.placeholder.com/70?text=ESX"
                  }}
                />
              )}
              {config.showQB && (
                <img
                  src={config.qbLogo || "/placeholder.svg"}
                  alt="QB Logo"
                  className="h-16 w-16 object-contain drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "https://via.placeholder.com/70?text=QB"
                  }}
                />
              )}
              {config.showQBX && (
                <img
                  src={config.qbxLogo || "/placeholder.svg"}
                  alt="QBX Logo"
                  className="h-16 w-16 object-contain drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "https://via.placeholder.com/70?text=QBX"
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-md font-bold tracking-wider hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center space-x-2 shadow-lg"
            disabled={!fontLoaded || !imageLoaded}
          >
            <Download className="h-5 w-5" />
            <span>{!fontLoaded || !imageLoaded ? "LOADING..." : "DOWNLOAD THUMBNAIL"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

