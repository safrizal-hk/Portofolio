"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useScrollPosition } from "./UseScroll/UseScroll"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const hasScrolled = useScrollPosition(10)

  useEffect(() => {
    const body = document.querySelector("body")
if (body) {
  body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
}
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ease-in-out ${
        hasScrolled ? "top-4" : "top-6"
      }`}
    >
      <nav
        className={`relative mx-auto flex items-center justify-between px-6
          bg-black/40 backdrop-blur-lg 
          border border-gray-700 shadow-lg rounded-full
          transition-all duration-500 ease-in-out
          ${hasScrolled ? "py-2 max-w-3xl" : "py-4 max-w-6xl"}
          ${
            isMobileMenuOpen
              ? "scale-95 bg-black/60 backdrop-blur-xl"
              : "scale-100"
          }`}
      >
        {/* === Logo === */}
        <div className="flex-shrink-0">
          <Link
            href="#home"
            className="font-bold text-xl tracking-tight text-white hover:text-gray-300 transition-colors"
          >
            Portfolio
          </Link>
        </div>

        {/* === Menu Desktop === */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* === Hamburger Button === */}
        <div className="flex md:hidden items-center">
          <button
            className="flex flex-col space-y-1.5 p-2 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* === Menu Mobile === */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-4 rounded-2xl 
                       bg-black/80 backdrop-blur-2xl 
                       border border-gray-700 shadow-2xl
                       animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="p-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
