"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-purple-900/20 backdrop-blur-xl bg-black/50"
    >
      <div className="container flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="mr-4 lg:hidden text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t("toggleMenu")}</span>
        </Button>

        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            N
          </motion.div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            NestNet
          </span>
        </div>

        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}
