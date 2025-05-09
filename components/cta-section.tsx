import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn>
            <div className="space-y-2 max-w-3xl">
              <div className="title-container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                  Ready to Transform Your Customer Experience?
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of businesses already using Chatee.io to engage visitors, answer questions, and boost
                conversions.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center mt-6">
              <Button size="lg" className="gradient-bg hover:opacity-90 enhanced-card">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
