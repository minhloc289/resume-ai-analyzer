import { Button } from "@/components/ui/button"
import { Upload, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Resume?
          </h2>
          <p className="text-xl text-foreground font-semibold text-pretty max-w-2xl mx-auto">
            Join thousands who improved their resumes with AI. Start your free analysis now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/analyze">
              <Button size="lg" className="relative overflow-hidden group h-14 px-8 text-lg ai-glow min-h-[44px]">
                <Upload className="mr-2 h-5 w-5" />
                <span className="relative z-10">Analyze My Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-primary/20 hover:border-primary/40 bg-transparent min-h-[44px]"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-foreground font-semibold">Resumes Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-foreground font-semibold">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                30s
              </div>
              <div className="text-sm text-foreground font-semibold">Average Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
