import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FadeIn from "@/components/animations/fade-in"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small websites and blogs",
      features: [
        "Up to 1,000 messages per month",
        "Basic customization",
        "Email support",
        "Analytics dashboard",
        "1 website integration",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$79",
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
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$199",
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
      buttonText: "Contact Sales",
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
              <Card
                className={`rounded-xl gradient-border bg-secondary/10 enhanced-card h-full flex flex-col ${
                  plan.popular ? "border-purple-400/50 ring-1 ring-purple-400/50 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="py-1 px-4 gradient-bg text-white text-xs font-medium text-center rounded-t-xl">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "gradient-bg hover:opacity-90"
                        : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
