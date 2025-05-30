"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Truck, MapPin, Package, Route, Upload, Search } from "lucide-react"

export function Logistics() {
  const { t } = useTranslation()

  const logisticsFeatures = [
    {
      icon: Route,
      title: t("createRoute"),
      description: t("createRouteDesc"),
      action: t("createRoute"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: t("verifyCertificate"),
      description: t("verifyCertificateDesc"),
      action: t("verifyCertificate"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Upload,
      title: t("uploadDocuments"),
      description: t("uploadDocumentsDesc"),
      action: t("uploadDocuments"),
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {t("logisticsTitle")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("logisticsDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {logisticsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-black/40 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-center">{feature.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity`}>
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Live Tracking Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-black/60 to-purple-950/20 border-purple-900/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Truck className="h-8 w-8 text-purple-400" />
                {t("liveTracking")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">1,247</div>
                  <div className="text-gray-400 text-sm">{t("activeShipments")}</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-3">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">89</div>
                  <div className="text-gray-400 text-sm">{t("deliveryPoints")}</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                    <Route className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">156</div>
                  <div className="text-gray-400 text-sm">{t("activeRoutes")}</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">98.5%</div>
                  <div className="text-gray-400 text-sm">{t("onTimeDelivery")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
