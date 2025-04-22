"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { handleSubscribe } from "@/components/stripe-provider"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  planId: string
  isPopular?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  planId,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card className={`rounded-xl gradient-border bg-secondary/10 h-full flex flex-col ${
      isPopular ? "border-purple-400/50 ring-1 ring-purple-400/50 relative" : "border-border/40"
    }`}>
      {isPopular && (
        <div className="py-1 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-medium text-center rounded-t-xl">
          MOST POPULAR
        </div>
      )}
      <CardHeader className="flex flex-col flex-1">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 justify-between">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${
            isPopular
              ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white"
              : "bg-secondary/50 text-foreground hover:bg-secondary"
          }`}
          onClick={() => handleSubscribe(planId)}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
} 