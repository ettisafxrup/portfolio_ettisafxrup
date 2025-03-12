import React from "react"
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 px-6 py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Ettisaf Rup</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Creating meaningful digital experiences through thoughtful design
              and precision engineering.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/ettisafxrup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                aria-label="Github"
              >
                <Github className="h-5 w-5 text-gray-700" />
              </a>

              <a
                href="https://www.linkedin.com/in/ettisafxrup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                aria-label="Linkedin"
              >
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>

              <a
                href="https://www.facebook.com/ettisafxrup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                aria-label="Twitter"
              >
                <Facebook className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">ettisafxrup©{currentYear}</p>
          <p className="text-gray-600 text-sm">
            Portfolio: All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
