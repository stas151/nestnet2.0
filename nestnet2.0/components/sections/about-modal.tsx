"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Shield, Network, FileText, Truck, Award, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AboutModalProps {
  onClose: () => void
}

export function AboutModal({ onClose }: AboutModalProps) {
  const { t } = useTranslation()

  const features = [
    {
      icon: Truck,
      title: t("logisticsFeature"),
      description: t("logisticsFeatureDesc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: t("certificationFeature"),
      description: t("certificationFeatureDesc"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: t("documentFlowFeature"),
      description: t("documentFlowFeatureDesc"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: t("nftRightsFeature"),
      description: t("nftRightsFeatureDesc"),
      color: "from-orange-500 to-red-500",
    },
  ]

  const technologies = [
    { name: "NFT-контейнеры", description: t("nftContainers") },
    { name: "DAG-структуры", description: t("dagStructures") },
    { name: "Децентрализация", description: t("decentralization") },
    { name: "Блокчейн", description: t("blockchain") },
  ]

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      const contactSection = document.getElementById("contact-form")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <Network className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {t("aboutNestNet")}
          </h2>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("nestNetDescription")}</p>
      </motion.div>

      {/* Main Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <Card className="bg-black/40 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">{t("keyTechnologies")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30"
            >
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-900/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-purple-400" />
              {t("platformBenefits")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">{t("reliability")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">{t("availability")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">{t("integrations")}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-gray-400 mb-6">{t("readyToStart")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-8 py-6 rounded-2xl text-lg shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] group"
          >
            {t("requestAccess")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onClose}
            className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20 px-8 py-6 rounded-2xl text-lg"
          >
            {t("backToMain")}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
