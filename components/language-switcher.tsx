"use client"

import { useLanguage } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 rounded-full border border-purple-700/50 p-1 bg-black/30">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("ru")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium",
          language === "ru"
            ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            : "text-gray-400 hover:text-white",
        )}
      >
        RU
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium",
          language === "en"
            ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            : "text-gray-400 hover:text-white",
        )}
      >
        EN
      </Button>
    </div>
  )
}
