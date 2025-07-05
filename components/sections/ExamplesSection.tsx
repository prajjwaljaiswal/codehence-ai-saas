"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { EXAMPLES } from "@/lib/constants"

export function ExamplesSection() {
  const [activeExample, setActiveExample] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % EXAMPLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <SectionTitle 
          title="See What's Possible" 
          subtitle="Real examples generated in seconds"
          highlight="Possible"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXAMPLES.map((item, index) => (
            <Card
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                activeExample === index ? "ring-2 ring-purple-500/50 scale-105" : ""
              }`}
              style={{ animationDelay: item.delay }}
            >
              <CardContent className="p-6">
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-xl h-48 mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative text-white text-center z-10">
                    <div className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-200">
                      {item.title.split(" ")[0]}
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/30 h-2 rounded-full animate-pulse"></div>
                      <div className="bg-white/20 h-2 rounded-full w-3/4 mx-auto animate-pulse delay-100"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 