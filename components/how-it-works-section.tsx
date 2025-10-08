"use client"

import { Upload, Cpu, BarChart3, Download } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Drag-drop PDF/DOCX/TXT.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Process",
    description: "Scan structure, skills, alignment.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Insights",
    description: "View scores, strengths, suggestions.",
    step: "03",
  },
  {
    icon: Download,
    title: "Download",
    description: "Get full report.",
    step: "04",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            How It{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-foreground font-semibold text-pretty">
            Professional resume analysis in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center space-y-4">
                <motion.div
                  className="relative inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-primary/20 blur-2xl animate-glow-pulse" />
                  <div className="relative w-32 h-32 min-h-[44px] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center transition-all duration-150 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20">
                    <step.icon className="h-14 w-14 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-foreground font-semibold text-pretty leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
