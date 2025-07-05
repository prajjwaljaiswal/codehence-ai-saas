import { Code, Settings, Brackets, Zap } from "lucide-react"

export const NAVIGATION_ITEMS = ["Pricing", "About Us"]

export const EXAMPLES = [
  { title: "Backend Visualization Page", color: "from-purple-400 to-purple-600", delay: "0ms" },
  { title: "Backend Homepage", color: "from-yellow-400 to-orange-500", delay: "100ms" },
  { title: "PC Login Page", color: "from-blue-400 to-blue-600", delay: "200ms" },
  { title: "Mobile Login Page", color: "from-gray-400 to-gray-600", delay: "300ms" },
]

export const CAPABILITIES = [
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
]

export const PRICING_PLANS = [
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
]

export const SUPPORTED_PLATFORMS = ["Figma", "Sketch", "Adobe XD", "InVision"]

export const HERO_ACTIONS = [
  { icon: "Upload", text: "Import Image" },
  { icon: "FileSearch", text: "Search or Figma File" },
  { icon: "Paintbrush", text: "Generate Design" },
] 