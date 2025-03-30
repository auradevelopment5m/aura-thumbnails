"use client"

import ThumbnailGenerator from "@/components/thumbnail-generator"

export default function Home() {
  return (
    <>
      {/* Add critical CSS inline */}
      <style jsx global>{`
        body {
          background-color: #111827;
          color: white;
        }
        .bg-gray-800 {
          background-color: #1f2937;
        }
        .bg-gray-700 {
          background-color: #374151;
        }
        .rounded-lg {
          border-radius: 0.5rem;
        }
        .p-4 {
          padding: 1rem;
        }
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Aura Thumbnail Generator
          </h1>
          <ThumbnailGenerator />
        </div>
      </main>
    </>
  )
}

