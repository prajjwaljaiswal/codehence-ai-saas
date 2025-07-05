"use client"

import { ReactNode } from "react"
import { GradientText } from "./GradientText"

interface SectionTitleProps {
  title: string
  subtitle?: string
  highlight?: string
  className?: string
}

export function SectionTitle({ title, subtitle, highlight, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title.split(highlight || "").map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && highlight && (
              <GradientText>{highlight}</GradientText>
            )}
          </span>
        ))}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  )
} 