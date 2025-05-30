"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { FileText, ArrowRight, Users, Clock, CheckCircle2 } from "lucide-react"

export function DocumentFlow() {
  const { t } = useTranslation()

  const flowSteps = [
    {
      id: 1,
      title: t("documentSubmission"),
      icon: FileText,
      status: "completed",
      description: t("submitDocuments"),
    },
    {
      id: 2,
      title: t("reviewProcess"),
      icon: Users,
      status: "active",
      description: t("expertReview"),
    },
    {
      id: 3,
      title: t("approval"),
      icon: CheckCircle2,
      status: "pending",
      description: t("finalApproval"),
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
            {t("documentFlowTitle")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("documentFlowDescription")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DAG Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-purple-900/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <FileText className="h-6 w-6 text-purple-400" />
                  {t("dagWorkflow")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        step.status === "completed"
                          ? "bg-green-500/20 border border-green-500/50"
                          : step.status === "active"
                            ? "bg-purple-500/20 border border-purple-500/50"
                            : "bg-gray-500/20 border border-gray-500/50"
                      }`}
                    >
                      <step.icon
                        className={`h-6 w-6 ${
                          step.status === "completed"
                            ? "text-green-400"
                            : step.status === "active"
                              ? "text-purple-400"
                              : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                    {index < flowSteps.length - 1 && <ArrowRight className="h-5 w-5 text-gray-500" />}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Statistics and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">24h</div>
                    <div className="text-gray-400 text-sm">{t("avgProcessingTime")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-gray-400 text-sm">{t("approvalRate")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-900/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-8 w-8 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">{t("realTimeTracking")}</h3>
                    <p className="text-gray-400 text-sm">{t("trackProgress")}</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500">
                  {t("trackDocument")}
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20">
                {t("uploadDocument")}
              </Button>
              <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/20">
                {t("viewHistory")}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
