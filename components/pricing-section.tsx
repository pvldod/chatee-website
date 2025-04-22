"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FadeIn from "@/components/animations/fade-in"
import PricingCard from "@/components/pricing-card"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$12.99",
      description: "Perfect for small websites and blogs",
      features: [
        "Up to 1,000 messages per month",
        "Basic customization",
        "Email support",
        "Analytics dashboard",
        "1 website integration",
      ],
      popular: false,
      planId: "starter",
    },
    {
      name: "Professional",
      price: "$29.99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 5,000 messages per month",
        "Advanced customization",
        "Priority email support",
        "Advanced analytics",
        "Up to 3 website integrations",
        "Knowledge base integration",
      ],
      popular: true,
      planId: "professional",
    },
    {
      name: "Enterprise",
      price: "$99.99",
      description: "For large businesses with high volume",
      features: [
        "Unlimited messages",
        "Full customization",
        "Dedicated support",
        "Custom analytics",
        "Unlimited website integrations",
        "Advanced knowledge base",
        "Custom AI training",
      ],
      popular: false,
      planId: "enterprise",
    },
  ]

  return (
    <section className="w-full py-4 md:py-6" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">Pricing</div>
            <div className="title-container">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                Simple, Transparent Pricing
              </h2>
            </div>
            <p className="text-muted-foreground md:text-xl">Choose the plan that's right for your business</p>
          </div>
        </div>
        <div className="grid gap-6 pt-4 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <PricingCard
                {...plan}
                isPopular={plan.popular}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
