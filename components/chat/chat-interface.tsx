"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    try {
      // Add user message
      const userMessage: Message = { role: "user", content: input }
      setMessages(prev => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText || 'Failed to send message')
      }

      if (!response.body) {
        throw new Error('No response body')
      }

      // Handle the stream
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")
        
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(5).trim()
            if (data === "[DONE]") continue
            
            try {
              const parsed = JSON.parse(data)
              if (parsed.content) {
                assistantMessage += parsed.content
                setMessages(prev => {
                  const newMessages = [...prev]
                  const lastMessage = newMessages[newMessages.length - 1]
                  if (lastMessage?.role === "assistant") {
                    lastMessage.content = assistantMessage
                    return [...newMessages]
                  } else {
                    return [...newMessages, { role: "assistant", content: assistantMessage }]
                  }
                })
              }
            } catch (e) {
              console.error("Error parsing chunk:", e, "Raw data:", data)
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "I apologize, but I encountered an error. Please try again." }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto gradient-border bg-secondary/10 rounded-xl overflow-hidden">
      <div className="gradient-bg text-white p-3 rounded-t-xl flex items-center gap-2">
        <MessageSquare size={18} />
        <span className="font-medium">Chatee.io Assistant</span>
      </div>
      <CardContent className="p-0">
        <div className="h-[300px] overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex justify-start">
              <div className="bg-secondary text-foreground rounded-lg rounded-tl-none max-w-[80%] p-3">
                Hi there! How can I help you with Chatee.io today?
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
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

          {isLoading && (
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
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-border/40 p-3 flex items-center gap-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none outline-none text-sm"
          />
          <Button
            type="submit"
            size="sm"
            className="gradient-bg hover:opacity-90 h-8 w-8 p-0 rounded-full"
            disabled={isLoading || !input.trim()}
          >
            <Send size={14} />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
