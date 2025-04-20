"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Play, Pause, RotateCcw, MessageSquare, Plus, Save, Trash2, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function TrainingTab() {
  const [trainingProgress, setTrainingProgress] = useState(68)
  const [isTraining, setIsTraining] = useState(false)

  const handleStartTraining = () => {
    setIsTraining(true)
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsTraining(false)
          return 100
        }
        return prev + 1
      })
    }, 500)
  }

  const handlePauseTraining = () => {
    setIsTraining(false)
  }

  const handleResetTraining = () => {
    setIsTraining(false)
    setTrainingProgress(0)
  }

  const conversationFlows = [
    { id: 1, name: "Product Inquiry", nodes: 5, lastEdited: "2023-05-20" },
    { id: 2, name: "Customer Support", nodes: 8, lastEdited: "2023-05-22" },
    { id: 3, name: "Sales Process", nodes: 12, lastEdited: "2023-05-25" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Training</h2>
        <p className="text-muted-foreground">Train your chatbot and customize its behavior.</p>
      </div>

      <Tabs defaultValue="model" className="space-y-4">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="model" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            Model Training
          </TabsTrigger>
          <TabsTrigger
            value="conversation"
            className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
          >
            Conversation Flow
          </TabsTrigger>
          <TabsTrigger value="personality" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            Personality
          </TabsTrigger>
          <TabsTrigger value="testing" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            Testing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="model" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Model Training</CardTitle>
              <CardDescription>Train your AI model on your knowledge base to improve responses.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="model-type">Base Model</Label>
                      <Select defaultValue="gpt-4">
                        <SelectTrigger id="model-type" className="mt-1">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
                          <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                          <SelectItem value="custom">Custom Model</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="training-epochs">Training Epochs</Label>
                      <Select defaultValue="3">
                        <SelectTrigger id="training-epochs" className="mt-1">
                          <SelectValue placeholder="Select epochs" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 (Faster, less accurate)</SelectItem>
                          <SelectItem value="3">3 (Recommended)</SelectItem>
                          <SelectItem value="5">5 (Slower, more accurate)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Training Progress</Label>
                      <span className="text-sm text-muted-foreground">{trainingProgress}%</span>
                    </div>
                    <Progress value={trainingProgress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {!isTraining ? (
                      <Button
                        onClick={handleStartTraining}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        <Play className="mr-2 h-4 w-4" /> Start Training
                      </Button>
                    ) : (
                      <Button
                        onClick={handlePauseTraining}
                        variant="outline"
                        className="border-purple-200 text-purple-600 hover:bg-purple-50"
                      >
                        <Pause className="mr-2 h-4 w-4" /> Pause Training
                      </Button>
                    )}
                    <Button
                      onClick={handleResetTraining}
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" /> Reset Training
                    </Button>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium mb-2">Training Tips</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Add more documents to improve response quality</li>
                      <li>• Training may take several minutes depending on your data size</li>
                      <li>• You can pause training and resume later</li>
                      <li>• Test your chatbot after training to verify improvements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversation" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Conversation Flow Builder</CardTitle>
              <CardDescription>Create guided conversation paths for specific scenarios.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Your Conversation Flows</h3>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <Plus className="mr-2 h-4 w-4" /> New Flow
                  </Button>
                </div>

                <div className="border rounded-lg divide-y">
                  {conversationFlows.map((flow) => (
                    <div key={flow.id} className="p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{flow.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {flow.nodes} nodes • Last edited: {flow.lastEdited}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-200 text-purple-600 hover:bg-purple-50"
                        >
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium mb-2">Flow Builder Tips</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Create flows for common customer journeys</li>
                    <li>• Add conditional branches based on user responses</li>
                    <li>• Include fallback options for unexpected responses</li>
                    <li>• Test your flows thoroughly before publishing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personality" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Chatbot Personality</CardTitle>
              <CardDescription>Customize your chatbot's tone, style, and behavior.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bot-name">Chatbot Name</Label>
                      <Input id="bot-name" defaultValue="Chatee Assistant" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="greeting">Welcome Message</Label>
                      <Textarea
                        id="greeting"
                        defaultValue="Hi there! I'm your AI assistant. How can I help you today?"
                        className="mt-1 min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="fallback">Fallback Message</Label>
                      <Textarea
                        id="fallback"
                        defaultValue="I'm sorry, I don't have enough information to answer that question. Would you like to speak with a human agent?"
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Tone</Label>
                      <div className="grid gap-2">
                        <div className="flex justify-between text-sm">
                          <span>Formal</span>
                          <span>Casual</span>
                        </div>
                        <Slider defaultValue={[60]} max={100} step={1} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Response Length</Label>
                      <div className="grid gap-2">
                        <div className="flex justify-between text-sm">
                          <span>Concise</span>
                          <span>Detailed</span>
                        </div>
                        <Slider defaultValue={[40]} max={100} step={1} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Creativity</Label>
                      <div className="grid gap-2">
                        <div className="flex justify-between text-sm">
                          <span>Conservative</span>
                          <span>Creative</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="advanced">
                        <AccordionTrigger className="text-sm font-medium">Advanced Settings</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="emoji-switch" className="text-sm">
                                Use Emojis
                              </Label>
                              <Switch id="emoji-switch" />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="proactive-switch" className="text-sm">
                                Proactive Suggestions
                              </Label>
                              <Switch id="proactive-switch" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="memory-switch" className="text-sm">
                                Conversation Memory
                              </Label>
                              <Switch id="memory-switch" defaultChecked />
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Save className="mr-2 h-4 w-4" /> Save Personality Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Test Your Chatbot</CardTitle>
              <CardDescription>Test your chatbot's responses before going live.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="border rounded-lg p-4 h-[400px] flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    <div className="flex justify-start">
                      <div className="bg-purple-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-sm">Hi there! I'm your AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        <p className="text-sm">What are your business hours?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-purple-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-sm">Our business hours are Monday to Friday, 9 AM to 5 PM EST.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Type a test message..." className="flex-1" />
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      <MessageSquare className="mr-2 h-4 w-4" /> Send
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Test Scenarios</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50"
                      >
                        <ChevronRight className="mr-2 h-4 w-4" /> Product inquiry
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50"
                      >
                        <ChevronRight className="mr-2 h-4 w-4" /> Pricing questions
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-purple-200 text-purple-600 hover:bg-purple-50"
                      >
                        <ChevronRight className="mr-2 h-4 w-4" /> Support request
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Response Analysis</h3>
                    <div className="p-4 border rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Response Time</span>
                        <span className="text-sm text-green-500">0.8s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Confidence Score</span>
                        <span className="text-sm text-green-500">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Knowledge Source</span>
                        <span className="text-sm">FAQ Document</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
