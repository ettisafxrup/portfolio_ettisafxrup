import React, { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { SectionObserver } from "./Transitions"

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-24 pb-10 px-6"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 hero-gradient opacity-40"></div>

      {/* Animated circles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-gray-200/20 to-gray-100/10 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: "translate(-50%, -50%)",
              opacity: 0.6,
              animation: `float ${
                Math.random() * 20 + 10
              }s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col gap-8">
          <SectionObserver>
            <div className="text-center">
              <span
                className={`inline-block transition-all duration-700 delay-300 bg-gray-100 text-gray-800 text-sm px-4 py-1.5 rounded-full ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                Innovation throughout in Silence{" "}
              </span>
            </div>

            <h1
              className={`text-center transition-all duration-1000 delay-500 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block mb-2">Ettisaf Rup.</span>
              <span className="block mb-1 sm:text-2xl text-sm tracking-wide">
                Computer Afficiando x Machine Enthusiast
              </span>
            </h1>

            <div
              className={`flex justify-center mt-10 transition-all duration-1000 delay-900 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#projects"
                className="bg-gray-900 text-white px-4 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 hover:gap-3 transition-all duration-300 ease-smooth"
              >
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </SectionObserver>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-4">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
