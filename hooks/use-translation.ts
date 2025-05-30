"use client"

import { useContext } from "react"
import { LanguageContext } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return { t, language }
}
