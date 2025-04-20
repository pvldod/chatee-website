import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Adding Chatee.io to our website increased our conversion rate by 35%. The AI chatbot answers customer questions instantly, which has significantly improved our user experience.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
    },
    {
      quote:
        "The integration was incredibly simple, and the customization options allowed us to make the chatbot feel like a natural extension of our brand. Highly recommended!",
      author: "Michael Chen",
      title: "CTO, GrowthStartup",
    },
    {
      quote:
        "Our customer support team is now able to focus on complex issues while the chatbot handles routine questions. It's been a game-changer for our efficiency.",
      author: "Emma Rodriguez",
      title: "Customer Success Manager, RetailPlus",
    },
  ]

  return (
    <section className="w-full py-4 md:py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">Testimonials</div>
            <div className="title-container">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                What Our Customers Say
              </h2>
            </div>
            <p className="text-muted-foreground md:text-xl">
              Don't just take our word for it - hear from some of our satisfied customers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <Card className="gradient-border bg-secondary/10 rounded-xl enhanced-card h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-purple-400/60 mb-4 flex-shrink-0" />
                  <p className="mb-4 text-muted-foreground flex-1">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
