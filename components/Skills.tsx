"use client";

import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    icon: "</>",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Context API",
      "Axios",
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JWT",
      "OAuth",
      "RBAC",
    ],
  },
  {
    category: "Database & Tools",
    icon: "🗄",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Git",
      "Postman",
      "Vercel",
      "Jira",
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0]">
            My <span className="text-[#64ffda]">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-[#64ffda] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`bg-[#112240] border border-[#64ffda]/20 rounded-xl p-8
                hover:border-[#64ffda]/60 hover:scale-105 transition-all duration-300
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#64ffda] text-2xl">{category.icon}</span>
                <h3 className="text-[#e2e8f0] text-xl font-bold">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 border border-[#64ffda]/40 text-[#64ffda] 
                      text-sm rounded-full hover:bg-[#64ffda]/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
