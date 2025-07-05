"use client"

import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { PRICING_PLANS } from "@/lib/constants"

export function PricingSection() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <SectionTitle 
          title="Choose Your Plan" 
          subtitle="Flexible pricing options designed for every development need"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
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
  )
} 