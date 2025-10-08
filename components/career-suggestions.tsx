"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, TrendingUp, ArrowRight } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const careers = [
  {
    title: "Senior Software Engineer",
    match: 92,
    description: "Your technical skills and experience align perfectly with senior engineering roles.",
    skills: ["React", "TypeScript", "Node.js", "System Design"],
    details: {
      salary: "$120k - $180k",
      growth: "High demand, 15% growth projected",
      requirements: "5+ years experience, strong system design skills",
    },
  },
  {
    title: "Full Stack Developer",
    match: 88,
    description: "Strong match for full-stack positions with your diverse technology stack.",
    skills: ["Frontend", "Backend", "Database", "DevOps"],
    details: {
      salary: "$100k - $150k",
      growth: "Steady demand, 12% growth projected",
      requirements: "3+ years experience, full-stack proficiency",
    },
  },
  {
    title: "Technical Lead",
    match: 85,
    description: "Your experience shows leadership potential and technical depth.",
    skills: ["Team Leadership", "Architecture", "Mentoring", "Project Management"],
    details: {
      salary: "$130k - $200k",
      growth: "High demand, leadership roles expanding",
      requirements: "7+ years experience, proven leadership",
    },
  },
]

export function CareerSuggestions() {
  const [selectedCareer, setSelectedCareer] = useState<(typeof careers)[0] | null>(null)

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
            <div className="absolute inset-0 bg-primary/20 blur-xl" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Career Path Recommendations</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {careers.map((career, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-border/50 bg-muted/30 hover:border-primary/30 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {career.title}
                  </h4>
                  <div className="flex items-center gap-1 text-sm" aria-label={`${career.match}% match`}>
                    <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-bold text-primary">{career.match}%</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{career.description}</p>

                <div className="flex flex-wrap gap-2" role="list" aria-label="Required skills">
                  {career.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary/10"
                      onClick={() => setSelectedCareer(career)}
                      aria-label={`Learn more about ${career.title}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {career.title}
                        <span className="text-sm font-normal text-primary">({career.match}% match)</span>
                      </DialogTitle>
                      <DialogDescription>{career.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Salary Range</h4>
                        <p className="text-sm text-muted-foreground">{career.details.salary}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Market Growth</h4>
                        <p className="text-sm text-muted-foreground">{career.details.growth}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Requirements</h4>
                        <p className="text-sm text-muted-foreground">{career.details.requirements}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
