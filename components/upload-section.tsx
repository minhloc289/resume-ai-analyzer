"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react"; // Thêm useEffect
import {
  Upload,
  FileText,
  X,
  Loader2,
  Sparkles,
  Zap,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIconIndex, setActiveIconIndex] = useState(0); // State mới cho icon animation
  const router = useRouter();

  // Effect mới để chạy animation chớp tắt cho icon
  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setActiveIconIndex((prevIndex) => (prevIndex + 1) % 3); // 3 icons
      }, 400); // Tốc độ chớp tắt
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type === "application/pdf" ||
        droppedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        droppedFile.type === "text/plain")
    ) {
      setFile(droppedFile);
    }
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    },
    []
  );

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setProgress(0);

    const steps = [
      { progress: 20, delay: 500 },
      { progress: 45, delay: 800 },
      { progress: 70, delay: 700 },
      { progress: 90, delay: 600 },
      { progress: 100, delay: 400 },
    ];

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay));
      setProgress(step.progress);
    }

    router.push("/results");
  };

  // Mảng icon để dễ dàng map qua
  const analysisIcons = [
    { Icon: Brain, key: "brain" },
    { Icon: Sparkles, key: "sparkles" },
    { Icon: Zap, key: "zap" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Upload Your <span className="text-white">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-pretty leading-relaxed">
              Get AI-powered analysis and personalized recommendations in
              seconds
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            {!file ? (
              <motion.div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                  isDragging
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border hover:border-primary/50"
                }`}
                whileHover={{ scale: isDragging ? 1.05 : 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                role="button"
                tabIndex={0}
                aria-label="Upload resume file by dragging and dropping or clicking to browse"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    document.getElementById("file-upload")?.click();
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
                    <Upload
                      className="h-16 w-16 text-primary"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-primary/20 blur-2xl animate-glow-pulse"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      Drag and drop your resume here
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      or click to browse files
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      size="lg"
                      onClick={() =>
                        document.getElementById("file-upload")?.click()
                      }
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
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <FileText
                    className="h-10 w-10 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {file.name}
                    </p>
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

                {/* === KHỐI LOADING ANALYSIS ĐÃ ĐƯỢC CẬP NHẬT === */}
                {isAnalyzing && (
                  <div className="space-y-6 p-8 rounded-2xl bg-neutral-950/80 border border-white/10">
                    <div className="flex items-center justify-center gap-4">
                      {analysisIcons.map(({ Icon, key }, index) => (
                        <motion.div
                          key={key}
                          animate={{
                            opacity: activeIconIndex === index ? 1 : 0.3,
                            scale: activeIconIndex === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-medium text-white/80">
                        <span>
                          {progress < 30 && "Parsing document..."}
                          {progress >= 30 &&
                            progress < 60 &&
                            "Analyzing content with AI..."}
                          {progress >= 60 &&
                            progress < 90 &&
                            "Evaluating keywords..."}
                          {progress >= 90 && "Generating recommendations..."}
                        </span>
                        <span className="font-semibold text-white">
                          {progress}%
                        </span>
                      </div>

                      <div className="h-2.5 bg-neutral-800/80 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-white via-neutral-200 to-neutral-500"
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          role="progressbar"
                          aria-valuenow={progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-center text-white/50">
                      Our AI is analyzing your resume using advanced neural
                      networks
                    </p>
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button
                    size="lg"
                    className="w-full ai-glow h-14"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    aria-label={
                      isAnalyzing ? "Analyzing resume" : "Start resume analysis"
                    }
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2
                          className="mr-2 h-5 w-5 animate-spin"
                          aria-hidden="true"
                        />
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
        </div>
      </div>
    </section>
  );
}
