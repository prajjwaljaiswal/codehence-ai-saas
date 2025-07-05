"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ExamplesSection } from "@/components/sections/ExamplesSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { useScrollEffect } from "@/hooks/useScrollEffect"

export default function HomePage() {
  const isScrolled = useScrollEffect()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ExamplesSection />
      <CapabilitiesSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
