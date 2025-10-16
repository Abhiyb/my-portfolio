import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import avatar from "../assets/Avatar.jpeg";

const Hero = () => {
  // helper function for smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 bg-gradient-to-br from-[#07110f] via-[#081b1a] to-[#0d1a18] text-white relative overflow-hidden pt-16 lg:pt-0" // Added pt-16 for mobile to clear Navbar
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,180,0.1),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,165,0,0.08),_transparent_70%)]" />

      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 border border-teal-400/40 rounded-full bg-teal-400/10 text-teal-400 font-medium">
            🚀 Open to Full-Time Opportunities
          </div>

          <div>
            <p className="text-orange-400 text-lg font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-6xl lg:text-7xl font-extrabold mb-2">
              <span className="bg-gradient-to-r from-white via-white to-teal-400 bg-clip-text text-transparent">
                Abhishekh
              </span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Engineering student with expertise in{" "}
            <span className="text-teal-400 font-semibold">MERN Stack</span> and{" "}
            <span className="text-teal-400 font-semibold">Spring Boot</span>.
            Passionate about building scalable solutions and solving complex
            problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-teal-500/60 text-white font-semibold rounded-full hover:bg-teal-500/10 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-8 justify-center lg:justify-start text-gray-400">
            <a
              href="https://github.com/Abhiyb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekh03/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:abhishekyb03@gmail.com"
              className="hover:text-teal-400 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:8105664856"
              className="hover:text-teal-400 transition"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-tr from-teal-400/20 to-orange-400/10 border border-teal-400/20 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,255,180,0.05)]">
            <img
              src={avatar}
              alt="Abhishekh Avatar"
              className="w-full h-full object-cover object-top rounded-3xl opacity-95 hover:scale-105 transition-all duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-orange-400 text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-all">
              Available Now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;