"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { sendContactForm } from "@/lib/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      await sendContactForm(formData)
      setFormStatus("success")
      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }
  }

  return (
    <section id="contact-form" className="relative py-10">
      <div className="max-w-3xl mx-auto">
        <div
          className={cn(
            "rounded-2xl p-8",
            "bg-gradient-to-br from-black to-purple-950/20",
            "border border-purple-900/30",
            "backdrop-blur-sm",
          )}
        >
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",
              )}
            >
              {t("contactTitle")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t("contactDescription")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  {t("nameLabel")}
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("namePlaceholder")}
                  required
                  className={cn(
                    "bg-purple-950/10 border-purple-900/30",
                    "focus:border-purple-500 focus:ring-purple-500/20",
                    "placeholder:text-gray-500",
                  )}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  {t("emailLabel")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  className={cn(
                    "bg-purple-950/10 border-purple-900/30",
                    "focus:border-purple-500 focus:ring-purple-500/20",
                    "placeholder:text-gray-500",
                  )}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  className={cn(
                    "bg-purple-950/10 border-purple-900/30",
                    "focus:border-purple-500 focus:ring-purple-500/20",
                    "placeholder:text-gray-500",
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full md:w-auto px-8",
                  "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500",
                  "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
                  "transition-all duration-300",
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("submit")}...
                  </>
                ) : (
                  t("submit")
                )}
              </Button>

              {formStatus === "success" && (
                <div className="mt-4 flex items-center text-green-500">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>{t("formSuccess")}</span>
                </div>
              )}

              {formStatus === "error" && (
                <div className="mt-4 flex items-center text-red-500">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  <span>{t("formError")}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
