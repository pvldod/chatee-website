"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Plus, Search, File, Trash2, Globe, MessageSquare, RefreshCw } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function KnowledgeBaseTab() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  // Simulate file upload
  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  const documents = [
    { id: 1, name: "Product Manual.pdf", size: "2.4 MB", date: "2023-05-15", type: "PDF", status: "Processed" },
    { id: 2, name: "FAQ Document.docx", size: "1.8 MB", date: "2023-05-20", type: "DOCX", status: "Processing" },
    {
      id: 3,
      name: "Technical Specifications.pdf",
      size: "3.2 MB",
      date: "2023-05-22",
      type: "PDF",
      status: "Processed",
    },
    { id: 4, name: "User Guide.pdf", size: "4.5 MB", date: "2023-05-25", type: "PDF", status: "Processed" },
    { id: 5, name: "API Documentation.txt", size: "0.8 MB", date: "2023-05-28", type: "TXT", status: "Failed" },
  ]

  const websites = [
    { id: 1, url: "https://example.com/about", lastCrawled: "2023-05-20", status: "Indexed" },
    { id: 2, url: "https://example.com/faq", lastCrawled: "2023-05-22", status: "Indexed" },
    { id: 3, url: "https://example.com/products", lastCrawled: "2023-05-25", status: "Indexing" },
  ]

  const faqs = [
    { id: 1, question: "What are your business hours?", answer: "We are open Monday to Friday, 9 AM to 5 PM EST." },
    { id: 2, question: "Do you offer refunds?", answer: "Yes, we offer full refunds within 30 days of purchase." },
    {
      id: 3,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Knowledge Base</h2>
          <p className="text-muted-foreground">Train your chatbot by providing documents, websites, and FAQs.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search knowledge base..." className="w-full pl-8" />
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Plus className="mr-2 h-4 w-4" /> Add Content
          </Button>
        </div>
      </div>

      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="documents" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <File className="mr-2 h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="websites" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <Globe className="mr-2 h-4 w-4" />
            Websites
          </TabsTrigger>
          <TabsTrigger value="faqs" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
            <MessageSquare className="mr-2 h-4 w-4" />
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Upload Documents</CardTitle>
              <CardDescription>Upload PDF, DOCX, or TXT files to train your chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="border-2 border-dashed border-purple-200 rounded-lg p-8 text-center">
                  <FileUp className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse files (PDF, DOCX, TXT up to 10MB)
                  </p>
                  <Button onClick={handleUpload} disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Select Files"}
                  </Button>

                  {isUploading && (
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Uploaded Documents</h3>
                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Upload Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {documents.map((doc) => (
                          <TableRow key={doc.id}>
                            <TableCell className="font-medium">{doc.name}</TableCell>
                            <TableCell>{doc.size}</TableCell>
                            <TableCell>{doc.type}</TableCell>
                            <TableCell>{doc.date}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  doc.status === "Processed"
                                    ? "default"
                                    : doc.status === "Processing"
                                      ? "outline"
                                      : "destructive"
                                }
                                className={
                                  doc.status === "Processed"
                                    ? "bg-green-500"
                                    : doc.status === "Processing"
                                      ? "bg-yellow-500"
                                      : ""
                                }
                              >
                                {doc.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="websites" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Add Websites</CardTitle>
              <CardDescription>Add URLs to websites or web pages to train your chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-9">
                      <Label htmlFor="url">Website URL</Label>
                      <div className="flex mt-1">
                        <Input id="url" placeholder="https://example.com/page" />
                      </div>
                    </div>
                    <div className="col-span-3 flex items-end">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                        <Plus className="mr-2 h-4 w-4" /> Add URL
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="crawl" className="rounded border-gray-300" />
                    <Label htmlFor="crawl">Crawl entire website (follows links within the same domain)</Label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Added Websites</h3>
                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>URL</TableHead>
                          <TableHead>Last Crawled</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {websites.map((site) => (
                          <TableRow key={site.id}>
                            <TableCell className="font-medium">{site.url}</TableCell>
                            <TableCell>{site.lastCrawled}</TableCell>
                            <TableCell>
                              <Badge
                                variant={site.status === "Indexed" ? "default" : "outline"}
                                className={site.status === "Indexed" ? "bg-green-500" : ""}
                              >
                                {site.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-2">
                                <RefreshCw className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-4">
          <Card className="border-purple-100">
            <CardHeader>
              <CardTitle>Manage FAQs</CardTitle>
              <CardDescription>Add frequently asked questions and answers to train your chatbot.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="question">Question</Label>
                    <Input id="question" placeholder="Enter a frequently asked question" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="answer">Answer</Label>
                    <Textarea
                      id="answer"
                      placeholder="Enter the answer to the question"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <Plus className="mr-2 h-4 w-4" /> Add FAQ
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Added FAQs</h3>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <Card key={faq.id} className="border-purple-100">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="space-y-2">
                              <h4 className="font-medium">{faq.question}</h4>
                              <p className="text-sm text-muted-foreground">{faq.answer}</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
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
