import { Bot, Code, Paintbrush, Zap, MessageSquare, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Conversations",
      description: "Advanced natural language processing for human-like interactions with your customers.",
      icon: Bot,
    },
    {
      title: "Easy Integration",
      description: "Simple copy-paste code snippet to add the chatbot to your website in minutes.",
      icon: Code,
    },
    {
      title: "Customizable Design",
      description: "Match your brand's look and feel with our customizable chat interface.",
      icon: Paintbrush,
    },
    {
      title: "Real-time Responses",
      description: "Instant responses to keep your customers engaged and satisfied.",
      icon: Zap,
    },
    {
      title: "Multi-language Support",
      description: "Communicate with customers in their preferred language.",
      icon: MessageSquare,
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security to protect your conversations and data.",
      icon: Lock,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Powerful Features
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to provide exceptional customer service with our AI-powered chatbot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-purple-100">
            <CardContent className="p-6">
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 