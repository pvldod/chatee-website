import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started",
      features: [
        "1,000 messages per month",
        "Basic customization",
        "Email support",
        "1 website integration",
        "Chat history (7 days)",
        "Basic analytics",
      ],
    },
    {
      name: "Professional",
      price: "$99",
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
    },
    {
      name: "Enterprise",
      price: "Custom",
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
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className="border-purple-100 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 