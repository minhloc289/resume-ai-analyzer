"use client";

import {
  Brain,
  Target,
  TrendingUp,
  FileCheck,
  Zap,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Career Path Detection",
    description: "Analyze experience & skills for optimal career direction.",
    color: "text-blue-500",
  },
  {
    icon: Target,
    title: "Smart Resume Scoring",
    description:
      "Comprehensive scores based on structure, keywords & industry standards.",
    color: "text-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Personalized Recommendations",
    description: "Actionable suggestions to improve content & missing skills.",
    color: "text-chart-2",
  },
  {
    icon: FileCheck,
    title: "Format Optimization",
    description: "Ensure ATS compliance and industry best practices.",
    color: "text-chart-4",
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description:
      "Detailed insights in under 30 seconds with lightning-fast AI.",
    color: "text-chart-5",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Data processed securely—never stored or shared.",
    color: "text-primary",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Powered by AI Intelligence
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Advanced AI analyzes every aspect for comprehensive insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hover-scale"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <div className="space-y-4">
                  <motion.div
                    className="relative w-14 h-14"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <feature.icon
                      className={`h-14 w-14 ${feature.color} transition-all duration-150`}
                    />
                    <div
                      className={`absolute inset-0 ${feature.color} opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-150`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
