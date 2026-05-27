"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "Tops Infosolutions",
    duration: "Jan 2024 – Present",
    location: "Ahmedabad, Gujarat",
    points: [
        "Architected 20+ production-grade REST APIs using Node.js, Express.js and MongoDB",
        "Improved API response time by 30% through MongoDB indexing and query optimization",
        "Implemented JWT authentication and Role-Based Access Control (RBAC)",
        "Resolved 40+ production-level issues reducing application downtime significantly",
        "Integrated payment gateways, notification systems and email service APIs",
      ],
  },
  {
    role: "MERN Stack Intern",
    company: "Tops Infosolutions",
    duration: "Aug 2023 – Dec 2023",
    location: "Ahmedabad, Gujarat",
    points: [
        "Built responsive frontend across 10+ modules using React.js, HTML5 and CSS3",
        "Developed REST APIs with Node.js and Express.js for CRUD operations",
        "Integrated multiple third-party APIs improving frontend-backend data flow",
        "Optimized React rendering by reducing unnecessary component re-renders",
      ],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-4 md:px-8">
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
            My <span className="text-[#64ffda]">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-[#64ffda] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#64ffda]/20"></div>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 transition-all duration-700
                ${index % 2 === 0 ? "justify-start" : "justify-end"}
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-full md:w-5/12 bg-[#112240] border border-[#64ffda]/20 rounded-xl p-6 hover:border-[#64ffda]/60 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase
                    className="text-[#64ffda] mt-1 shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="text-[#e2e8f0] text-lg font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-[#64ffda] font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#8892b0] text-sm mb-4">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-[#8892b0] text-sm"
                    >
                      <span className="text-[#64ffda] mt-1.5 shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#64ffda] rounded-full border-4 border-[#0a0a0a]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
