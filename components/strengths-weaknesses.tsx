"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const strengths = [
  "Strong technical skills section with relevant technologies",
  "Clear and quantifiable achievements with metrics",
  "Well-structured work experience with progression",
  "Professional summary effectively highlights key qualifications",
]

const weaknesses = [
  { text: 'Missing keywords for target role (e.g., "Agile", "Scrum")', suggestion: "Add Agile/Scrum keywords" },
  { text: "Education section could include relevant coursework", suggestion: "Add coursework details" },
  { text: "No mention of soft skills or leadership experience", suggestion: "Include soft skills" },
  { text: "Consider adding a projects or certifications section", suggestion: "Add projects section" },
]

export function StrengthsWeaknesses() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
              <div className="absolute inset-0 bg-primary/20 blur-xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Strengths</h3>
          </div>

          <ul className="space-y-3" role="list">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <AlertCircle className="h-6 w-6 text-accent" aria-hidden="true" />
              <div className="absolute inset-0 bg-accent/20 blur-xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Areas for Improvement</h3>
          </div>

          <ul className="space-y-3" role="list">
            {weaknesses.map((weakness, index) => (
              <li key={index} className="group">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 space-y-2">
                    <span className="text-sm block">{weakness.text}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-accent/30 hover:bg-accent/10 hover:border-accent/50 bg-transparent"
                      aria-label={`Apply suggestion: ${weakness.suggestion}`}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {weakness.suggestion}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}
