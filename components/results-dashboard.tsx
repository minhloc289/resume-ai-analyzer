"use client"
import { Button } from "@/components/ui/button"
import { Download, Share2, RefreshCw, Edit, BarChart3 } from "lucide-react"
import { ScoreCard } from "@/components/score-card"
import { StrengthsWeaknesses } from "@/components/strengths-weaknesses"
import { CareerSuggestions } from "@/components/career-suggestions"
import { DetailedAnalysis } from "@/components/detailed-analysis"
import Link from "next/link"

export function ResultsDashboard() {
  return (
    <section className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Your Resume Analysis</h1>
              <p className="text-muted-foreground">Analyzed on {new Date().toLocaleDateString()}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" size="sm" aria-label="Share results">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" aria-label="Download PDF report">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
              <Link href="/analyze">
                <Button size="sm" className="ai-glow" aria-label="Analyze another resume">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Analyze Another
                </Button>
              </Link>
            </div>
          </div>

          {/* Score Overview */}
          <ScoreCard />

          {/* Strengths & Weaknesses */}
          <StrengthsWeaknesses />

          {/* Career Suggestions */}
          <CareerSuggestions />

          {/* Detailed Analysis */}
          <DetailedAnalysis />

          <div className="sticky bottom-4 z-10">
            <div className="bg-card/95 backdrop-blur-lg border border-border/50 rounded-xl p-4 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-foreground mb-1">Ready to improve your resume?</h3>
                  <p className="text-sm text-muted-foreground">Take action on these insights</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 bg-transparent"
                    aria-label="Improve resume with inline editor"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Improve Resume
                  </Button>
                  <Button variant="outline" size="sm" className="h-10 bg-transparent" aria-label="Compare career paths">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Compare Careers
                  </Button>
                  <Button size="sm" className="h-10 ai-glow" aria-label="Download detailed PDF report">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
