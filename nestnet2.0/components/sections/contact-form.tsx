"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { sendContactForm } from "@/lib/actions"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

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
    <section id="contact-form" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {t("contactTitle")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("contactDescription")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-black/60 to-purple-950/20 border-purple-900/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Mail className="h-8 w-8 text-purple-400" />
                {t("getAccessForm")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <User className="h-4 w-4 text-purple-400" />
                      {t("nameLabel")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("namePlaceholder")}
                      required
                      className={cn(
                        "bg-purple-950/10 border-purple-900/30 text-white placeholder:text-gray-500",
                        "focus:border-purple-500 focus:ring-purple-500/20",
                        "transition-all duration-300",
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-purple-400" />
                      {t("emailLabel")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      required
                      className={cn(
                        "bg-purple-950/10 border-purple-900/30 text-white placeholder:text-gray-500",
                        "focus:border-purple-500 focus:ring-purple-500/20",
                        "transition-all duration-300",
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">
                    {t("companyLabel")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t("companyPlaceholder")}
                    className={cn(
                      "bg-purple-950/10 border-purple-900/30 text-white placeholder:text-gray-500",
                      "focus:border-purple-500 focus:ring-purple-500/20",
                      "transition-all duration-300",
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-purple-400" />
                    {t("messageLabel")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    rows={4}
                    className={cn(
                      "bg-purple-950/10 border-purple-900/30 text-white placeholder:text-gray-500",
                      "focus:border-purple-500 focus:ring-purple-500/20",
                      "transition-all duration-300 resize-none",
                    )}
                  />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full md:w-auto px-8 py-6 text-lg font-semibold",
                      "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500",
                      "shadow-[0_0_30px_rgba(168,85,247,0.5)]",
                      "transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "group",
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t("sending")}...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        {t("sendRequest")}
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/30"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">{t("formSuccess")}</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/30"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-medium">{t("formError")}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            {t("directContact")}:
            <a
              href="mailto:stasmiheev151@gmail.com"
              className="text-purple-400 hover:text-purple-300 ml-2 transition-colors"
            >
              stasmiheev151@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
