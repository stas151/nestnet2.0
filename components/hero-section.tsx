"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { t } = useTranslation()

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-900/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold tracking-tight mb-6",
            "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400",
          )}
        >
          {t("heroTitle")}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">{t("heroSubtitle")}</p>

        <Button
          onClick={scrollToContactForm}
          size="lg"
          className={cn(
            "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500",
            "text-white font-medium px-8 py-6 rounded-2xl text-lg",
            "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
            "transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]",
            "border border-purple-500/30",
          )}
        >
          {t("requestAccess")}
        </Button>

        {/* Cyberpunk grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 gap-4 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
