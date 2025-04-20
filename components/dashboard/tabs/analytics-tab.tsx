"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  LineChart,
  PieChart,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  MessageSquare,
  Clock,
  ThumbsUp,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Monitor your chatbot's performance and user engagement.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+20.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+10.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              <span>-15.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Rate</CardTitle>
            <ThumbsUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+5.2% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <LineChart className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="conversations"
            className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Conversations
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Users className="mr-2 h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <BarChart className="mr-2 h-4 w-4" />
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Conversation Overview</CardTitle>
              <CardDescription>Total conversations over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
              <div className="text-center">
                <LineChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                <p className="text-muted-foreground">Conversation trend chart would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle>User Engagement</CardTitle>
                <CardDescription>How users interact with your chatbot</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">User engagement chart would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle>Conversation Topics</CardTitle>
                <CardDescription>Most common topics discussed</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">Conversation topics chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Conversation Metrics</CardTitle>
              <CardDescription>Detailed conversation statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <MessageSquare className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Total Messages</h3>
                        <p className="text-3xl font-bold mb-1">12,234</p>
                        <p className="text-xs text-green-500">+19.5% from last month</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <Clock className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Avg. Session Duration</h3>
                        <p className="text-3xl font-bold mb-1">4:32</p>
                        <p className="text-xs text-green-500">+8.3% from last month</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <ThumbsUp className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Resolution Rate</h3>
                        <p className="text-3xl font-bold mb-1">87%</p>
                        <p className="text-xs text-green-500">+4.2% from last month</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                    <p className="text-muted-foreground">Conversation timeline would appear here</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Conversations</h3>
                  <div className="border rounded-lg divide-y">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">User #{i}</h4>
                          <p className="text-sm text-muted-foreground">
                            {i === 1
                              ? "How do I integrate the chatbot?"
                              : i === 2
                                ? "What pricing plans do you offer?"
                                : i === 3
                                  ? "Can I customize the appearance?"
                                  : i === 4
                                    ? "How do I train the chatbot with my data?"
                                    : "Is there a free trial available?"}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {i === 1
                            ? "5m ago"
                            : i === 2
                              ? "1h ago"
                              : i === 3
                                ? "3h ago"
                                : i === 4
                                  ? "5h ago"
                                  : "Yesterday"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>Understand your users and their behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-muted-foreground">User demographics would appear here</p>
                    </div>
                  </div>

                  <div className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-muted-foreground">User engagement by time would appear here</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">New Users</h3>
                        <p className="text-3xl font-bold mb-1">243</p>
                        <p className="text-xs text-green-500">+12.5% from last month</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Return Rate</h3>
                        <p className="text-3xl font-bold mb-1">68%</p>
                        <p className="text-xs text-green-500">+5.7% from last month</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-100">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                          <MessageSquare className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium mb-2">Avg. Messages per User</h3>
                        <p className="text-3xl font-bold mb-1">8.4</p>
                        <p className="text-xs text-green-500">+3.2% from last month</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Chatbot Performance</CardTitle>
              <CardDescription>Analyze your chatbot's performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-muted-foreground">Response time trend would appear here</p>
                    </div>
                  </div>

                  <div className="h-[300px] flex items-center justify-center bg-purple-50 rounded-lg">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-muted-foreground">Knowledge source distribution would appear here</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Knowledge Gaps</h3>
                  <div className="border rounded-lg divide-y">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Unanswered Question #{i}</h4>
                          <p className="text-sm text-muted-foreground">
                            {i === 1
                              ? "Do you integrate with Salesforce?"
                              : i === 2
                                ? "Can I use the chatbot on multiple domains?"
                                : i === 3
                                  ? "What languages are supported?"
                                  : i === 4
                                    ? "Is there an API available?"
                                    : "How do I cancel my subscription?"}
                          </p>
                        </div>
                        <div className="text-sm">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            Add to Knowledge Base
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
      </Tabs>
    </div>
  )
}
