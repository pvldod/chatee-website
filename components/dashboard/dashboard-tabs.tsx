"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Cpu, Paintbrush, Code, BarChart3, Settings, HelpCircle } from "lucide-react"
import KnowledgeBaseTab from "./tabs/knowledge-base-tab"
import TrainingTab from "./tabs/training-tab"
import AppearanceTab from "./tabs/appearance-tab"
import IntegrationTab from "./tabs/integration-tab"
import AnalyticsTab from "./tabs/analytics-tab"
import SettingsTab from "./tabs/settings-tab"
import SupportTab from "./tabs/support-tab"

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("knowledge")

  return (
    <Tabs defaultValue="knowledge" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto p-1 bg-purple-50">
        <TabsTrigger
          value="knowledge"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <BookOpen className="h-4 w-4" />
          <span className="hidden md:inline">Knowledge Base</span>
          <span className="md:hidden">Knowledge</span>
        </TabsTrigger>
        <TabsTrigger
          value="training"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <Cpu className="h-4 w-4" />
          <span className="hidden md:inline">Training</span>
          <span className="md:hidden">Training</span>
        </TabsTrigger>
        <TabsTrigger
          value="appearance"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <Paintbrush className="h-4 w-4" />
          <span className="hidden md:inline">Appearance</span>
          <span className="md:hidden">Look</span>
        </TabsTrigger>
        <TabsTrigger
          value="integration"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <Code className="h-4 w-4" />
          <span className="hidden md:inline">Integration</span>
          <span className="md:hidden">Integrate</span>
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <BarChart3 className="h-4 w-4" />
          <span className="hidden md:inline">Analytics</span>
          <span className="md:hidden">Stats</span>
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <Settings className="h-4 w-4" />
          <span className="hidden md:inline">Settings</span>
          <span className="md:hidden">Settings</span>
        </TabsTrigger>
        <TabsTrigger
          value="support"
          className="flex items-center gap-2 py-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
        >
          <HelpCircle className="h-4 w-4" />
          <span className="hidden md:inline">Support</span>
          <span className="md:hidden">Help</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="knowledge" className="space-y-4">
        <KnowledgeBaseTab />
      </TabsContent>

      <TabsContent value="training" className="space-y-4">
        <TrainingTab />
      </TabsContent>

      <TabsContent value="appearance" className="space-y-4">
        <AppearanceTab />
      </TabsContent>

      <TabsContent value="integration" className="space-y-4">
        <IntegrationTab />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <AnalyticsTab />
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <SettingsTab />
      </TabsContent>

      <TabsContent value="support" className="space-y-4">
        <SupportTab />
      </TabsContent>
    </Tabs>
  )
}
