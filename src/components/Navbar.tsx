import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-smooth px-6 md:px-10",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-xl md:text-2xl font-semibold tracking-tight relative overflow-hidden group"
        >
          <span className="bg-clip-text text-sm sm:text-xl text-transparent bg-gradient-to-r from-gray-900 to-gray-600 inline-block">
            ettisafxrup
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 relative group text-sm font-medium py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "rotate-45 translate-y-2"
            )}
          ></span>
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          ></span>
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-all duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-2"
            )}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-500 ease-smooth",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
