"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Link, GitBranch, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);

      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 md:px-8">
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
            Let&apos;s <span className="text-[#64ffda]">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-[#64ffda] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#8892b0] mt-6 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out. I&apos;d love to hear from you!
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-[#112240] border border-[#64ffda]/20 rounded-xl p-5 hover:border-[#64ffda]/60 transition-all duration-300">
              <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                <Mail className="text-[#64ffda]" size={22} />
              </div>
              <div>
                <p className="text-[#8892b0] text-sm">Email</p>
                <a
                  href="mailto:amritaojha914@gmail.com"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                >
                  amritaojha641@gmail.com
                </a>
              </div>
            </div>

            <div>
              <p className="text-[#8892b0] mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/amrita-ojha1997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#112240] border border-[#64ffda]/20 rounded-lg text-[#64ffda] hover:bg-[#64ffda]/10 hover:border-[#64ffda]/60 transition-all duration-300"
                >
                  <Link size={22} />
                </a>

                <a
                  href="https://github.com/ojha27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#112240] border border-[#64ffda]/20 rounded-lg text-[#64ffda] hover:bg-[#64ffda]/10 hover:border-[#64ffda]/60 transition-all duration-300"
                >
                  <GitBranch size={22} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[#8892b0] text-sm mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-[#112240] border border-[#64ffda]/20 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8892b0] text-sm mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full bg-[#112240] border border-[#64ffda]/20 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors"
              />
            </div>

            <div>
              <label className="text-[#8892b0] text-sm mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={5}
                className="w-full bg-[#112240] border border-[#64ffda]/20 rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#64ffda] text-[#0a0a0a] font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/25 transition-all duration-300 disabled:opacity-50"
            >
              <Send size={18} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-[#64ffda] text-center text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
