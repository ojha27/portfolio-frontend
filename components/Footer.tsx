"use client";

import { GitBranch, Link, Mail } from "lucide-react";

const quickLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#64ffda]/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#64ffda] text-xl font-bold mb-3">
              Amrita Ojha
            </h3>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              MERN Stack Developer crafting scalable, performant web
              applications with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-[#e2e8f0] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScroll(link)}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#e2e8f0] font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/ojha27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#112240] border border-[#64ffda]/20 rounded-lg text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://linkedin.com/in/amrita-ojha1997"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#112240] border border-[#64ffda]/20 rounded-lg text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                <Link size={18} />
              </a>
              <a
                href="mailto:amritaojha914@gmail.com"
                className="p-3 bg-[#112240] border border-[#64ffda]/20 rounded-lg text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#64ffda]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#8892b0] text-sm">
            © 2026 Amrita Ojha. All rights reserved.
          </p>
          <p className="text-[#8892b0] text-sm">
            Designed & Built with ✨ by Amrita
          </p>
        </div>
      </div>
    </footer>
  );
}
