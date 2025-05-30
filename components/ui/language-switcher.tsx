"use client"

import { useLanguage } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 rounded-full border border-purple-700/50 p-1 bg-black/30 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("ru")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all relative",
          language === "ru" ? "text-white" : "text-gray-400 hover:text-white",
        )}
      >
        {language === "ru" && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">RU</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all relative",
          language === "en" ? "text-white" : "text-gray-400 hover:text-white",
        )}
      >
        {language === "en" && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </Button>
    </div>
  )
}
