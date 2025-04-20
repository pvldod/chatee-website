import { Check, Zap, MessageSquare, BarChart, Code, Lock } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

export default function FeatureSection() {
  return (
    <section className="w-full py-4 md:py-6" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg gradient-bg px-3 py-1 text-sm text-white mb-2">
              Powerful Features
            </div>
            <div className="title-container">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text-light">
                Everything You Need
              </h2>
            </div>
            <p className="text-muted-foreground md:text-xl">
              Our AI chatbot comes with all the features you need to enhance your customer experience
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-4 lg:grid-cols-2 lg:gap-8">
          <div className="grid gap-6">
            <FadeIn direction="right" delay={0.1}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Natural Conversations</h3>
                  <p className="text-muted-foreground">
                    Our AI chatbot uses advanced language models to provide natural, human-like conversations.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">24/7 Availability</h3>
                  <p className="text-muted-foreground">
                    Provide instant support to your customers around the clock, even when you're not available.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.5}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Easy Integration</h3>
                  <p className="text-muted-foreground">
                    Add our chatbot to your website with just a few lines of code. No technical expertise required.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="grid gap-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">
                    Gain insights into customer interactions and improve your chatbot's performance over time.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure & Private</h3>
                  <p className="text-muted-foreground">
                    Your data is encrypted and secure. We prioritize privacy and compliance with regulations.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.6}>
              <div className="flex gap-4 items-start enhanced-card p-4 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Customizable</h3>
                  <p className="text-muted-foreground">
                    Tailor the chatbot's appearance, behavior, and knowledge base to match your brand and needs.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
