"use client"

import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export async function handleSubscribe(planId: string) {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: planId }),
    })

    const { sessionId, error } = await response.json()
    
    if (error) {
      console.error("Error:", error)
      return
    }

    const stripe = await stripePromise
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId })
      if (error) {
        console.error("Error:", error)
      }
    }
  } catch (error) {
    console.error("Error:", error)
  }
} 