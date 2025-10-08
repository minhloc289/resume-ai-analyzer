"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div className="container mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold text-foreground">
                AI Resume Analyzer
              </span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Empower your career with AI-driven resume analysis and
              personalized insights.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-9 w-9 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-500 transition-all"
              >
                <Link
                  href="https://www.facebook.com/minhloc.caingoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow me on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-500 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Link
                  href="https://www.instagram.com/cnml_2809/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow me on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-500 transition-all"
                aria-label="Follow us on LinkedIn"
              >
                <Link
                  href="https://www.linkedin.com/in/ng%E1%BB%8Dc-minh-l%E1%BB%99c-c%C3%A1i-b5b9b9259//"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lét's connect on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-500 transition-all"
                aria-label="Star us on GitHub"
              >
                <Link
                  href="https://github.com/minhloc289"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Give me a star on GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/analyze"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Analyze Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/70 hover:text-purple-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-foreground/60">
              Get the latest tips and updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-10 text-sm bg-background border-border/60 focus:border-purple-500"
                aria-label="Email address for newsletter"
              />
              <Button
                onClick={handleSubscribe}
                className="w-full h-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/20"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2025 AI Resume Analyzer. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-foreground/60 hover:text-purple-500 transition-colors"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-foreground/60 hover:text-purple-500 transition-colors"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                href="/faq"
                className="text-sm text-foreground/60 hover:text-purple-500 transition-colors"
                aria-label="Frequently Asked Questions"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
