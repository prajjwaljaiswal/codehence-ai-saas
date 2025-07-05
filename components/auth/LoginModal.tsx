"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Github } from "lucide-react"

export function LoginModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-purple-500/25"
          onClick={() => setOpen(true)}
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/90 border border-gray-800/60 p-8 rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Sign in
          </DialogTitle>
          <DialogDescription className="text-center mb-6">
            or <a href="#" className="text-purple-400 hover:underline">Create an account</a>
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <Input type="email" placeholder="Your email" className="bg-black/60 border-gray-800 text-white placeholder-gray-400" />
          <Input type="password" placeholder="Password" className="bg-black/60 border-gray-800 text-white placeholder-gray-400" />
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg rounded-full mt-2">
            Sign in
          </Button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-800" />
          <span className="mx-4 text-gray-500 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-800" />
        </div>
        <div className="space-y-3">
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full">
            <Github className="h-5 w-5" />
            Sign in with GitHub
          </Button>
          <Button variant="secondary" className="w-full flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-green-400 rounded-full">
            {/* WeChat SVG icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#1AAD19" />
              <ellipse cx="7" cy="10" rx="1.2" ry="1.1" fill="white" />
              <ellipse cx="13" cy="10" rx="1.2" ry="1.1" fill="white" />
            </svg>
            Sign in with WeChat
          </Button>
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="ghost" className="w-full rounded-full text-gray-400 hover:text-white">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 