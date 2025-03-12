
import React, { useState } from 'react';
import { SectionObserver, ContentFadeIn } from './Transitions';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scale-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 z-10 flex items-end p-6 ${isHovered ? 'opacity-100' : ''}`}
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
          Project Image
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
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with integrated payment processing and inventory management.",
      tags: ["React", "Node.js", "Stripe"],
      image: "/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "A comprehensive health tracking application with personalized workout plans.",
      tags: ["React Native", "Firebase", "TypeScript"],
      image: "/project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Interactive data visualization for financial analytics and reporting.",
      tags: ["Vue.js", "D3.js", "Python"],
      image: "/project3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A community platform with real-time messaging and content sharing.",
      tags: ["Next.js", "MongoDB", "Socket.io"],
      image: "/project4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "AI-Powered Content Creator",
      description: "Automated content generation tool for marketers and creators.",
      tags: ["React", "TensorFlow.js", "AWS"],
      image: "/project5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "Property listing platform with virtual tours and mortgage calculator.",
      tags: ["Angular", "Express", "Three.js"],
      image: "/project6.jpg",
      link: "#",
    },
  ];
  
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <ContentFadeIn>
            <div className="text-center mb-16">
              <div className="bg-gray-200 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                My Projects
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Featured Work
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore my latest projects showcasing my expertise in web development, 
                design, and problem-solving across various domains.
              </p>
            </div>
          </ContentFadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <SectionObserver key={project.id} threshold={0.2} rootMargin="0px">
                <ProjectCard project={project} />
              </SectionObserver>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="#"
              className="bg-white border border-gray-200 px-8 py-4 rounded-full inline-flex items-center gap-2 hover:gap-3 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </SectionObserver>
      </div>
    </section>
  );
};

export default Projects;
