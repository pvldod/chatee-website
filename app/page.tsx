import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Zap, Code } from "lucide-react"
import HeroDemo from "@/components/hero-demo"
import FeatureSection from "@/components/feature-section"
import PricingSection from "@/components/pricing-section"
import TestimonialSection from "@/components/testimonial-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import IntegrationDemo from "@/components/integration-demo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-6 md:py-10 lg:py-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <div className="title-container">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-light">
              AI Chat That Speaks <span className="block mt-2 gradient-text-light">Your Business Language</span>
            </h1>
          </div>

          <p className="max-w-[700px] text-muted-foreground mx-auto mb-8 text-lg">
            Deploy a conversational AI assistant that understands your business. Easily trained on your documentation
            and website content. Powerful, intuitive, and ready in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gradient-bg hover:opacity-90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 hover:bg-secondary">
              View Demo
            </Button>
          </div>

          {/* Chatbot Demo - Direct inclusion without wrappers */}
          <div className="mt-8 mb-12">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works */}
      <section className="w-full py-6 md:py-8" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">
                Simple Integration
              </div>
              <div className="title-container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                  How It Works
                </h2>
              </div>
              <p className="text-muted-foreground md:text-xl">
                Add our AI chatbot to your website with just a few lines of code
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-xl gradient-border bg-secondary/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-bg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">1. Add the Script</h3>
              <p className="text-muted-foreground">
                Simply add our script tag to your website's HTML and configure your preferences
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl gradient-border bg-secondary/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-bg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">2. Customize Your Bot</h3>
              <p className="text-muted-foreground">
                Personalize the appearance and behavior of your chatbot through our dashboard
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-xl gradient-border bg-secondary/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-bg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">3. Go Live</h3>
              <p className="text-muted-foreground">
                Your AI chatbot is now live and ready to engage with your visitors 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Demo */}
      <section className="w-full py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">Easy Setup</div>
              <div className="title-container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                  Simple Integration
                </h2>
              </div>
              <p className="text-muted-foreground md:text-xl">
                Just add a few lines of code to your website and you're ready to go
              </p>
            </div>
          </div>
          <IntegrationDemo />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
