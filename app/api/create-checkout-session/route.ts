import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
})

type PlanType = "starter" | "professional" | "enterprise"

const PLANS: Record<PlanType, { price: string; name: string }> = {
  starter: {
    price: "price_1RG44qKC1DcOLUaBwvx07JV1",
    name: "Starter",
  },
  professional: {
    price: "price_1RG45ZKC1DcOLUaBfsiYfHId",
    name: "Professional",
  },
  enterprise: {
    price: "price_1RG46GKC1DcOLUaBBQcc9LWb",
    name: "Enterprise",
  },
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { plan } = body as { plan: PlanType }

    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: PLANS[plan].price,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    )
  }
} 