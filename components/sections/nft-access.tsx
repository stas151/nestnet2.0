"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Shield, Key, Lock, Crown } from "lucide-react"

export function NFTAccess() {
  const { t } = useTranslation()

  const accessCards = [
    {
      id: 1,
      title: t("basicAccess"),
      icon: Shield,
      level: "Basic",
      color: "from-blue-500 to-purple-500",
      features: [t("basicFeature1"), t("basicFeature2"), t("basicFeature3")],
    },
    {
      id: 2,
      title: t("premiumAccess"),
      icon: Key,
      level: "Premium",
      color: "from-purple-500 to-pink-500",
      features: [t("premiumFeature1"), t("premiumFeature2"), t("premiumFeature3")],
    },
    {
      id: 3,
      title: t("eliteAccess"),
      icon: Crown,
      level: "Elite",
      color: "from-pink-500 to-cyan-500",
      features: [t("eliteFeature1"), t("eliteFeature2"), t("eliteFeature3")],
    },
  ]

  return (
    <section id="nft-access" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {t("nftAccessTitle")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("nftAccessDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-black/40 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all`}
                  >
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{card.title}</CardTitle>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${card.color} text-white`}
                  >
                    {card.level}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Lock className="h-4 w-4 mr-2 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${card.color} hover:opacity-90 transition-opacity`}>
                    {t("getAccess")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
