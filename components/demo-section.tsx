"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export function DemoSection() {
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, x: -20 },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,110,220,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">
              Intelligent Resumes —{" "}
              <span className="relative inline-block">
                <span
                  className="
                    absolute -inset-2 
                    bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500
                    rounded-full
                    blur-xl
                    opacity-40
                    group-hover:opacity-80 transition-opacity
                  "
                  aria-hidden="true"
                ></span>
                <span className="relative z-10">Better Opportunities.</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our AI refines every detail to ensure your resume stands out and
              secures more interviews.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* --- BEFORE CARD --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative h-full rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-md transition-all duration-300 hover:border-red-500/30"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white/90">
                      Before Analysis
                    </h3>
                    <p className="text-sm text-white/60">Standard Resume</p>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center rounded-full border border-red-500/20 bg-black/40">
                    <span className="text-xs text-red-400/80">ATS Score</span>
                    <span className="text-4xl font-bold text-red-400">62</span>
                  </div>
                </div>

                {/* === CV MÔ PHỎNG SƠ SÀI === */}
                <div className="rounded-xl bg-black/40 p-6 border border-white/10 h-64 space-y-4">
                  <div className="h-4 w-2/3 rounded-full bg-neutral-700/60" />
                  <div className="h-2 w-1/2 rounded-full bg-neutral-700/50" />
                  <div className="h-2 w-full rounded-full bg-neutral-700/50" />
                  <div className="h-2 w-5/6 rounded-full bg-neutral-700/50" />
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={listVariants}
                  className="space-y-3 pt-2"
                >
                  <h4 className="font-semibold text-white/80">
                    Common Issues:
                  </h4>
                  {[
                    "Weak keyword optimization",
                    "Poor formatting",
                    "Vague descriptions",
                  ].map((issue) => (
                    <motion.div
                      key={issue}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <XCircle className="h-5 w-5 text-red-400/80 flex-shrink-0" />
                      <span>{issue}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* --- AFTER CARD --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="group relative h-full rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-md transition-all duration-300"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              <div className="relative p-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white/90">
                      After AI Optimization
                    </h3>
                    <p className="text-sm text-white/60">Optimized Resume</p>
                  </div>
                  <div className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center rounded-full border border-primary/30 bg-black/40">
                    <span className="text-xs text-primary/80 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      ATS Score
                    </span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      87
                    </span>
                  </div>
                </div>

                {/* === CV MÔ PHỎNG CHI TIẾT === */}
                <div className="rounded-xl bg-black/40 p-6 border border-primary/20 h-64 space-y-5">
                  {/* Section 1 */}
                  <div className="space-y-2">
                    <div className="h-3 w-1/3 rounded-full bg-primary/50" />
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                      <div className="h-2 w-full rounded-full bg-primary/30" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                      <div className="h-2 w-5/6 rounded-full bg-primary/30" />
                    </div>
                  </div>
                  {/* Section 2 - Skills */}
                  <div className="space-y-3">
                    <div className="h-3 w-1/4 rounded-full bg-primary/50" />
                    <div className="grid grid-cols-5 gap-2">
                      <div className="h-6 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="h-6 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="h-6 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="h-6 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={listVariants}
                  className="space-y-3 pt-2"
                >
                  <h4 className="font-semibold text-white/80">
                    Key Improvements:
                  </h4>
                  {[
                    "ATS-optimized keywords",
                    "Professional formatting",
                    "Impactful action verbs",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary/70 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
