"use client"

import { Menu } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-900/20 backdrop-blur-md bg-black/50">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="mr-2 md:hidden text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t("toggleMenu")}</span>
        </Button>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-cyan-500",
              "flex items-center justify-center text-white font-bold text-lg",
              "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
            )}
          >
            N
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            NestNet
          </span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
