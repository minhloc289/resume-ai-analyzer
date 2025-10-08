import { ResultsDashboard } from "@/components/results-dashboard"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResultsDashboard />
      <Footer />
    </main>
  )
}
