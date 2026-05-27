"use client";

import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#64ffda] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#64ffda] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`text-center transition-all duration-1000 transform
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/pic2.jpeg"
              alt="Amrita Ojha"
              fill
              className="rounded-full object-cover border-4 border-[#64ffda] shadow-lg shadow-[#64ffda]/25"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#e2e8f0]">
          Hi, I&apos;m <span className="text-[#64ffda]">Amrita Ojha</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#8892b0] mb-4">
          MERN Stack Developer | 2.5 Years Experience
        </p>

        <p className="text-lg text-[#8892b0] max-w-2xl mx-auto mb-10">
          I turn ideas into{" "}
          <span className="text-[#64ffda]">scalable, production-ready</span>{" "}
          full-stack applications — from REST APIs to responsive UIs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => handleScroll("projects")}
            className="px-8 py-3 bg-[#64ffda] text-[#0a0a0a] font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/25 transition-all duration-300"
          >
            View My Work
          </button>

          <a
            href="/resume/Amrita_Ojha_MERN_Stack_Developer_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded-lg hover:bg-[#64ffda] hover:text-[#0a0a0a] transition-all duration-300 text-center"
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-col items-center mt-4 animate-bounce">
          <button
            onClick={() => handleScroll("about")}
            className="flex flex-col items-center gap-2 text-[#64ffda] hover:text-[#e2e8f0] transition-colors cursor-pointer bg-transparent border-none outline-none"
          >
            <span className="text-sm font-medium">Scroll down</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
