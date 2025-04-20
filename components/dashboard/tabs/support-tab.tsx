"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, FileText, Video, Send, Search, ExternalLink, HelpCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Support</h2>
        <p className="text-muted-foreground">Get help and learn how to use your chatbot effectively.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Have a question or need help? Our support team is here for you.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject" className="mt-1">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="account">Account Help</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question in detail..."
                    className="mt-1 min-h-[150px]"
                  />
                </div>

                <div>
                  <Label htmlFor="attachment">Attachment (Optional)</Label>
                  <Input id="attachment" type="file" className="mt-1" />
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I integrate the chatbot with my website?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To integrate the chatbot with your website, go to the Integration tab in your dashboard. Copy the
                      provided code snippet and paste it into your website's HTML before the closing body tag. The
                      chatbot will appear on your website immediately after the code is added.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I train my chatbot with custom data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can train your chatbot with custom data in the Knowledge Base tab. Upload documents (PDF,
                      DOCX, TXT), add website URLs for crawling, or manually create FAQ entries. After adding your data,
                      go to the Training tab to start the training process.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I customize the appearance of the chatbot?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, you can fully customize the appearance of your chatbot in the Appearance tab. You can change
                      colors, fonts, button styles, and position. You can also add your logo and customize the chat
                      bubble style to match your brand.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I upgrade or downgrade my subscription?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can change your subscription plan in the Settings tab under Billing. Click on "Change Plan"
                      and select your desired plan. If you upgrade, the additional cost will be prorated for the
                      remainder of your billing cycle. If you downgrade, the change will take effect at the end of your
                      current billing cycle.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I add team members to my account?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can add team members in the Settings tab under Team. Click on "Invite Member" and enter their
                      email address and role (Admin, Editor, or Viewer). They will receive an invitation email with
                      instructions to join your team.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Help Resources</CardTitle>
              <CardDescription>Explore our documentation and tutorials.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search help articles..." className="w-full pl-8" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-2">Comprehensive guides and reference materials</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" /> View Documentation
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Video className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Video Tutorials</h3>
                    <p className="text-sm text-muted-foreground mb-2">Step-by-step video guides for all features</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" /> Watch Tutorials
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Community Forum</h3>
                    <p className="text-sm text-muted-foreground mb-2">Connect with other users and share tips</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" /> Join Community
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Alternative ways to reach our support team.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground">support@chatee.io</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                  <p className="text-xs text-muted-foreground">Monday-Friday, 9AM-5PM EST</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chat with our support team in real-time</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <MessageSquare className="mr-2 h-4 w-4" /> Start Live Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-4 bg-purple-50 rounded-lg flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium mb-1">Need Priority Support?</h3>
              <p className="text-sm text-muted-foreground">
                Upgrade to our Enterprise plan for dedicated support and faster response times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
