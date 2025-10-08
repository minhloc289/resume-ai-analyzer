"use client";

import { Button } from "@/components/ui/button";
import {
  Upload,
  Sparkles,
  ArrowRight,
  CheckCircle,
  BarChart,
  Zap,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
             border border-white/10 bg-white/5 backdrop-blur-md"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground font-semibold">
              Powered by Advanced AI
            </span>
          </motion.div>

          <h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-foreground/95">Resume Analysis</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-2xl text-foreground/80 font-medium leading-relaxed">
            Upload resume—AI analysis & score in 30s. Unlock strengths & career
            fits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/analyze">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="relative h-14 px-8 text-lg font-semibold rounded-xl bg-white text-black 
                            border border-transparent transition-all duration-300 
                            hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 
                            active:scale-[0.98]"
                >
                  <Upload className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-[1px]" />
                  Upload Resume Now
                </Button>
              </motion.div>
            </Link>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button
                size="lg"
                variant="outline"
                className="relative h-14 px-8 text-lg font-semibold rounded-xl 
                          bg-black text-white border border-white/15 transition-all duration-300
                          hover:bg-neutral-900 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] 
                          hover:-translate-y-0.5 active:scale-[0.98]"
              >
                See Example
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="group flex items-center gap-3 text-sm font-semibold text-foreground/90">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/20 group-hover:bg-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-[0_0_12px_oklch(var(--primary)/0.15)] group-hover:shadow-[0_0_20px_oklch(var(--primary)/0.25)]">
                <CheckCircle className="h-4 w-4 text-foreground" />
              </div>
              <span>Free Analysis</span>
            </div>

            <div className="group flex items-center gap-3 text-sm font-semibold text-foreground/90">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/20 group-hover:bg-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-[0_0_12px_oklch(var(--primary)/0.15)] group-hover:shadow-[0_0_20px_oklch(var(--primary)/0.25)]">
                <BarChart className="h-4 w-4 text-foreground" />
              </div>
              <span>In-depth Analysis</span>
            </div>

            <div className="group flex items-center gap-3 text-sm font-semibold text-foreground/90">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/20 group-hover:bg-primary/10 group-hover:ring-primary/30 transition-all duration-300 shadow-[0_0_12px_oklch(var(--primary)/0.15)] group-hover:shadow-[0_0_20px_oklch(var(--primary)/0.25)]">
                <Zap className="h-4 w-4 text-foreground" />
              </div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
