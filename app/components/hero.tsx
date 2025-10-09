"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Beginer Web Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Halo, I&apos;m</span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Safrizal Huda Kurniawan
              </span>
            </h1>

            <div className="h-8">
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Exploring the endless possibilities of
            technology and software development.
          </p>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/safrizal-hk"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              target="_blank"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/safrizal-huda-kurniawan-260208379"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              CV
            </Link>
            <Link
              href="https://youtube.com/shorts/xreupPDMhGM?feature=share"
              target="_blank"
              className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Personal Branding
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}
