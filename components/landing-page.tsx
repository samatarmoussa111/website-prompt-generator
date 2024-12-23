"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  Clock,
  Palette,
  Layout,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-40 sm:pb-32 lg:px-8"
        id="hero"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]" />
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="mr-1 h-3 w-3" />
              Launching Soon
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            variants={fadeInUp}
          >
            Generate Perfect Website Prompts
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            variants={fadeInUp}
          >
            The ultimate tool for web professionals to create detailed,
            structured prompts for website projects. Save time and improve
            communication with clients and AI tools.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={fadeInUp}
          >
            <Link href="/generate">
              <Button size="lg">
                Start Generating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32" id="features">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeInUp}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Powerful Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create perfect website briefs
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"
            variants={stagger}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {[
                {
                  title: "Structured Approach",
                  description:
                    "Step-by-step prompt generation ensuring no important details are missed.",
                  icon: Layout,
                },
                {
                  title: "Time Saving",
                  description:
                    "Reduce brief creation time from hours to minutes with our intuitive interface.",
                  icon: Clock,
                },
                {
                  title: "AI-Ready Output",
                  description:
                    "Generate prompts optimized for AI tools and design platforms.",
                  icon: Zap,
                },
                {
                  title: "Color Schemes",
                  description:
                    "Built-in color picker and objective setting for perfect brand alignment.",
                  icon: Palette,
                },
                {
                  title: "Section Templates",
                  description:
                    "Pre-built section templates for common website components.",
                  icon: CheckCircle,
                },
                {
                  title: "Custom Fields",
                  description:
                    "Add custom fields and sections to match your specific needs.",
                  icon: Sparkles,
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-0 shadow-none">
                  <CardHeader>
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32" id="pricing">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3"
            variants={stagger}
          >
            {/* Hobby Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader>
                    <CardTitle>Hobby</CardTitle>
                    <CardDescription>
                      Perfect for getting started
                    </CardDescription>
                    <p className="mt-6">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        $0
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /forever
                      </span>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-6 space-y-3">
                      {[
                        "5 prompts per month",
                        "Basic templates",
                        "Export to text",
                        "Community support",
                      ].map((feature) => (
                        <li key={feature} className="flex">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                          <span className="ml-3 text-sm leading-6 text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Freelancer Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader>
                    <CardTitle>Freelancer</CardTitle>
                    <CardDescription>
                      Perfect for independent professionals
                    </CardDescription>
                    <p className="mt-6">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        $19
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /month
                      </span>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-6 space-y-3">
                      {[
                        "50 prompts per month",
                        "Professional templates",
                        "Export to PDF",
                        "Email support",
                        "Save prompts",
                      ].map((feature) => (
                        <li key={feature} className="flex">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                          <span className="ml-3 text-sm leading-6 text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Agency Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="flex flex-col justify-between h-full ring-2 ring-indigo-600">
                <div>
                  <CardHeader>
                    <CardTitle>Agency</CardTitle>
                    <CardDescription>For growing design teams</CardDescription>
                    <p className="mt-6">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        $49
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /month
                      </span>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-6 space-y-3">
                      {[
                        "Unlimited prompts",
                        "Advanced templates",
                        "Custom branding",
                        "Team collaboration",
                        "Priority support",
                        "API access",
                        "Analytics dashboard",
                      ].map((feature) => (
                        <li key={feature} className="flex">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                          <span className="ml-3 text-sm leading-6 text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardContent>
                  <Button className="w-full">Start Free Trial</Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gray-50" id="testimonials">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by web professionals
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Freelance Web Designer",
                text: "This tool has revolutionized how I create website briefs. The structured approach saves me hours of work and helps me deliver better results to my clients.",
              },
              {
                name: "Michael Chen",
                role: "Agency Owner",
                text: "The team collaboration features and custom templates have made our workflow so much more efficient. It's now an essential part of our project kickoff process.",
              },
              {
                name: "Emma Williams",
                role: "UI/UX Designer",
                text: "The AI-ready output is a game-changer. I can seamlessly use the prompts with various AI tools to speed up my design process while maintaining quality.",
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.name}
                className="flex flex-col justify-between"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">{testimonial.text}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32" id="faq">
        <motion.div
          className="mx-auto max-w-4xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our prompt generator
            </p>
          </div>
          <div className="mt-16">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "How does the prompt generator work?",
                  answer:
                    "Our prompt generator guides you through a structured process to create detailed website briefs. You'll input information about the site type, style, sections, and specific requirements, and we'll generate a comprehensive prompt optimized for your needs.",
                },
                {
                  question: "Can I customize the generated prompts?",
                  answer:
                    "Yes! All generated prompts are fully editable. You can modify any part of the prompt, add custom sections, or adjust the language to match your preferred style.",
                },
                {
                  question:
                    "Is there a limit to how many prompts I can generate?",
                  answer:
                    "The number of prompts depends on your plan. Freelancer plans include 50 prompts per month, while Agency plans offer unlimited prompt generation.",
                },
                {
                  question: "Can I save my prompts for later use?",
                  answer:
                    "Yes, all your generated prompts are automatically saved to your account. You can access, edit, and reuse them at any time.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your website creation process?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of web professionals who are already saving time
              and delivering better results with our prompt generator.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="default">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="link" className="text-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
