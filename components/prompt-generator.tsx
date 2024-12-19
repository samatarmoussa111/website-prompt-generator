"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { usePromptForm } from "@/hooks/use-prompt-form";
import { GeneralInfoStep } from "@/components/general-info-step";
import { PagesStep } from "@/components/pages-step";
import { SectionsStep } from "@/components/sections-step";
import { Background } from "@/components/background";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function PromptGenerator() {
  const { toast } = useToast();
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const {
    currentStep,
    form,
    addPage,
    addSection,
    updateSectionDescription,
    nextStep,
    generatePrompt,
  } = usePromptForm();

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const onSubmit = () => {
    const formData = form.getValues();
    const prompt = generatePrompt(formData);
    setGeneratedPrompt(prompt);
    triggerConfetti();
    toast({
      title: "Prompt Generated",
      description: "Your prompt has been generated and is ready for editing.",
    });
  };

  return (
    <>
      <Background />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="container max-w-2xl">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Website Prompt Generator
          </motion.h1>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GeneralInfoStep form={form} onNext={nextStep} />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PagesStep
                    form={form}
                    onAddPage={addPage}
                    onNext={nextStep}
                  />
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SectionsStep
                    form={form}
                    onAddSection={addSection}
                    onUpdateDescription={updateSectionDescription}
                    onSubmit={onSubmit}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {generatedPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="backdrop-blur-sm bg-white/50">
                  <CardHeader>
                    <CardTitle>Generated Prompt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={generatedPrompt}
                      onChange={(e) => setGeneratedPrompt(e.target.value)}
                      className="min-h-[200px] font-mono bg-white/50"
                      placeholder="Your generated prompt will appear here..."
                    />
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(generatedPrompt);
                        toast({
                          title: "Copied to clipboard",
                          description:
                            "The prompt has been copied to your clipboard.",
                        });
                      }}
                      className="mt-4"
                    >
                      Copy to Clipboard
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <motion.div
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    i + 1 === currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
