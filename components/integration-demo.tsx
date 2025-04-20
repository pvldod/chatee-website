"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function IntegrationDemo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script>
  window.chateeConfig = {
    apiKey: "YOUR_API_KEY",
    theme: "dark",
    position: "bottom-right"
  };
</script>
<script src="https://cdn.chatee.io/widget.js" async></script>`)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 items-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">Just a few lines of code</h3>
        <p className="text-muted-foreground mb-6">
          Add our chatbot to your website with this simple script. Customize it to match your brand and preferences.
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-bg text-white mt-0.5">1</div>
            <div>
              <h4 className="font-medium">Copy the code</h4>
              <p className="text-sm text-muted-foreground">Copy the integration code from your dashboard</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-bg text-white mt-0.5">2</div>
            <div>
              <h4 className="font-medium">Paste in your website</h4>
              <p className="text-sm text-muted-foreground">
                Add the code to your website's HTML before the closing body tag
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-bg text-white mt-0.5">3</div>
            <div>
              <h4 className="font-medium">Customize in dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Configure your chatbot's appearance and behavior in your dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card className="gradient-border bg-secondary/10 rounded-xl overflow-hidden">
        <Tabs defaultValue="html" className="w-full">
          <TabsList className="w-full rounded-none border-b border-border/40 bg-secondary/20">
            <TabsTrigger value="html" className="flex-1 data-[state=active]:bg-secondary/40">
              HTML
            </TabsTrigger>
            <TabsTrigger value="react" className="flex-1 data-[state=active]:bg-secondary/40">
              React
            </TabsTrigger>
            <TabsTrigger value="vue" className="flex-1 data-[state=active]:bg-secondary/40">
              Vue
            </TabsTrigger>
          </TabsList>
          <TabsContent value="html" className="m-0">
            <CardContent className="p-0">
              <div className="relative">
                <pre className="language-html p-4 overflow-x-auto text-sm bg-secondary/20 rounded-b-xl">
                  <code>{`<script>
  window.chateeConfig = {
    apiKey: "YOUR_API_KEY",
    theme: "dark",
    position: "bottom-right"
  };
</script>
<script src="https://cdn.chatee.io/widget.js" async></script>`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="react" className="m-0">
            <CardContent className="p-0">
              <div className="relative">
                <pre className="language-jsx p-4 overflow-x-auto text-sm bg-secondary/20 rounded-b-xl">
                  <code>{`import { useEffect } from 'react';

export default function ChateeWidget() {
  useEffect(() => {
    // Load Chatee widget
    const script = document.createElement('script');
    script.src = 'https://cdn.chatee.io/widget.js';
    script.async = true;
    
    // Configure widget
    window.chateeConfig = {
      apiKey: "YOUR_API_KEY",
      theme: "dark",
      position: "bottom-right"
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return null;
}`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="vue" className="m-0">
            <CardContent className="p-0">
              <div className="relative">
                <pre className="language-vue p-4 overflow-x-auto text-sm bg-secondary/20 rounded-b-xl">
                  <code>{`<template>
  <!-- Chatee widget will be injected into the DOM -->
</template>

<script>
export default {
  name: 'ChateeWidget',
  mounted() {
    // Load Chatee widget
    const script = document.createElement('script');
    script.src = 'https://cdn.chatee.io/widget.js';
    script.async = true;
    
    // Configure widget
    window.chateeConfig = {
      apiKey: "YOUR_API_KEY",
      theme: "dark",
      position: "bottom-right"
    };
    
    document.body.appendChild(script);
  },
  beforeUnmount() {
    // Clean up
    const script = document.querySelector('script[src="https://cdn.chatee.io/widget.js"]');
    if (script) {
      document.body.removeChild(script);
    }
  }
}
</script>`}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
