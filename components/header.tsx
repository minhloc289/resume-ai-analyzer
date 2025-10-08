"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="relative flex"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Sparkles className="h-7 w-7 text-primary transition-transform mr-2" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            <span className="text-xl font-bold text-foreground relative">
              <span className="relative z-10">AI Resume Analyzer</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors font-semibold relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors font-semibold relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/analyze"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors font-semibold relative group"
          >
            Analyze Resume
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex min-h-[44px] text-foreground/90 hover:text-foreground hover:bg-foreground/5"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="relative overflow-hidden group min-h-[44px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/20"
          >
            <span className="relative z-10 font-semibold">
              Get Started Free
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden min-h-[44px] min-w-[44px] text-foreground/90 hover:text-foreground hover:bg-foreground/5"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
