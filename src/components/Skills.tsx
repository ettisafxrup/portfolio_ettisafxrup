
import React from 'react';
import { SectionObserver, ContentFadeIn } from './Transitions';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level * 10}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-gray-700 to-gray-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level * 10}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s forwards' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 9.5 },
        { name: "JavaScript", level: 9 },
        { name: "React", level: 8.5 },
        { name: "TypeScript", level: 8 },
        { name: "Next.js", level: 7.5 },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 8 },
        { name: "Express", level: 7.5 },
        { name: "MongoDB", level: 7 },
        { name: "SQL", level: 6.5 },
        { name: "GraphQL", level: 6 },
      ]
    },
    {
      name: "Design & Others",
      skills: [
        { name: "UI/UX Design", level: 8 },
        { name: "Figma", level: 7 },
        { name: "Git & GitHub", level: 9 },
        { name: "Docker", level: 6 },
        { name: "AWS", level: 5.5 },
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <ContentFadeIn>
            <div className="text-center mb-16">
              <div className="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                Skills & Expertise
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                My Technical Proficiency
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                With a diverse skill set and continuous learning approach, I bring comprehensive 
                capabilities to every project I undertake.
              </p>
            </div>
          </ContentFadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <SectionObserver key={index} threshold={0.2} rootMargin="0px">
                <div className="light-glass rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                    {category.name}
                  </h3>
                  
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>
              </SectionObserver>
            ))}
          </div>
          
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Problem Solving", "Attention to Detail", "Responsive Design", "Performance Optimization"].map((strength, index) => (
                <SectionObserver key={index} threshold={0.2} rootMargin="0px">
                  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-semibold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium">{strength}</h3>
                  </div>
                </SectionObserver>
              ))}
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  );
};

export default Skills;
