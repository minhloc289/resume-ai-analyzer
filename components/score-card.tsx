"use client"

import { Card } from "@/components/ui/card"
import { Trophy, TrendingUp, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

const scores = [
  { label: "Overall Score", value: 85, icon: Trophy, color: "text-primary" },
  { label: "Content Quality", value: 88, icon: Target, color: "text-secondary" },
  { label: "Format & Structure", value: 82, icon: Zap, color: "text-accent" },
  { label: "Career Alignment", value: 86, icon: TrendingUp, color: "text-chart-4" },
]

export function ScoreCard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {scores.map((score, index) => (
        <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2, ease: "easeOut" }}>
          <Card
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            role="article"
            aria-label={`${score.label}: ${score.value} out of 100`}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 group-hover:from-primary/20 transition-all duration-200"
              aria-hidden="true"
            />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <score.icon className={`h-8 w-8 ${score.color}`} aria-hidden="true" />
                <div className="text-3xl font-bold text-foreground">{score.value}</div>
              </div>

              <div>
                <p className="text-sm text-foreground font-semibold mb-2">{score.label}</p>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${score.value}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${score.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)" }}
                    role="progressbar"
                    aria-valuenow={score.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${score.label} progress`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
