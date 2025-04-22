import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai/server';

// Create an OpenAI API client (that's edge-friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for Chatee.io, a service that provides AI chatbot integration for websites. You help users with questions about website integration, chatbot customization, and general inquiries. Be concise, helpful, and friendly in your responses."
        },
        ...messages
      ],
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: 'There was an error processing your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
