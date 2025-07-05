"use client"

import { Code, Upload, FileSearch, Paintbrush, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative px-4 py-32 text-center">
      <div className="container mx-auto relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-6 hover:scale-110 transition-transform duration-300">
              <Code className="h-8 w-8 text-white animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-10 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Generate any{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              code at once
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              design
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Create AI-powered applications including Vue, React, Next.js, Python, Java, and WeChat
            <br />
            Mini Programs with unprecedented speed and precision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-5">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
              <Input
                placeholder="Start using Codehence to create a program..."
                className="bg-transparent border-0 text-white placeholder-gray-400 text-lg h-12 focus:ring-2 focus:ring-purple-500/50"
              />
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  {[
                    { icon: Upload, text: "Import Image" },
                    { icon: FileSearch, text: "Search or Figma File" },
                    { icon: Paintbrush, text: "Generate Design" },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 hover:text-white hover:scale-105 transition-all duration-200 group"
                    >
                      <item.icon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                      <span>{item.text}</span>
                    </button>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 shadow-lg rounded-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 