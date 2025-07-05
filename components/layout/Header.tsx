"use client"

import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { Code } from "lucide-react"
import { LoginModal } from "@/components/auth/LoginModal"
import Link from "next/link"

interface HeaderProps {
  isScrolled: boolean
}

export function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-gray-800/50" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer">
              Codehence
            </div>
            <nav className="hidden md:flex space-x-6">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>


          <div className="flex items-center space-x-4">
            {/* <LoginModal /> */}
            <Link href="https://ai.codehence.com">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 rounded-full">
                Make It Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 