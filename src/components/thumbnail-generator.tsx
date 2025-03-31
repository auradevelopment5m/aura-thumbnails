"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { Download, Eye, X } from "lucide-react"

const availableFonts = [
  { value: "Anton", label: "Anton", cssName: "'Anton', Impact, sans-serif" },
  { value: "BebasNeue", label: "Bebas Neue", cssName: "'Bebas Neue', cursive" },
  { value: "Teko", label: "Teko", cssName: "'Teko', sans-serif" },
  { value: "Oswald", label: "Oswald", cssName: "'Oswald', sans-serif" },
  { value: "Staatliches", label: "Staatliches", cssName: "'Staatliches', cursive" },
]

export default function ThumbnailGenerator() {
  const thumbnailRef = useRef<HTMLDivElement>(null)
  const [fontLoaded, setFontLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showSettings, setShowSettings] = useState(true)
  const [fullscreenPreview, setFullscreenPreview] = useState(false)

  const [config, setConfig] = useState({
    topText: "AURA",
    bottomText: "PRINTERS",
    topTextColor: "#2ecc71",
    bottomTextColor: "#ffffff",
    topTextSize: 8,
    bottomTextSize: 9,
    topTextFont: "Anton",
    bottomTextFont: "Anton",
    topTextBold: true,
    bottomTextBold: true,
    textPadding: 10, // New setting for padding between texts (in pixels)
    backgroundImage: "https://i.postimg.cc/Bv5q3LD1/image.png",
    overlayColor: "#174D25",
    overlayOpacity: 45,
    auraLogo: "https://i.postimg.cc/jdM8CF8v/LOGO-Aura-Development-512x512-Transparent-by-Flight-Design.png",
    showESX: false,
    showQB: true,
    showQBX: true,
    esxLogo: "https://i.postimg.cc/6pTMZfgK/image.png",
    qbLogo: "https://i.postimg.cc/MGQtPKzr/image.png",
    qbxLogo: "https://i.postimg.cc/B6fpd96Z/image.png",
  })

  useEffect(() => {
    const fontLinks = availableFonts.map((font) => {
      const link = document.createElement("link")
      link.href = `https://fonts.googleapis.com/css2?family=${font.value.replace(" ", "+")}&display=swap`
      link.rel = "stylesheet"
      return link
    })

    fontLinks.forEach((link) => document.head.appendChild(link))
    setFontLoaded(true)
    console.log("Font loading initiated")

    return () => {
      fontLinks.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
      })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!fontLoaded || !imageLoaded) {
        console.log("Fallback: Setting font and image as loaded")
        setFontLoaded(true)
        setImageLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [fontLoaded, imageLoaded])

  const handleConfigChange = (key: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleDownload = () => {
    if (!thumbnailRef.current || !fontLoaded || !imageLoaded) return

    const width = 1280
    const height = 720

    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = config.backgroundImage

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
      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")
      tempCanvas.width = width
      tempCanvas.height = height

      if (tempCtx) {
        tempCtx.drawImage(img, 0, 0, width, height)
        tempCtx.globalCompositeOperation = "source-atop"
        tempCtx.fillStyle = "rgba(255, 255, 255, 0.05)"
        tempCtx.fillRect(0, 0, width, height)
        ctx.drawImage(tempCanvas, 0, 0, width, height)
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      }

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.drawImage(img, 0, 0, width, height)

      ctx.globalCompositeOperation = "source-atop"
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = "source-over"

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

      const gradient = ctx.createRadialGradient(width / 2, height / 2, height / 3, width / 2, height / 2, height)
      gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`)
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      ctx.shadowColor = "rgba(0, 0, 0, 0.7)"
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 3
      ctx.shadowOffsetY = 3

      const getFont = (fontKey: string) => {
        const font = availableFonts.find((f) => f.value === fontKey)
        return font ? font.cssName : availableFonts[0].cssName
      }

      const topFontSize =
        config.topTextSize <= 9 ? 70 + config.topTextSize * 5 : 70 + 9 * 5 + (config.topTextSize - 9) * 15

      const bottomFontSize =
        config.bottomTextSize <= 9 ? 70 + config.bottomTextSize * 5 : 70 + 9 * 5 + (config.bottomTextSize - 9) * 15

      // Calculate vertical positions with padding
      const paddingPixels = config.textPadding * 5 // Convert to pixels (multiplier for visual impact)
      const topTextY = height / 2 - paddingPixels / 2
      const bottomTextY = height / 2 + paddingPixels / 2

      // Draw top text
      ctx.fillStyle = config.topTextColor
      const topFontWeight = config.topTextBold ? "bold" : "normal"
      ctx.font = `${topFontWeight} ${topFontSize}px ${getFont(config.topTextFont)}`
      ctx.fillText(config.topText, width / 2, topTextY)

      // Draw bottom text
      ctx.fillStyle = config.bottomTextColor
      const bottomFontWeight = config.bottomTextBold ? "bold" : "normal"
      ctx.font = `${bottomFontWeight} ${bottomFontSize}px ${getFont(config.bottomTextFont)}`
      ctx.fillText(config.bottomText, width / 2, bottomTextY)

      const auraLogoSize = 120
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)"
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 5
      ctx.shadowOffsetY = 5
      ctx.drawImage(auraLogo, 5, height - auraLogoSize - 5, auraLogoSize, auraLogoSize)

      const logoSize = 85
      const logoSpacing = 25

      const visibleLogos = [
        config.showESX ? esxLogo : null,
        config.showQB ? qbLogo : null,
        config.showQBX ? qbxLogo : null,
      ].filter(Boolean)

      const totalWidth = visibleLogos.length * logoSize + (visibleLogos.length - 1) * logoSpacing
      const startX = width - totalWidth - 20

      visibleLogos.forEach((logo, index) => {
        if (logo) {
          const xPos = startX + (logoSize + logoSpacing) * index
          ctx.drawImage(logo, xPos, height - logoSize - 30, logoSize, logoSize)
        }
      })

      const dataUrl = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = `aura-${config.bottomText.toLowerCase()}-thumbnail.png`
      link.href = dataUrl
      link.click()
    })
  }

  const handleImageUrlInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const url = e.target.value
    handleConfigChange(key, url)

    if (key === "backgroundImage") {
      setImageLoaded(false)
    }
  }

  const getFontStyle = (fontKey: string) => {
    const font = availableFonts.find((f) => f.value === fontKey)
    return font ? font.cssName : availableFonts[0].cssName
  }

  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-6">
      <div
        className={`${showSettings ? "block" : "hidden"} lg:block bg-gray-800 p-4 rounded-lg shadow-lg lg:w-1/3 mb-6 lg:mb-0 overflow-y-auto max-h-[80vh]`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Thumbnail Settings</h2>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="lg:hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
          >
            <Eye size={20} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Text Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Top Text</label>
            <input
              type="text"
              value={config.topText}
              onChange={(e) => handleConfigChange("topText", e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Bottom Text</label>
            <input
              type="text"
              value={config.bottomText}
              onChange={(e) => handleConfigChange("bottomText", e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Add text spacing control here */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Text Spacing: {config.textPadding}</label>
            <input
              type="range"
              min="1"
              max="30"
              value={config.textPadding}
              onChange={(e) => handleConfigChange("textPadding", Number.parseInt(e.target.value))}
              className="custom-slider"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Top Font</label>
              <select
                value={config.topTextFont}
                onChange={(e) => handleConfigChange("topTextFont", e.target.value)}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {availableFonts.map((font) => (
                  <option key={font.value} value={font.value} style={{ fontFamily: font.cssName }}>
                    {font.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bottom Font</label>
              <select
                value={config.bottomTextFont}
                onChange={(e) => handleConfigChange("bottomTextFont", e.target.value)}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {availableFonts.map((font) => (
                  <option key={font.value} value={font.value} style={{ fontFamily: font.cssName }}>
                    {font.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Top Text Style</label>
              <div className="flex items-center gap-2">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={config.topTextBold}
                    onChange={(e) => handleConfigChange("topTextBold", e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="text-sm">Bold</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bottom Text Style</label>
              <div className="flex items-center gap-2">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={config.bottomTextBold}
                    onChange={(e) => handleConfigChange("bottomTextBold", e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="text-sm">Bold</span>
                </label>
              </div>
            </div>
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

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Background Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Background Image URL</label>
            <input
              type="text"
              value={config.backgroundImage}
              onChange={(e) => handleImageUrlInput(e, "backgroundImage")}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">Logo Settings</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Aura Logo URL</label>
            <input
              type="text"
              value={config.auraLogo}
              onChange={(e) => handleImageUrlInput(e, "auraLogo")}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-2">Framework Logos</label>
            <div className="flex flex-col gap-2">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={config.showESX}
                  onChange={(e) => handleConfigChange("showESX", e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="text-sm">Show ESX Logo</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={config.showQB}
                  onChange={(e) => handleConfigChange("showQB", e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="text-sm">Show QB Logo</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={config.showQBX}
                  onChange={(e) => handleConfigChange("showQBX", e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="text-sm">Show QBX Logo</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">ESX Logo URL</label>
              <input
                type="text"
                value={config.esxLogo}
                onChange={(e) => handleImageUrlInput(e, "esxLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">QB Logo URL</label>
              <input
                type="text"
                value={config.qbLogo}
                onChange={(e) => handleImageUrlInput(e, "qbLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">QBX Logo URL</label>
              <input
                type="text"
                value={config.qbxLogo}
                onChange={(e) => handleImageUrlInput(e, "qbxLogo")}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 relative">
        {!showSettings && (
          <button
            onClick={() => setShowSettings(true)}
            className="absolute top-2 left-2 z-10 p-2 bg-gray-800 rounded-full lg:hidden hover:bg-gray-700 transition"
          >
            <Eye size={20} />
          </button>
        )}

        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto group"
          style={{ width: "1280px", height: "720px", maxWidth: "100%" }}
          ref={thumbnailRef}
        >
          <button
            onClick={() => setFullscreenPreview(true)}
            className="absolute top-4 right-4 z-10 p-3 bg-gray-800/70 rounded-full hover:bg-gray-700 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="View fullscreen"
          >
            <Eye size={22} />
          </button>

          <div className="absolute inset-0">
            <img
              src={config.backgroundImage || "/placeholder.svg"}
              alt="Thumbnail Background"
              className="w-full h-full object-cover"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement
                target.style.filter = "contrast(1.1) brightness(0.95)"
                setImageLoaded(true)
                console.log("Image loaded successfully")
              }}
              onError={() => {
                console.error("Failed to load background image")
              }}
            />
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              backgroundColor: `${config.overlayColor}${Math.round(config.overlayOpacity * 2.55)
                .toString(16)
                .padStart(2, "0")}`,
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-radial"
              style={
                {
                  "--tw-gradient-from": `${config.overlayColor}33`,
                  "--tw-gradient-to": `${config.overlayColor}99`,
                } as any
              }
            ></div>

            {/* Apply padding to the text container */}
            <div className="flex flex-col items-center" style={{ gap: `${config.textPadding * 5}px` }}>
              <h1
                className={`${config.topTextSize <= 9 ? `text-${config.topTextSize}xl` : ""} tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
                style={{
                  fontFamily: getFontStyle(config.topTextFont),
                  color: config.topTextColor,
                  fontSize: config.topTextSize > 9 ? `${config.topTextSize}rem` : undefined,
                  fontWeight: config.topTextBold ? "bold" : "normal",
                }}
              >
                {config.topText}
              </h1>
              <h2
                className={`${config.bottomTextSize <= 9 ? `text-${config.bottomTextSize}xl` : ""} tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
                style={{
                  fontFamily: getFontStyle(config.bottomTextFont),
                  color: config.bottomTextColor,
                  fontSize: config.bottomTextSize > 9 ? `${config.bottomTextSize}rem` : undefined,
                  fontWeight: config.bottomTextBold ? "bold" : "normal",
                }}
              >
                {config.bottomText}
              </h2>
            </div>

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

        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold tracking-wider transition-all flex items-center space-x-2 shadow-lg"
            disabled={!fontLoaded || !imageLoaded}
          >
            <Download className="h-5 w-5" />
            <span>{!fontLoaded || !imageLoaded ? "LOADING..." : "DOWNLOAD THUMBNAIL"}</span>
          </button>
        </div>
      </div>

      {fullscreenPreview && (
        <div className="fullscreen-modal" onClick={() => setFullscreenPreview(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="relative w-full h-full aspect-video"
              style={{ width: "1280px", height: "720px", maxWidth: "100%" }}
            >
              <div className="absolute inset-0">
                <img
                  src={config.backgroundImage || "/placeholder.svg"}
                  alt="Thumbnail Background"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.1) brightness(0.95)" }}
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  backgroundColor: `${config.overlayColor}${Math.round(config.overlayOpacity * 2.55)
                    .toString(16)
                    .padStart(2, "0")}`,
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-radial"
                  style={
                    {
                      "--tw-gradient-from": `${config.overlayColor}33`,
                      "--tw-gradient-to": `${config.overlayColor}99`,
                    } as any
                  }
                ></div>

                {/* Apply padding to the text container */}
                <div className="flex flex-col items-center" style={{ gap: `${config.textPadding * 5}px` }}>
                  <h1
                    className={`${config.topTextSize <= 9 ? `text-${config.topTextSize}xl` : ""} tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
                    style={{
                      fontFamily: getFontStyle(config.topTextFont),
                      color: config.topTextColor,
                      fontSize: config.topTextSize > 9 ? `${config.topTextSize}rem` : undefined,
                      fontWeight: config.topTextBold ? "bold" : "normal",
                    }}
                  >
                    {config.topText}
                  </h1>
                  <h2
                    className={`${config.bottomTextSize <= 9 ? `text-${config.bottomTextSize}xl` : ""} tracking-wide text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]`}
                    style={{
                      fontFamily: getFontStyle(config.bottomTextFont),
                      color: config.bottomTextColor,
                      fontSize: config.bottomTextSize > 9 ? `${config.bottomTextSize}rem` : undefined,
                      fontWeight: config.bottomTextBold ? "bold" : "normal",
                    }}
                  >
                    {config.bottomText}
                  </h2>
                </div>

                <div className="absolute bottom-1 left-1">
                  <img
                    src={config.auraLogo || "/placeholder.svg"}
                    alt="Aura Development Logo"
                    className="h-24 w-24 object-contain drop-shadow-xl"
                  />
                </div>

                <div className="absolute bottom-6 right-4 flex items-center gap-5">
                  {config.showESX && (
                    <img
                      src={config.esxLogo || "/placeholder.svg"}
                      alt="ESX Logo"
                      className="h-16 w-16 object-contain drop-shadow-lg"
                    />
                  )}
                  {config.showQB && (
                    <img
                      src={config.qbLogo || "/placeholder.svg"}
                      alt="QB Logo"
                      className="h-16 w-16 object-contain drop-shadow-lg"
                    />
                  )}
                  {config.showQBX && (
                    <img
                      src={config.qbxLogo || "/placeholder.svg"}
                      alt="QBX Logo"
                      className="h-16 w-16 object-contain drop-shadow-lg"
                    />
                  )}
                </div>
              </div>
            </div>
            <button className="close-button" onClick={() => setFullscreenPreview(false)}>
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

