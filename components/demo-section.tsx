"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function DemoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              See the{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Power of AI
              </span>{" "}
              in Action
            </h2>
            <p className="text-lg text-foreground font-semibold max-w-2xl mx-auto text-pretty leading-relaxed">
              Real results—users improved scores by 25% on average.
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hover-scale"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-50" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">Before Analysis</h3>
                    <div className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-bold">
                      Score: 62
                    </div>
                  </div>

                  {/* Blurred Sample Resume Preview */}
                  <div className="relative h-64 rounded-lg overflow-hidden border border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-muted/80 to-muted blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2 p-6">
                        <p className="text-sm text-foreground font-semibold">Sample Resume</p>
                        <p className="text-xs text-foreground/80 font-semibold">
                          Missing key skills & formatting issues
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                      <span>Weak keywords</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                      <span>Poor structure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                      <span>Missing sections</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* After Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hover-scale"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 relative overflow-hidden group h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-50" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">After AI Optimization</h3>
                    <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Score: 87
                    </div>
                  </div>

                  {/* Mock Results Thumbnail */}
                  <div className="relative h-64 rounded-lg overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-24 bg-primary/30 rounded" />
                        <div className="h-3 w-16 bg-primary/50 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-muted/50 rounded" />
                        <div className="h-2 w-5/6 bg-muted/50 rounded" />
                        <div className="h-2 w-4/6 bg-muted/50 rounded" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-12 bg-primary/20 rounded" />
                        <div className="h-12 bg-secondary/20 rounded" />
                        <div className="h-12 bg-accent/20 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Optimized for ATS</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Professional structure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>All sections complete</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/analyze">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                <Button size="lg" className="ai-glow h-12 px-8 min-h-[44px]">
                  Try It Now - See Your Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <p className="text-sm text-foreground font-semibold mt-4">
              Join 10,000+ users who improved their resumes with AI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
