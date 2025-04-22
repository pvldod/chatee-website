"use client"

import { loadStripe } from "@stripe/stripe-js"
import PricingCard from "@/components/pricing-card"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function PricingPage() {
  const handleSubscribe = async (planId: string) => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: planId }),
      })

      const { sessionId, error } = await response.json()
      
      if (error) {
        console.error("Error:", error)
        return
      }

      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error("Error:", error)
        }
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const plans = [
    {
      name: "Starter",
      price: "$12.99",
      description: "Perfect for small businesses just getting started",
      features: [
        "1,000 messages per month",
        "Basic customization",
        "Email support",
        "1 website integration",
        "Chat history (7 days)",
        "Basic analytics",
      ],
      planId: "starter",
    },
    {
      name: "Professional",
      price: "$29.99",
      description: "Ideal for growing businesses with more demands",
      features: [
        "5,000 messages per month",
        "Advanced customization",
        "Priority email & chat support",
        "5 website integrations",
        "Chat history (30 days)",
        "Advanced analytics",
        "Custom AI training",
        "Multilingual support",
      ],
      planId: "professional",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "$99.99",
      description: "For large organizations with specific requirements",
      features: [
        "Unlimited messages",
        "Full customization",
        "24/7 dedicated support",
        "Unlimited integrations",
        "Unlimited chat history",
        "Custom analytics & reporting",
        "Custom AI model training",
        "SLA guarantees",
        "Custom features",
      ],
      planId: "enterprise",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>
    </div>
  )
} 