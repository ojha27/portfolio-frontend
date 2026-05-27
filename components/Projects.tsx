"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Code2, Briefcase } from "lucide-react";

const personalProjects = [
  {
    title: "SEO Generator Platform",
    description:
      "AI-powered SEO content generation platform using Next.js and OpenAI API. Keyword-based workflows with optimized frontend performance.",
    tech: ["Next.js", "React", "OpenAI API", "Node.js", "Tailwind CSS"],
    liveLink: "https://your-actual-link.vercel.app",
    githubLink: "https://github.com/ojha27/seo-generator",
    hasCode: true,
  },
];

const professionalProjects = [
  {
    title: "PLM Application",
    description:
      "Enterprise product lifecycle management system with RBAC authentication, supplier workflows, and document management. Built at Tops Infosolutions.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
    liveLink: "#",
    hasCode: false, 
  },
  {
    title: "Fix It Today",
    description:
      "Service booking platform with dynamic booking workflows and React Query for efficient data fetching. Built at Tops Infosolutions.",
    tech: ["Next.js", "React Query", "Ant Design", "Node.js"],
    liveLink: "#",
    hasCode: false,
  },
  {
    title: "Goodeals",
    description:
      "Professional project built at Tops Infosolutions with scalable architecture and modern web technologies.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "#",
    hasCode: false,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0]">
            Featured <span className="text-[#64ffda]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#64ffda] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Personal Projects */}
        <div
          className={`mb-16 transition-all duration-700
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-[#64ffda]" size={20} />
            <h3 className="text-[#e2e8f0] text-xl font-semibold">
              Personal Projects
            </h3>
            <div className="flex-1 h-px bg-[#64ffda]/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-xl p-6
                  hover:border-[#64ffda]/60 transition-all duration-300"
              >
                <h3 className="text-[#e2e8f0] text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-[#64ffda]/40 text-[#64ffda] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2
                      border border-[#64ffda]/40 text-[#e2e8f0] text-sm rounded-lg
                      hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2
                      border border-[#64ffda] text-[#64ffda] text-sm rounded-lg
                      hover:bg-[#64ffda] hover:text-[#0a0a0a] transition-all duration-300"
                  >
                    <Code2 size={16} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div
          className={`transition-all duration-700 delay-200
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-[#64ffda]" size={20} />
            <h3 className="text-[#e2e8f0] text-xl font-semibold">
              Professional Projects
            </h3>
            <div className="flex-1 h-px bg-[#64ffda]/20"></div>
          </div>

          {/* Badge explanation */}
          <p className="text-[#8892b0] text-sm mb-6 flex items-center gap-2">
            <span className="px-2 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded text-[#64ffda] text-xs">
              Confidential
            </span>
            Source code is confidential — built during employment at Tops
            Infosolutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-xl p-6
                  hover:border-[#64ffda]/60 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Confidential Badge */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[#e2e8f0] text-lg font-bold">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded text-[#64ffda] text-xs shrink-0 ml-2">
                    Confidential
                  </span>
                </div>

                <p className="text-[#8892b0] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-[#64ffda]/40 text-[#64ffda] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
