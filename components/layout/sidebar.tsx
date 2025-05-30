"use client"

import { Home, Truck, FileText, Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { t } = useTranslation()

  const menuItems = [
    { icon: Home, label: t("home"), href: "#home", active: true },
    { icon: Truck, label: t("tracking"), href: "#tracking" },
    { icon: FileText, label: t("documents"), href: "#documents" },
    { icon: Shield, label: t("nftAccess"), href: "#nft-access" },
  ]

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64",
          "bg-black/90 backdrop-blur-xl border-r border-purple-900/30",
          "lg:translate-x-0 lg:static lg:inset-0",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-purple-900/20">
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            NestNet
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden text-purple-400 hover:text-purple-300"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
                "hover:bg-purple-900/20 group",
                item.active ? "bg-purple-900/30 text-white" : "text-gray-400 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  item.active ? "text-purple-400" : "text-gray-500 group-hover:text-purple-400",
                )}
              />
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                />
              )}
            </motion.a>
          ))}
        </nav>
      </motion.aside>
    </AnimatePresence>
  )
}
