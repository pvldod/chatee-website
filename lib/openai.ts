import { openai } from "@ai-sdk/openai"
import { generateText, streamText, StreamingTextResponse } from "ai"
import OpenAI from 'openai'

// Configuration for OpenAI
const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Function to generate a response using OpenAI
export async function generateChatResponse(prompt: string, systemPrompt?: string) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4"),
      prompt,
      system:
        systemPrompt ||
        "You are a helpful AI assistant for Chatee.io, a chatbot integration service. Provide concise, accurate, and helpful responses.",
    })

    return { text, error: null }
  } catch (error) {
    console.error("Error generating chat response:", error)
    return {
      text: "I'm sorry, I encountered an error processing your request. Please try again later.",
      error,
    }
  }
}

// Function to stream a response using OpenAI
export async function streamChatResponse(prompt: string, systemPrompt?: string) {
  try {
    const response = await openAI.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt || "You are a helpful AI assistant for Chatee.io, a chatbot integration service. Provide concise, accurate, and helpful responses."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      stream: true,
    })

    // Create response headers
    const headers = new Headers()
    headers.set('Content-Type', 'text/event-stream')
    headers.set('Cache-Control', 'no-cache')
    headers.set('Connection', 'keep-alive')

    // Create stream
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content
          if (content) {
            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ content })}\n\n`))
          }
        }
        controller.close()
      }
    })

    return new Response(stream, {
      headers,
      status: 200,
    })
  } catch (error) {
    console.error("Error streaming chat response:", error)
    throw error
  }
}
