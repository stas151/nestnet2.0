"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Hash, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatRooms() {
  const { t } = useTranslation()

  const rooms = [
    {
      id: 1,
      name: t("general"),
      icon: <Hash className="h-5 w-5" />,
      users: 128,
      active: true,
    },
    {
      id: 2,
      name: t("cyberpunk"),
      icon: <Zap className="h-5 w-5" />,
      users: 86,
      active: false,
    },
    {
      id: 3,
      name: t("technology"),
      icon: <Zap className="h-5 w-5" />,
      users: 64,
      active: false,
    },
  ]

  return (
    <section className="relative py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",
            )}
          >
            {t("chatRoomsTitle")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("chatRoomsDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={cn(
                "relative rounded-2xl p-6 backdrop-blur-sm",
                "border border-purple-900/30",
                "bg-gradient-to-br from-black/80 to-purple-950/20",
                "transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
                "group",
              )}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center mb-4">
                <div className={cn("p-2 rounded-lg mr-3", "bg-purple-900/20 text-purple-400")}>{room.icon}</div>
                <h3 className="text-xl font-semibold text-white">#{room.name}</h3>
              </div>

              <div className="flex items-center text-gray-400 mb-6">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">{room.users} online</span>
              </div>

              <Button
                variant={room.active ? "default" : "outline"}
                className={cn(
                  "w-full",
                  room.active ? "bg-gradient-to-r from-purple-600 to-cyan-600" : "border-purple-500/30",
                )}
              >
                {t("joinChannel")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
