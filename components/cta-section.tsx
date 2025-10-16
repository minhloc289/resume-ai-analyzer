"use client";

import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, BarChart, Smile, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">
            Ready to{" "}
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
              <span className="relative z-10">Transform</span>
            </span>{" "}
            Your Resume?
          </h2>
          <p className="text-lg text-white/80 text-pretty max-w-2xl mx-auto">
            Join thousands who improved their resumes with AI. Start your free
            analysis now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/analyze" passHref>
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
                  <Upload className="mr-2 h-5 w-5" />
                  Analyze My Resume
                </Button>
              </motion.div>
            </Link>

            <Link href="/learn-more" passHref>
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
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md space-y-3">
              <BarChart className="h-6 w-6 mx-auto text-white/70" />
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/60 font-semibold tracking-wide">
                Resumes Analyzed
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md space-y-3">
              <Smile className="h-6 w-6 mx-auto text-white/70" />
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-sm text-white/60 font-semibold tracking-wide">
                Satisfaction Rate
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md space-y-3">
              <Clock className="h-6 w-6 mx-auto text-white/70" />
              <div className="text-3xl font-bold text-white">30s</div>
              <div className="text-sm text-white/60 font-semibold tracking-wide">
                Average Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
