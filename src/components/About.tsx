
import React from 'react';
import { SectionObserver, ContentFadeIn } from './Transitions';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="bg-gradient-to-tr from-gray-100 to-gray-200 aspect-square rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] bg-gradient-to-tr from-gray-50 to-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                    <span className="text-gray-300 text-lg">Your Photo</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-gray-200 rounded-full opacity-40"></div>
                <div className="absolute bottom-10 left-6 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-100 rounded-full opacity-70 -z-10"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-50 -z-10"></div>
            </div>
            
            <ContentFadeIn>
              <div className="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                About me
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                I create digital solutions with purpose
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  I'm a passionate web developer and designer with a keen eye for detail and a love for clean, elegant code. I believe in creating intuitive, accessible, and visually stunning digital experiences.
                </p>
                
                <p>
                  My approach combines technical excellence with creative problem-solving. I'm constantly exploring new technologies and design trends to push the boundaries of what's possible on the web.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring design inspiration, learning new skills, or collaborating with other creative minds on innovative projects.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">5+</span>
                  <span className="block text-gray-500 text-sm">Years Experience</span>
                </div>
                
                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">50+</span>
                  <span className="block text-gray-500 text-sm">Projects Completed</span>
                </div>
                
                <div className="light-glass px-5 py-3 rounded-lg">
                  <span className="block text-xl font-semibold">30+</span>
                  <span className="block text-gray-500 text-sm">Happy Clients</span>
                </div>
              </div>
            </ContentFadeIn>
          </div>
        </SectionObserver>
      </div>
    </section>
  );
};

export default About;
