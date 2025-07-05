"use client"

import { SectionTitle } from "@/components/ui/SectionTitle"
import { CAPABILITIES } from "@/lib/constants"

export function CapabilitiesSection() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <SectionTitle 
          title="Codehence's Superpowers" 
          subtitle="Advanced AI capabilities that transform your workflow"
          highlight="Superpowers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((item, index) => (
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
  )
} 