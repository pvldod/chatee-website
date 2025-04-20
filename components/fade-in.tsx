"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export { FadeIn }
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 30px, 0)"
      case "down":
        return "translate3d(0, -30px, 0)"
      case "left":
        return "translate3d(30px, 0, 0)"
      case "right":
        return "translate3d(-30px, 0, 0)"
      default:
        return "translate3d(0, 30px, 0)"
    }
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all ${className}`}
      style={{
        transform: getTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
