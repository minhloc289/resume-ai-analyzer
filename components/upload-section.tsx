"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import { Upload, FileText, X, Loader2, Sparkles, Zap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export function UploadSection() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    if (
      droppedFile &&
      (droppedFile.type === "application/pdf" ||
        droppedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        droppedFile.type === "text/plain")
    ) {
      setFile(droppedFile)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }, [])

  const handleAnalyze = async () => {
    if (!file) return

    setIsAnalyzing(true)
    setProgress(0)

    // Simulate AI processing with progress updates
    const steps = [
      { progress: 20, delay: 500 },
      { progress: 45, delay: 800 },
      { progress: 70, delay: 700 },
      { progress: 90, delay: 600 },
      { progress: 100, delay: 400 },
    ]

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay))
      setProgress(step.progress)
    }

    router.push("/results")
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Upload Your{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-pretty leading-relaxed">
              Get AI-powered analysis and personalized recommendations in seconds
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            {!file ? (
              <motion.div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                  isDragging ? "border-primary bg-primary/5 scale-105" : "border-border hover:border-primary/50"
                }`}
                whileHover={{ scale: isDragging ? 1.05 : 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                role="button"
                tabIndex={0}
                aria-label="Upload resume file by dragging and dropping or clicking to browse"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    document.getElementById("file-upload")?.click()
                  }
                }}
              >
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileSelect}
                  aria-label="Choose resume file"
                />

                <div className="space-y-6">
                  <div className="relative inline-flex">
                    <Upload className="h-16 w-16 text-primary" aria-hidden="true" />
                    <div className="absolute inset-0 bg-primary/20 blur-2xl animate-glow-pulse" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Drag and drop your resume here</h3>
                    <p className="text-muted-foreground font-medium">or click to browse files</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                    <Button
                      size="lg"
                      onClick={() => document.getElementById("file-upload")?.click()}
                      className="ai-glow"
                      aria-label="Select file to upload"
                    >
                      <Upload className="mr-2 h-5 w-5" aria-hidden="true" />
                      Select File
                    </Button>
                  </motion.div>

                  <p className="text-sm text-muted-foreground font-medium">
                    Supported formats: PDF, DOCX, TXT (Max 10MB)
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* File Preview */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <FileText className="h-10 w-10 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setFile(null)}
                    disabled={isAnalyzing}
                    aria-label="Remove file"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* AI Processing Animation */}
                {isAnalyzing && (
                  <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
                    <div className="flex items-center justify-center gap-3">
                      <Brain className="h-6 w-6 text-primary animate-pulse" aria-hidden="true" />
                      <Sparkles className="h-5 w-5 text-secondary animate-pulse" aria-hidden="true" />
                      <Zap className="h-6 w-6 text-accent animate-pulse" aria-hidden="true" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-medium">
                          {progress < 30 && "Parsing document structure..."}
                          {progress >= 30 && progress < 60 && "Analyzing content with AI..."}
                          {progress >= 60 && progress < 90 && "Evaluating keywords and skills..."}
                          {progress >= 90 && "Generating recommendations..."}
                        </span>
                        <span className="text-primary font-semibold">{progress}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          whileHover={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.6)" }}
                          role="progressbar"
                          aria-valuenow={progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label="Analysis progress"
                        />
                      </div>
                    </div>

                    <p className="text-xs text-center text-muted-foreground font-medium">
                      Our AI is analyzing your resume using advanced neural networks
                    </p>
                  </div>
                )}

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <Button
                    size="lg"
                    className="w-full ai-glow h-14"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    aria-label={isAnalyzing ? "Analyzing resume" : "Start resume analysis"}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                        Analyzing with AI...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-5 w-5" aria-hidden="true" />
                        Analyze Resume
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            )}
          </Card>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-primary mb-1">30s</div>
              <div className="text-sm text-muted-foreground font-medium">Analysis Time</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Secure & Private</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-accent mb-1">Free</div>
              <div className="text-sm text-muted-foreground font-medium">No Sign-up</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
