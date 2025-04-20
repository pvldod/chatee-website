"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, Undo2, MessageSquare, Send, Check, Smartphone, Monitor, Tablet } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function AppearanceTab() {
  const [primaryColor, setPrimaryColor] = useState("#7c3aed")
  const [secondaryColor, setSecondaryColor] = useState("#2563eb")
  const [textColor, setTextColor] = useState("#ffffff")
  const [backgroundColor, setBackgroundColor] = useState("#f5f3ff")
  const [position, setPosition] = useState("bottom-right")
  const [device, setDevice] = useState("desktop")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Appearance</h2>
        <p className="text-muted-foreground">Customize how your chatbot looks and feels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Colors & Branding</CardTitle>
              <CardDescription>Customize the colors to match your brand.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex mt-1 gap-2">
                      <div className="w-10 h-10 rounded border" style={{ backgroundColor: primaryColor }} />
                      <Input
                        id="primary-color"
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex mt-1 gap-2">
                      <div className="w-10 h-10 rounded border" style={{ backgroundColor: secondaryColor }} />
                      <Input
                        id="secondary-color"
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <div className="flex mt-1 gap-2">
                      <div className="w-10 h-10 rounded border" style={{ backgroundColor: textColor }} />
                      <Input
                        id="text-color"
                        type="text"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="background-color">Background Color</Label>
                    <div className="flex mt-1 gap-2">
                      <div className="w-10 h-10 rounded border" style={{ backgroundColor: backgroundColor }} />
                      <Input
                        id="background-color"
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="logo-upload">Logo (Optional)</Label>
                    <Input id="logo-upload" type="file" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="avatar-upload">Avatar (Optional)</Label>
                    <Input id="avatar-upload" type="file" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="font-family">Font Family</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger id="font-family" className="mt-1">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="border-radius">Border Radius</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="border-radius" className="mt-1">
                        <SelectValue placeholder="Select border radius" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None (0px)</SelectItem>
                        <SelectItem value="small">Small (4px)</SelectItem>
                        <SelectItem value="medium">Medium (8px)</SelectItem>
                        <SelectItem value="large">Large (12px)</SelectItem>
                        <SelectItem value="full">Full (9999px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Layout & Position</CardTitle>
              <CardDescription>Configure how and where the chatbot appears on your website.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <Label className="mb-2 block">Widget Position</Label>
                  <RadioGroup
                    defaultValue="bottom-right"
                    value={position}
                    onValueChange={setPosition}
                    className="grid grid-cols-2 md:grid-cols-4 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bottom-right" id="bottom-right" />
                      <Label htmlFor="bottom-right">Bottom Right</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bottom-left" id="bottom-left" />
                      <Label htmlFor="bottom-left">Bottom Left</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="top-right" id="top-right" />
                      <Label htmlFor="top-right">Top Right</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="top-left" id="top-left" />
                      <Label htmlFor="top-left">Top Left</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="widget-size">Widget Size</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="widget-size" className="mt-1">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="animation">Animation</Label>
                    <Select defaultValue="fade">
                      <SelectTrigger id="animation" className="mt-1">
                        <SelectValue placeholder="Select animation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="fade">Fade</SelectItem>
                        <SelectItem value="slide">Slide</SelectItem>
                        <SelectItem value="bounce">Bounce</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-open-switch">Auto-open on page load</Label>
                    <Switch id="auto-open-switch" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sound-switch">Enable sound effects</Label>
                    <Switch id="sound-switch" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="mobile-switch">Show on mobile devices</Label>
                    <Switch id="mobile-switch" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Undo2 className="mr-2 h-4 w-4" /> Reset to Default
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </div>
        </div>

        <div>
          <Card className="border-purple-100 sticky top-20">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>See how your chatbot will look.</CardDescription>
              <div className="flex gap-2 mt-2">
                <Button
                  variant={device === "desktop" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDevice("desktop")}
                  className={
                    device === "desktop"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500"
                      : "border-purple-200 text-purple-600"
                  }
                >
                  <Monitor className="h-4 w-4 mr-1" /> Desktop
                </Button>
                <Button
                  variant={device === "tablet" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDevice("tablet")}
                  className={
                    device === "tablet"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500"
                      : "border-purple-200 text-purple-600"
                  }
                >
                  <Tablet className="h-4 w-4 mr-1" /> Tablet
                </Button>
                <Button
                  variant={device === "mobile" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDevice("mobile")}
                  className={
                    device === "mobile"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500"
                      : "border-purple-200 text-purple-600"
                  }
                >
                  <Smartphone className="h-4 w-4 mr-1" /> Mobile
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`border rounded-lg overflow-hidden mx-auto ${
                  device === "desktop" ? "w-full" : device === "tablet" ? "w-[320px]" : "w-[280px]"
                }`}
                style={{ backgroundColor: "#f8fafc" }}
              >
                <div className="h-[400px] relative">
                  {/* Website mockup */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-12 bg-gray-100 border-b flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                      <div className="flex-1 h-6 bg-gray-200 rounded-full mx-4"></div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

                      <div className="h-24 bg-gray-200 rounded w-full mb-6"></div>

                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Chat widget */}
                  <div
                    className={`absolute ${position.includes("bottom") ? "bottom-4" : "top-4"} ${position.includes("right") ? "right-4" : "left-4"}`}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      style={{
                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                        color: textColor,
                      }}
                    >
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Chat window */}
                  <div
                    className="absolute bottom-20 right-4 w-72 rounded-lg shadow-xl overflow-hidden border"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    <div
                      className="p-3 flex items-center gap-2"
                      style={{
                        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                        color: textColor,
                      }}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span className="font-medium">Chatee Assistant</span>
                    </div>
                    <div className="h-64 p-3 overflow-y-auto space-y-3">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                          <p className="text-sm">Hi there! How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div
                          className="rounded-lg rounded-tr-none p-2 max-w-[80%] text-white"
                          style={{
                            background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                          }}
                        >
                          <p className="text-sm">Do you offer custom integrations?</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                          <p className="text-sm">
                            Yes, we offer custom integrations for enterprise customers. Would you like to learn more
                            about our enterprise plans?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t p-2 flex items-center gap-2">
                      <Input placeholder="Type your message..." className="flex-1 text-sm h-8" />
                      <Button
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                          color: textColor,
                        }}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Your changes will be applied to the live chatbot</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
