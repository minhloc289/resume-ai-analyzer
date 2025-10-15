"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      {/* Floating orbs for AI effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                AI-Powered Analysis
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">
                Transform Your Resume with
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Intelligence
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl" />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real results from real users:{" "}
              <span className="text-foreground font-semibold">
                25% average score improvement
              </span>{" "}
              in minutes
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden bg-card/80 backdrop-blur-xl border border-border/50 hover:border-destructive/30 transition-all duration-500 group">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 space-y-6">
                  {/* Header with score */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-6 w-1 bg-destructive rounded-full" />
                        <h3 className="text-xl font-bold text-foreground">
                          Before Analysis
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Unoptimized Resume
                      </p>
                    </div>

                    {/* Score badge */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-destructive/20 blur-xl rounded-full" />
                      <div className="relative w-28 px-4 py-2.5 rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/10 border-2 border-destructive/30 backdrop-blur-sm">
                        <div className="text-xs font-semibold text-destructive/80 text-center">
                          ATS Score
                        </div>
                        <div className="text-2xl font-bold text-destructive text-center">
                          62
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Resume Preview */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30 h-64">
                    {/* Mock resume content with issues */}
                    <div className="p-5 space-y-3 opacity-70">
                      <div className="space-y-1.5">
                        <div className="h-5 w-3/4 bg-foreground/10 rounded" />
                        <div className="h-2.5 w-1/2 bg-foreground/10 rounded" />
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <div className="h-2.5 w-full bg-foreground/10 rounded" />
                        <div className="h-2.5 w-5/6 bg-foreground/10 rounded" />
                        <div className="h-2.5 w-4/6 bg-foreground/10 rounded" />
                      </div>

                      <div className="pt-2 space-y-2">
                        <div className="h-2.5 w-2/3 bg-foreground/10 rounded" />
                        <div className="h-2.5 w-full bg-foreground/10 rounded" />
                      </div>
                    </div>

                    {/* Overlay with issues */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent flex items-end p-5">
                      <div className="space-y-2 w-full">
                        <p className="text-sm font-semibold text-destructive flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Multiple Issues Detected
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Issues list */}
                  <div className="space-y-2 pt-2">
                    {[
                      { icon: XCircle, text: "Weak keyword optimization" },
                      { icon: XCircle, text: "Poor formatting structure" },
                      { icon: XCircle, text: "Incomplete sections" },
                    ].map((issue, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <issue.icon className="h-4 w-4 text-destructive flex-shrink-0" />
                        <span>{issue.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* After Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden bg-card/80 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 group">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

                <div className="relative p-8 space-y-6">
                  {/* Header with improved score */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-6 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
                        <h3 className="text-xl font-bold text-foreground">
                          After AI Optimization
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        AI-Enhanced Resume
                      </p>
                    </div>

                    {/* Improved score badge */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse" />
                      <div className="relative w-28 px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 backdrop-blur-sm">
                        <div className="text-xs font-semibold text-primary/80 flex items-center justify-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>ATS Score</span>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
                          87
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optimized Visual Preview */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 h-64">
                    {/* Mock optimized resume */}
                    <div className="p-5 space-y-3">
                      <div className="space-y-1.5">
                        <div className="h-5 w-3/4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded shadow-sm" />
                        <div className="h-2.5 w-1/2 bg-primary/20 rounded" />
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <div className="h-2.5 w-full bg-gradient-to-r from-primary/10 to-transparent rounded" />
                        <div className="h-2.5 w-5/6 bg-gradient-to-r from-primary/10 to-transparent rounded" />
                        <div className="h-2.5 w-4/6 bg-gradient-to-r from-primary/10 to-transparent rounded" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-primary/60" />
                        </div>
                        <div className="h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg border border-secondary/20 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-secondary/60" />
                        </div>
                        <div className="h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/20 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-accent/60" />
                        </div>
                      </div>
                    </div>

                    {/* Success overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent flex items-end p-5">
                      <div className="space-y-2 w-full">
                        <p className="text-sm font-semibold text-primary flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Optimized & ATS-Ready
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Improvements list */}
                  <div className="space-y-2 pt-2">
                    {[
                      { icon: CheckCircle2, text: "ATS-optimized keywords" },
                      { icon: CheckCircle2, text: "Professional structure" },
                      { icon: CheckCircle2, text: "Complete optimization" },
                    ].map((improvement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <improvement.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{improvement.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
