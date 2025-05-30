"use client"

import type React from "react"

import { useEffect } from "react"
import { X, Hash, Bell, Cpu, Palette, Calendar } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { t } = useTranslation()

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Don't auto-close on desktop
        return
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-30 bg-black/80 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-black/90 border-r border-purple-900/30",
          "transform transition-transform duration-300 ease-in-out",
          "backdrop-blur-md",
          "md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-purple-900/20">
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            NestNet
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="md:hidden text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">{t("toggleMenu")}</span>
          </Button>
        </div>

        <div className="py-4">
          <div className="px-4 mb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-400">{t("channels")}</h3>
          </div>

          <nav className="space-y-1 px-2">
            <ChannelItem icon={<Hash />} name={t("general")} active />
            <ChannelItem icon={<Bell />} name={t("announcements")} />
            <ChannelItem icon={<Cpu />} name={t("cyberpunk")} />
            <ChannelItem icon={<Cpu />} name={t("technology")} />
            <ChannelItem icon={<Palette />} name={t("art")} />
            <ChannelItem icon={<Calendar />} name={t("events")} />
          </nav>
        </div>
      </aside>
    </>
  )
}

interface ChannelItemProps {
  icon: React.ReactNode
  name: string
  active?: boolean
}

function ChannelItem({ icon, name, active }: ChannelItemProps) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all",
        "group hover:bg-purple-900/20",
        active ? "bg-purple-900/30 text-white" : "text-gray-400 hover:text-white",
      )}
    >
      <span className={cn("mr-3 h-5 w-5", active ? "text-purple-400" : "text-gray-500 group-hover:text-purple-400")}>
        {icon}
      </span>
      {name}
      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></span>
      )}
    </a>
  )
}
