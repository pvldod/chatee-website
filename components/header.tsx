"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/chatbot-logo.png" alt="Chatee.io Logo" width={64} height={64} className="h-16 w-auto" />
            <span className="text-xl font-bold gradient-text">Chatee.io</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b border-border/40 p-4 flex flex-col gap-4 md:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2">
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="w-full border-border/60 hover:bg-secondary">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="w-full gradient-bg hover:opacity-90">
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="hidden md:flex gap-6 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm" className="border-border/60 hover:bg-secondary">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="gradient-bg hover:opacity-90">
                  Sign up
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
