"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Key } from "lucide-react"
import { cn } from "@/lib/utils"

export function NftAccess() {
  const { t } = useTranslation()

  return (
    <section className="relative py-10">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <div
            className={cn(
              "relative p-8 md:p-12",
              "bg-gradient-to-br from-purple-900/30 to-black",
              "border border-purple-900/30",
              "backdrop-blur-sm",
            )}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div
                className={cn(
                  "flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl",
                  "bg-gradient-to-br from-purple-600 to-cyan-600",
                  "flex items-center justify-center",
                  "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
                )}
              >
                <Shield className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2
                  className={cn(
                    "text-3xl md:text-4xl font-bold mb-4",
                    "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",
                  )}
                >
                  {t("nftAccessTitle")}
                </h2>

                <p className="text-gray-300 mb-6 max-w-2xl">{t("nftAccessDescription")}</p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full",
                      "bg-purple-900/20 border border-purple-500/30",
                      "text-sm text-purple-300",
                    )}
                  >
                    <Lock className="h-4 w-4" />
                    <span>VIP Channels</span>
                  </div>

                  <div
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full",
                      "bg-purple-900/20 border border-purple-500/30",
                      "text-sm text-purple-300",
                    )}
                  >
                    <Key className="h-4 w-4" />
                    <span>Exclusive Content</span>
                  </div>
                </div>

                <Button
                  className={cn(
                    "mt-6",
                    "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500",
                    "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
                  )}
                >
                  {t("learnMore")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
