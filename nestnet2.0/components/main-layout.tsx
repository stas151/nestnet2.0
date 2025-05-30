"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className={cn("flex-1 transition-all duration-300 ease-in-out", sidebarOpen ? "md:ml-64" : "")}>
          <div className="container mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
