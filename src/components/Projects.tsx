import React, { useState } from "react"
import { SectionObserver, ContentFadeIn } from "./Transitions"
import { ExternalLink, ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

/* const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scale-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 z-10 flex items-end p-6 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            <span>View project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          Hello
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
        >
          <span>Explore</span>
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  )
} */

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scale-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        {/* Image for the project */}
        <img
          src={project.image} // Assuming your project object has an image field
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 z-10 flex items-end p-6 ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            <span>View project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          {project.title}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
        >
          <span>Explore</span>
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

//

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "weexSchools",
      description:
        "A desktop application for managing educational institute's data more efficiently!",
      tags: ["React", "Node.js", "Electron", "Desktop"],
      image:
        "https://private-user-images.githubusercontent.com/107711625/416034440-540df40a-b131-475c-858e-bd2b929d49fb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE3OTI3MTQsIm5iZiI6MTc0MTc5MjQxNCwicGF0aCI6Ii8xMDc3MTE2MjUvNDE2MDM0NDQwLTU0MGRmNDBhLWIxMzEtNDc1Yy04NThlLWJkMmI5MjlkNDlmYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMlQxNTEzMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMmE2Zjg2NWNkNThmOTAzZDUxYzZiNDE1OGUwNzBiNzEzYmFlNzY4NzVkMDhlZjk0ZWU5ZmNhNzZhZGI0NGU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XhKu9ZfByQhAVlz9K5n2vl_kAHR6YeD3TD_X72Rv62Q",
      link: "https://github.com/ettisafxrup/weexschool",
    },
    {
      id: 2,
      title: "zipcity-bd",
      description:
        "A Bangladesh-based zipcode package to get your Divisions, Districts, City, Sub-City with PostalCode in just seconds.",
      tags: ["Innovation", "Real-Life Solution", "npm"],
      image: "https://i.ibb.co.com/bRRQjs5b/Screenshot-2.png",
      link: "https://www.npmjs.com/package/zipcity-bd",
    },
    {
      id: 3,
      title: "Toy Ransomeware JavaScript",
      description: "Harmless, but Dangerous!",
      tags: ["Javascript"],
      image: "https://i.ibb.co.com/r2kGkNPG/Screenshot-1.png",
      link: "https://github.com/ettisafxrup/toy-ransome-js",
    },
    {
      id: 4,
      title: "Voice Assistant",
      description: "Automate Computer Prompts using Speech-Recognition.",
      tags: ["Python"],
      image:
        "https://i.ibb.co.com/QFxxzpXt/19-Icq-VZ48-A0t-Qba1-F-y-Ipg-820x540.jpg",
      link: "https://github.com/ettisafxrup/assistant.py",
    },
    {
      id: 5,
      title: "Temporary Chats",
      description:
        "text privately, and rest of the conversations gets dissloved in wind as soon as you close the window!",
      tags: ["NodeJS", "Express", "Socket.IO"],
      image: "https://i.ibb.co.com/ZpmvJ4LK/Screenshot-3.png",
      link: "https://tempchat-rdy5.onrender.com/",
    },
    {
      id: 6,
      title: "BoiGhor",
      description:
        "Online eBook Store demo rendering website from SSR. Buy eBooks Online",
      tags: ["NodeJS", "Express", "Socket.IO"],
      image:
        "https://i.ibb.co.com/cKQ9m6yv/416034097-7f11a9d1-d572-474a-891a-970775ff289b.png",
      link: "https://boighor-uvkz.onrender.com/",
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <ContentFadeIn>
            <div className="text-center mb-16">
              <div className="bg-gray-200 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                Projects and Innovations
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Work Showcase
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore my latest projects showcasing my expertise in web
                development, design, and problem-solving across various domains.
              </p>
            </div>
          </ContentFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <SectionObserver
                key={project.id}
                threshold={0.2}
                rootMargin="0px"
              >
                <ProjectCard project={project} />
              </SectionObserver>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/ettisafxrup?tab=repositories"
              className="bg-white border border-gray-200 px-8 py-4 rounded-full inline-flex items-center gap-2 hover:gap-3 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <span>Open Github</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export default Projects
