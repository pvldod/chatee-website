import { type NextRequest } from "next/server"
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    console.log("Received messages:", messages)

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for Chatee.io, a service that provides AI chatbot integration for websites. You help users with questions about website integration, chatbot customization, and general inquiries. Be concise, helpful, and friendly in your responses."
        },
        ...messages
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
        const encoder = new TextEncoder()
        try {
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content
            if (content) {
              // Format the message as expected by the client
              const message = {
                content: content,
                role: 'assistant'
              }
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(message)}\n\n`))
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          console.error("Error in stream:", error)
          controller.error(error)
        }
      }
    })

    return new Response(stream, {
      headers,
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(
      JSON.stringify({ error: "There was an error processing your request" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
