"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "2.5", label: "Years Experience" },
  { number: "20+", label: "APIs Built" },
  { number: "40+", label: "Bugs Resolved" },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#e2e8f0]">
            About <span className="text-[#64ffda]">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#64ffda] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* About Content */}
        <div
          className={`transition-all duration-700 delay-200
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          {/* Bio */}
          <p className="text-[#8892b0] text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            I&apos;m a passionate full-stack developer specializing in MERN
            stack. With 2.5 years of hands-on experience, I&apos;ve worked on
            enterprise applications and scalable solutions. I love solving
            complex problems, writing clean code, and building user-centric
            applications that make a difference.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#112240] border border-[#64ffda]/20 rounded-xl p-8 text-center hover:border-[#64ffda]/60 hover:scale-105 transition-all duration-300"
              >
                <p className="text-4xl font-bold text-[#64ffda] mb-2">
                  {stat.number}
                </p>
                <p className="text-[#8892b0] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
