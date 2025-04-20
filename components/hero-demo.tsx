"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Send } from "lucide-react"

export default function HeroDemo() {
  const [messages, setMessages] = useState([{ role: "bot", content: "Hi there! How can I help you today?" }])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])
    setInput("")
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thanks for your message! Our AI chatbot can be customized to provide responses specific to your business needs.",
        },
      ])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="mt-4 mb-8">
      <Card className="w-full max-w-md mx-auto gradient-border bg-secondary/10 rounded-xl overflow-hidden">
        <div className="gradient-bg text-white p-3 rounded-t-xl flex items-center gap-2">
          <MessageSquare size={18} />
          <span className="font-medium">Chatee.io Demo</span>
        </div>
        <CardContent className="p-0">
          <div className="h-[300px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "gradient-bg text-white rounded-tr-none"
                      : "bg-secondary text-foreground rounded-tl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground rounded-lg rounded-tl-none max-w-[80%] p-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-border/40 p-3 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
            <Button size="sm" className="gradient-bg hover:opacity-90 h-8 w-8 p-0 rounded-full" onClick={handleSend}>
              <Send size={14} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
