"use client";

import { Button } from "@/components/ui/button";
import { Upload, Sparkles, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm text-foreground font-semibold">
              Powered by Advanced AI
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <span className="text-foreground">AI-Powered</span>
            <br />
            <span className="text-foreground">Resume Analysis</span>
            <br />
          </h1>

          <p className="text-xl md:text-2xl text-foreground font-semibold max-w-2xl mx-auto text-pretty leading-relaxed">
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
                  className="relative overflow-hidden group h-14 px-8 text-lg ai-glow min-h-[44px]"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  <span className="relative z-10 font-semibold">
                    Upload Resume Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
                className="h-14 px-8 text-lg border-primary/20 hover:border-primary/40 bg-transparent font-semibold min-h-[44px]"
              >
                <span>See Example</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground font-semibold">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Free Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>No Sign-up</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
