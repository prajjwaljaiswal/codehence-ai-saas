"use client"

import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GradientText({ 
  children, 
  className = "", 
  gradient = "from-purple-400 to-pink-400" 
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
} 