"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, LinkIcon, Wifi, Database, ChevronRight, Zap, Shield, Globe } from "lucide-react"

// Matrix Rain Component
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("")
    const font_size = 10
    const columns = canvas.width / font_size
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = font_size + "px arial"

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * font_size, drops[i] * font_size)

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}

// Glowing Card Component
const GlowCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: any
}) => (
  <Card className="relative group bg-black/40 border-green-500/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-green-400">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
)

// NFT Capsule Component
const NFTCapsule = () => (
  <div className="relative w-64 h-64 mx-auto">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-pulse" />
    <div className="absolute inset-2 rounded-full bg-black/80 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center animate-spin-slow">
        <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
          <Zap className="w-12 h-12 text-green-400 animate-pulse" />
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 rounded-full border-2 border-green-500/30 animate-ping" />
  </div>
)

export default function NestNetLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
              NestNet
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1" />
              <Globe className="w-6 h-6 text-green-400 animate-spin-slow" />
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1" />
            </div>
          </div>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-green-300 font-light tracking-wider">Order in Digital Chaos</p>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]"
          >
            Enter the Capsule
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-300 rounded-full animate-bounce" />
        </div>
      </section>

      {/* NFT Capsule Access Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              NFT Capsule Access
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the decentralized future with exclusive NFT capsules. Each capsule grants access to our
              revolutionary logistics network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <GlowCard
                icon={Shield}
                title="Secure Access"
                description="Each NFT capsule provides cryptographically secure access to the NestNet ecosystem with immutable ownership rights."
              />
              <GlowCard
                icon={Zap}
                title="Instant Activation"
                description="Deploy your digital infrastructure instantly upon capsule activation. No waiting, no delays, just pure efficiency."
              />
              <GlowCard
                icon={Globe}
                title="Global Network"
                description="Connect to our worldwide decentralized network spanning continents with sub-millisecond latency."
              />
            </div>

            <div className="flex justify-center">
              <NFTCapsule />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">Core Technologies</h2>
            <p className="text-xl text-gray-300">Powered by cutting-edge technologies for the decentralized future</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/60 border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                    <Cpu className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">AI</h3>
                <p className="text-gray-300">
                  Advanced machine learning algorithms optimize network performance and predict logistics patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                    <LinkIcon className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Blockchain</h3>
                <p className="text-gray-300">
                  Immutable ledger technology ensures transparency and security across all network transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                    <Wifi className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">IoT</h3>
                <p className="text-gray-300">
                  Internet of Things integration provides real-time monitoring and control of logistics operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                    <Database className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">P2P Storage</h3>
                <p className="text-gray-300">
                  Distributed storage network ensures data redundancy and availability across the globe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Request Access
            </h2>
            <p className="text-xl text-gray-300">
              Join the revolution. Get early access to NestNet's decentralized infrastructure.
            </p>
          </div>

          <Card className="bg-black/40 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/60 border-green-500/30 focus:border-green-400 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/60 border-green-500/30 focus:border-green-400 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your use case..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/60 border-green-500/30 focus:border-green-400 text-white placeholder-gray-400 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)]"
                >
                  Request Access
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-green-500/30 bg-black/60">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">NestNet</h3>
            <p className="text-gray-400">Decentralized Logistics & Digital Infrastructure</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>© 2024 NestNet. All rights reserved.</span>
            <span>•</span>
            <span>Built on the blockchain</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
