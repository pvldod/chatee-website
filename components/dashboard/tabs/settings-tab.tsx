"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Save, User, CreditCard, Users, Shield, Bell } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account and chatbot settings.</p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="account" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Users className="mr-2 h-4 w-4" />
            Team
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Shield className="mr-2 h-4 w-4" />
            Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" defaultValue="Acme Inc." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://example.com" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="america_new_york">
                    <SelectTrigger id="timezone" className="mt-1">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america_new_york">America/New York (UTC-5)</SelectItem>
                      <SelectItem value="america_los_angeles">America/Los Angeles (UTC-8)</SelectItem>
                      <SelectItem value="europe_london">Europe/London (UTC+0)</SelectItem>
                      <SelectItem value="asia_tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger id="language" className="mt-1">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="japanese">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" className="mt-1" />
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing details.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Professional Plan</h3>
                      <p className="text-sm text-muted-foreground">$79/month, billed monthly</p>
                    </div>
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Change Plan
                    </Button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Next billing date</span>
                      <span>June 15, 2023</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Messages used this month</span>
                      <span>3,245 / 5,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Active websites</span>
                      <span>2 / 3</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-10 w-16 bg-gray-200 rounded mr-4"></div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Billing History</h3>
                  <div className="border rounded-lg divide-y">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Invoice #{2023050 + i}</p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "May 15, 2023" : i === 2 ? "April 15, 2023" : "March 15, 2023"}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium">$79.00</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team and their permissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Team Members (3)</h3>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Invite Member
                  </Button>
                </div>

                <div className="border rounded-lg divide-y">
                  {[
                    { name: "John Doe", email: "john.doe@example.com", role: "Admin" },
                    { name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
                    { name: "Bob Johnson", email: "bob.johnson@example.com", role: "Viewer" },
                  ].map((member, i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <span className="font-medium text-purple-600">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Select defaultValue={member.role.toLowerCase()}>
                          <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium mb-2">Role Permissions</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>
                      • <span className="font-medium">Admin:</span> Full access to all settings and features
                    </li>
                    <li>
                      • <span className="font-medium">Editor:</span> Can edit chatbot settings and content
                    </li>
                    <li>
                      • <span className="font-medium">Viewer:</span> Can view analytics and conversations
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="new-conversation" className="text-base font-normal">
                          New conversations
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for new chat conversations
                        </p>
                      </div>
                      <Switch id="new-conversation" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weekly-report" className="text-base font-normal">
                          Weekly reports
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive weekly analytics and performance reports
                        </p>
                      </div>
                      <Switch id="weekly-report" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="billing-updates" className="text-base font-normal">
                          Billing updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about billing and subscription
                        </p>
                      </div>
                      <Switch id="billing-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="product-updates" className="text-base font-normal">
                          Product updates
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about new features and updates
                        </p>
                      </div>
                      <Switch id="product-updates" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">In-App Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="chat-alerts" className="text-base font-normal">
                          Chat alerts
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive in-app notifications for new chats</p>
                      </div>
                      <Switch id="chat-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="team-activity" className="text-base font-normal">
                          Team activity
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive in-app notifications for team actions</p>
                      </div>
                      <Switch id="team-activity" defaultChecked />
                    </div>
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Save className="mr-2 h-4 w-4" /> Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Privacy & Data</CardTitle>
              <CardDescription>Manage your privacy settings and data preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Collection</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="conversation-storage" className="text-base font-normal">
                          Conversation storage
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Store conversation history for training and analytics
                        </p>
                      </div>
                      <Switch id="conversation-storage" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="usage-analytics" className="text-base font-normal">
                          Usage analytics
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Collect anonymous usage data to improve the service
                        </p>
                      </div>
                      <Switch id="usage-analytics" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="third-party-sharing" className="text-base font-normal">
                          Third-party data sharing
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Share data with third-party services for integration purposes
                        </p>
                      </div>
                      <Switch id="third-party-sharing" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Data Retention</h3>
                  <RadioGroup defaultValue="90days">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30days" id="30days" />
                      <Label htmlFor="30days">30 days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="90days" id="90days" />
                      <Label htmlFor="90days">90 days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1year" id="1year" />
                      <Label htmlFor="1year">1 year</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="forever" id="forever" />
                      <Label htmlFor="forever">Indefinitely</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">GDPR Compliance</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-export" className="text-base font-normal">
                          Data export
                        </Label>
                        <p className="text-sm text-muted-foreground">Allow users to request their conversation data</p>
                      </div>
                      <Switch id="data-export" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-deletion" className="text-base font-normal">
                          Data deletion
                        </Label>
                        <p className="text-sm text-muted-foreground">Allow users to request deletion of their data</p>
                      </div>
                      <Switch id="data-deletion" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="cookie-consent" className="text-base font-normal">
                          Cookie consent
                        </Label>
                        <p className="text-sm text-muted-foreground">Show cookie consent banner on your website</p>
                      </div>
                      <Switch id="cookie-consent" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium mb-2">Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy policy should be updated to reflect how your chatbot collects and processes user data.
                  </p>
                  <Textarea
                    placeholder="Enter your privacy policy text here..."
                    className="min-h-[100px]"
                    defaultValue="This chatbot collects conversation data to provide better responses. All data is stored securely and in compliance with applicable data protection laws. Users can request export or deletion of their data at any time."
                  />
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Save className="mr-2 h-4 w-4" /> Save Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
