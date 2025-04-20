"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check, Code, Globe, Database, Mail, ShoppingCart, MessageSquare, RefreshCw } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function IntegrationTab() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script>
  window.chateeConfig = {
    apiKey: "YOUR_API_KEY",
    theme: "light",
    position: "bottom-right"
  };
</script>
<script src="https://cdn.chatee.io/widget.js" async></script>`)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const integrations = [
    { id: 1, name: "Salesforce", status: "Connected", lastSync: "2023-05-20 14:30" },
    { id: 2, name: "HubSpot", status: "Connected", lastSync: "2023-05-22 09:15" },
    { id: 3, name: "Zendesk", status: "Not Connected", lastSync: "-" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Integration</h2>
        <p className="text-muted-foreground">Integrate your chatbot with your website and other services.</p>
      </div>

      <Tabs defaultValue="website" className="space-y-4">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="website" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Globe className="mr-2 h-4 w-4" />
            Website
          </TabsTrigger>
          <TabsTrigger value="crm" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Database className="mr-2 h-4 w-4" />
            CRM & Help Desk
          </TabsTrigger>
          <TabsTrigger value="email" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="ecommerce" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <ShoppingCart className="mr-2 h-4 w-4" />
            E-commerce
          </TabsTrigger>
        </TabsList>

        <TabsContent value="website" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Website Integration</CardTitle>
              <CardDescription>Add your chatbot to your website with a simple code snippet.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="api-key">Your API Key</Label>
                    <div className="flex mt-1">
                      <Input id="api-key" value="sk-chatee-a1b2c3d4e5f6g7h8i9j0" readOnly className="rounded-r-none" />
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText("sk-chatee-a1b2c3d4e5f6g7h8i9j0")
                          alert("API key copied to clipboard!")
                        }}
                        className="rounded-l-none"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Keep this key secret. Do not share it in public repositories or client-side code.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="domain">Allowed Domains</Label>
                    <div className="flex mt-1">
                      <Input id="domain" placeholder="example.com" />
                      <Button className="ml-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                        Add
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Add domains where your chatbot is allowed to run.
                    </p>
                  </div>
                </div>

                <div>
                  <Label>Installation Code</Label>
                  <div className="relative mt-1">
                    <pre className="language-html p-4 bg-gray-50 rounded-lg overflow-x-auto text-sm">
                      <code>{`<script>
  window.chateeConfig = {
    apiKey: "YOUR_API_KEY",
    theme: "light",
    position: "bottom-right"
  };
</script>
<script src="https://cdn.chatee.io/widget.js" async></script>`}</code>
                    </pre>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={handleCopy}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Add this code to your website's HTML before the closing body tag.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <Code className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">WordPress Plugin</h3>
                        <p className="text-sm text-muted-foreground mb-4">Easy installation for WordPress sites</p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                          Download Plugin
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <ShoppingCart className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Shopify App</h3>
                        <p className="text-sm text-muted-foreground mb-4">One-click install for Shopify stores</p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                          Install App
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <MessageSquare className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Webflow Integration</h3>
                        <p className="text-sm text-muted-foreground mb-4">Simple setup for Webflow sites</p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                          View Guide
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crm" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>CRM & Help Desk Integrations</CardTitle>
              <CardDescription>Connect your chatbot with your CRM and help desk systems.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="integration-type">Integration Type</Label>
                    <Select defaultValue="salesforce">
                      <SelectTrigger id="integration-type" className="mt-1">
                        <SelectValue placeholder="Select integration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salesforce">Salesforce</SelectItem>
                        <SelectItem value="hubspot">HubSpot</SelectItem>
                        <SelectItem value="zendesk">Zendesk</SelectItem>
                        <SelectItem value="intercom">Intercom</SelectItem>
                        <SelectItem value="freshdesk">Freshdesk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="sync-frequency">Sync Frequency</Label>
                    <Select defaultValue="realtime">
                      <SelectTrigger id="sync-frequency" className="mt-1">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="api-url">API URL</Label>
                    <Input id="api-url" placeholder="https://api.example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="api-token">API Token</Label>
                    <Input id="api-token" type="password" placeholder="Enter your API token" className="mt-1" />
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Connect Integration
                </Button>

                <div>
                  <h3 className="text-lg font-medium mb-4">Connected Integrations</h3>
                  <div className="border rounded-lg divide-y">
                    {integrations.map((integration) => (
                      <div key={integration.id} className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{integration.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Status: {integration.status} • Last Sync: {integration.lastSync}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {integration.status === "Connected" ? (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-purple-200 text-purple-600 hover:bg-purple-50"
                              >
                                <RefreshCw className="h-4 w-4 mr-1" /> Sync Now
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-200 text-red-600 hover:bg-red-50"
                              >
                                Disconnect
                              </Button>
                            </>
                          ) : (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                            >
                              Connect
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Email Integration</CardTitle>
              <CardDescription>Connect your chatbot with your email marketing platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email-platform">Email Platform</Label>
                    <Select defaultValue="mailchimp">
                      <SelectTrigger id="email-platform" className="mt-1">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mailchimp">Mailchimp</SelectItem>
                        <SelectItem value="convertkit">ConvertKit</SelectItem>
                        <SelectItem value="aweber">AWeber</SelectItem>
                        <SelectItem value="getresponse">GetResponse</SelectItem>
                        <SelectItem value="activecampaign">ActiveCampaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="default-list">Default List/Audience</Label>
                    <Select defaultValue="newsletter">
                      <SelectTrigger id="default-list" className="mt-1">
                        <SelectValue placeholder="Select list" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newsletter">Newsletter Subscribers</SelectItem>
                        <SelectItem value="leads">New Leads</SelectItem>
                        <SelectItem value="customers">Customers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="api-key-email">API Key</Label>
                    <Input id="api-key-email" placeholder="Enter your API key" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="from-email">From Email</Label>
                    <Input id="from-email" type="email" placeholder="noreply@example.com" className="mt-1" />
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium mb-2">Email Collection Features</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Collect email addresses from chat conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Automatically add contacts to your email marketing platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Send automated follow-up emails after chat sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Segment contacts based on chat interactions</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Connect Email Platform
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecommerce" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>E-commerce Integration</CardTitle>
              <CardDescription>Connect your chatbot with your e-commerce platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ecommerce-platform">E-commerce Platform</Label>
                    <Select defaultValue="shopify">
                      <SelectTrigger id="ecommerce-platform" className="mt-1">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shopify">Shopify</SelectItem>
                        <SelectItem value="woocommerce">WooCommerce</SelectItem>
                        <SelectItem value="magento">Magento</SelectItem>
                        <SelectItem value="bigcommerce">BigCommerce</SelectItem>
                        <SelectItem value="custom">Custom Platform</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="store-url">Store URL</Label>
                    <Input id="store-url" placeholder="https://your-store.com" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="api-key-ecommerce">API Key</Label>
                    <Input id="api-key-ecommerce" placeholder="Enter your API key" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="api-secret">API Secret</Label>
                    <Input id="api-secret" type="password" placeholder="Enter your API secret" className="mt-1" />
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium mb-2">E-commerce Features</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Product recommendations based on customer queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Order status tracking and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Shopping cart assistance and checkout support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Product inventory and availability information</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Connect E-commerce Platform
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
