"use client"

import { Shield, Globe, Zap } from "lucide-react"
import { SUPPORTED_PLATFORMS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 px-4 py-12 bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Codehence
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-driven code tool for more efficient development. Transform your ideas into reality with the power of
              artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {[Shield, Globe, Zap].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-2 rounded-lg hover:bg-purple-600/20 hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-5 w-5 text-gray-400 hover:text-purple-400" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3">
              {/* <p className="text-gray-400 text-sm flex items-center hover:text-white transition-colors duration-200">
                <span className="mr-2">📧</span>
                teams@codehence.com
              </p> */}

              <p className="text-gray-400 text-sm flex items-center hover:text-white transition-colors duration-200">
                <span className="mr-2">📧</span>
                jaiswalprajjwal486@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Supported Platforms</h4>
            <ul className="space-y-3 text-sm">
              {SUPPORTED_PLATFORMS.map((platform) => (
                <li
                  key={platform}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Codehence. All rights reserved. Built with ❤️ for developers worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
} 