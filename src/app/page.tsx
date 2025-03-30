import ThumbnailGenerator from "@/components/thumbnail-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Aura Thumbnail Generator</h1>
        <ThumbnailGenerator />
      </div>
    </main>
  )
}

