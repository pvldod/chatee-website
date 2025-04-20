import type { Metadata } from "next"
import ChatInterface from "@/components/chat/chat-interface"

export const metadata: Metadata = {
  title: "Chatee.io - Interactive Demo",
  description: "Try our AI chatbot in action with this interactive demo",
}

export default function DemoPage() {
  return (
    <div className="container max-w-5xl mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 gradient-text-light">Interactive Chatbot Demo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the Chatee.io chatbot in action. This demo uses the same AI technology that powers our customer
          chatbots. Try asking questions about Chatee.io, chatbot integration, or general inquiries.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <ChatInterface />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-4">Ready to add this to your website?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Get started with Chatee.io today and add an AI-powered chatbot to your website in minutes.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/#pricing"
            className="gradient-bg text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            View Pricing
          </a>
          <a
            href="/"
            className="bg-secondary/50 text-foreground px-4 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
