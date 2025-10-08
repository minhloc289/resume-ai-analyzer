import { Card } from "@/components/ui/card"
import { FileText, Layout, Award, Lightbulb } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const sections = [
  {
    icon: FileText,
    title: "Content Analysis",
    items: [
      {
        label: "Professional Summary",
        score: 90,
        feedback: "Strong opening that clearly communicates your value proposition.",
      },
      {
        label: "Work Experience",
        score: 85,
        feedback: "Good use of action verbs and quantifiable achievements. Consider adding more metrics.",
      },
      {
        label: "Skills Section",
        score: 88,
        feedback: "Comprehensive technical skills. Add soft skills for better balance.",
      },
      {
        label: "Education",
        score: 80,
        feedback: "Clear and concise. Consider adding relevant coursework or academic achievements.",
      },
    ],
  },
  {
    icon: Layout,
    title: "Format & Structure",
    items: [
      {
        label: "Visual Hierarchy",
        score: 85,
        feedback: "Good use of headings and spacing. Ensure consistent formatting throughout.",
      },
      {
        label: "ATS Compatibility",
        score: 92,
        feedback: "Excellent! Your resume is well-optimized for applicant tracking systems.",
      },
      {
        label: "Length & Density",
        score: 88,
        feedback: "Appropriate length. Good balance of white space and content.",
      },
      { label: "Font & Styling", score: 90, feedback: "Professional and readable. Consistent use of formatting." },
    ],
  },
  {
    icon: Award,
    title: "Keywords & Optimization",
    items: [
      {
        label: "Industry Keywords",
        score: 82,
        feedback: 'Good coverage. Add: "Agile", "CI/CD", "Cloud Architecture".',
      },
      { label: "Action Verbs", score: 88, feedback: "Strong use of impactful verbs. Continue this pattern." },
      {
        label: "Quantifiable Results",
        score: 85,
        feedback: "Good metrics. Add more percentages and numbers where possible.",
      },
      { label: "Role-Specific Terms", score: 80, feedback: "Consider adding more terms from target job descriptions." },
    ],
  },
  {
    icon: Lightbulb,
    title: "Improvement Suggestions",
    items: [
      {
        label: "Add Projects Section",
        score: 0,
        feedback: "Showcase personal or open-source projects to demonstrate passion and skills.",
      },
      {
        label: "Include Certifications",
        score: 0,
        feedback: "Add relevant certifications to strengthen your technical credibility.",
      },
      {
        label: "Expand Soft Skills",
        score: 0,
        feedback: "Mention leadership, communication, and collaboration experiences.",
      },
      {
        label: "Tailor for Target Role",
        score: 0,
        feedback: "Customize your resume for each application using job description keywords.",
      },
    ],
  },
]

export function DetailedAnalysis() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Detailed Analysis</h3>

        <Accordion type="single" collapsible className="space-y-4">
          {sections.map((section, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-4 bg-muted/20"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        {item.score > 0 && <span className="text-sm font-bold text-primary">{item.score}/100</span>}
                      </div>
                      {item.score > 0 && (
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">{item.feedback}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  )
}
