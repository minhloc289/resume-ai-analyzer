import { UploadSection } from "@/components/upload-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <UploadSection />
      <Footer />
    </main>
  )
}
