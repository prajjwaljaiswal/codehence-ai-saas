"use client"

import { useState, useEffect } from "react"
import {
  Search,
  ChevronDown,
  Code,
  Upload,
  FileSearch,
  Settings,
  Brackets,
  Paintbrush,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeExample, setActiveExample] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-gray-800/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer">
                Codehence
              </div>
              <nav className="hidden md:flex space-x-6">
                {["Pricing", "About Us"].map((item) => (
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
              {/* <Button
                variant="outline"
                size="sm"
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              >
                <Globe className="h-4 w-4 mr-2" />
                Web Version
              </Button> */}
              {/* <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-800/50 hover:scale-110 transition-all duration-200"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 hover:bg-gray-800/50 hover:scale-105 transition-all duration-200"
              >
                <span>🇬🇧 English</span>
                <ChevronDown className="h-4 w-4" />
              </Button> */}
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

          <div className="space-y-6 animate-fade-in">
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

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            {[
              { icon: "🍎", text: "Download for Mac (Intel)" },
              { icon: "🍎", text: "Download for Mac (Apple Silicon)" },
              { icon: "🪟", text: "Download for Windows" },
            ].map((item, index) => (
              <Button
                key={index}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                {item.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            ))}
          </div> */}

          <div className="max-w-3xl mx-auto">
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
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 shadow-lg">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What's{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Possible
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Real examples generated in seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Backend Visualization Page", color: "from-purple-400 to-purple-600", delay: "0ms" },
              { title: "Backend Homepage", color: "from-yellow-400 to-orange-500", delay: "100ms" },
              { title: "PC Login Page", color: "from-blue-400 to-blue-600", delay: "200ms" },
              { title: "Mobile Login Page", color: "from-gray-400 to-gray-600", delay: "300ms" },
            ].map((item, index) => (
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

      {/* Capabilities Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Codehence's{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Superpowers
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Advanced AI capabilities that transform your workflow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M",
                title: "Screenshot to Code",
                description: "Upload any design screenshot and get pixel-perfect code instantly.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Code,
                title: "URL to Code",
                description: "Clone any website by simply pasting its URL - no manual coding required.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: "F",
                title: "Figma to Code",
                description: "Direct integration with Figma/Sketch - convert your designs with one click.",
                gradient: "from-pink-500 to-red-500",
              },
              {
                icon: Settings,
                title: "Smart Component Detection",
                description: "AI automatically identifies and maps UI components with precision.",
                gradient: "from-green-500 to-blue-500",
              },
              {
                icon: Brackets,
                title: "Framework Choice",
                description: "Generate code for Vue, React, Next.js, Python, Java, and WeChat Mini Programs.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Zap,
                title: "Generate Design Draft",
                description: "Create sketch and figma designs, automatically adapted for mobile devices.",
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-r ${item.gradient} rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {typeof item.icon === "string" ? (
                      <span className="text-2xl font-bold text-white">{item.icon}</span>
                    ) : (
                      <item.icon className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Flexible pricing options designed for every development need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Free",
                price: "Free",
                description: "Perfect for individual developers and small projects",
                features: [
                  "AI Code Generation",
                  "Basic Project Templates",
                  "Community Support",
                  "Basic Development Tools",
                  "5 Requests per Month",
                ],
                popular: false,
                gradient: "from-gray-600 to-gray-800",
              },
              {
                name: "Pro",
                price: "$ 6.78",
                period: "/month",
                description: "Ideal for advanced developers and teams",
                features: [
                  "All Free Features",
                  "Priority AI Response",
                  "Backend API Generation",
                  "Sketch to Code Conversion",
                  "200 Requests per Month",
                ],
                popular: true,
                gradient: "from-purple-600 to-pink-600",
              },
              {
                name: "Enterprise",
                price: "$ 13.7",
                period: "/month",
                description: "For professional development needs",
                features: [
                  "All Pro Features",
                  "500 Requests per Month",
                  "Dedicated Customer Support",
                  "Custom Model Training",
                  "Advanced API Integration",
                ],
                popular: false,
                gradient: "from-blue-600 to-purple-600",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 animate-pulse">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-3">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-3">
                      {plan.price}
                      {plan.period && <span className="text-lg font-normal text-gray-400">{plan.period}</span>}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 transition-all duration-200 mb-8 group-hover:shadow-lg`}
                  >
                    Please login first
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>

                  <ul className="space-y-4 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-200"
                        style={{ animationDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-full p-1">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="group-hover:text-white transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <p className="text-gray-400 text-sm flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">📧</span>
                  teams@Codehence.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Supported Platforms</h4>
              <ul className="space-y-3 text-sm">
                {["Figma", "Sketch", "Adobe XD", "InVision"].map((platform) => (
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
    </div>
  )
}
