import React from "react";
import { Github, ArrowRight } from "lucide-react";
import project1 from "../assets/investment.png";
import project2 from "../assets/connect.png";
import project3 from "../assets/Ccredify.png";

const Projects = () => {
  const projects = [
    {
      title: "Investment Portfolio Tracker",
      description:
        "A comprehensive web platform that helps users manage investments across stocks, mutual funds, and crypto with real-time insights and analytics.",
      image: project1,
      tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      highlights: [
        "Real-time portfolio visualization",
        "Multi-asset support (stocks, mutual funds, crypto)",
        "Secure authentication & performance tracking",
      ],
      demoUrl: "https://investo-frontend.netlify.app/register",
      githubUrl: "#",
      accent: "teal",
    },
    {
      title: "Connect – College Media Platform",
      description:
        "A social network built for college students, departments, and clubs to communicate, collaborate, and share updates in real-time.",
      image: project2,
      tags: ["MongoDB", "Express", "React", "Node.js"],
      highlights: [
        "Interactive student dashboards",
        "Real-time event and post updates",
        "Role-based department management",
      ],
      demoUrl: "https://connect-lemon-delta.vercel.app/auth?type=student",
      githubUrl: "https://github.com/Abhiyb/Connect",
      accent: "amber",
    },
    {
      title: "Family Credit Card Circle",
      description:
        "A secure fintech microservice-based platform enabling families to collaboratively manage credit card usage and expenses.",
      image: project3,
      tags: ["Spring Boot", "MySQL", "React", "Tailwind CSS"],
      highlights: [
        "Microservice architecture for scalability",
        "Access control with Spring Security",
        "Transaction and limit management",
      ],
      demoUrl: "#",
      githubUrl: "#",
      accent: "teal",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 relative bg-[#0b0f10] text-white overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f10] via-[#0f1618] to-[#0b0f10]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 px-6 py-2 bg-amber-400/10 rounded-full border border-amber-400/30">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of my best projects — combining functionality, performance, and design excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image Section */}
              <div
                className={`group relative overflow-hidden rounded-2xl border-2 shadow-lg ${
                  project.accent === "teal"
                    ? "border-teal-400/30 hover:border-teal-400/60"
                    : "border-amber-400/30 hover:border-amber-400/60"
                } transition-all duration-500`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[380px] object-cover object-left rounded-2xl transition-transform duration-700 group-hover:scale-105"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="space-y-6 lg:text-left lg:pr-16">
                <div>
                  <span
                    className={`text-sm uppercase tracking-widest font-bold ${
                      project.accent === "teal" ? "text-teal-400" : "text-amber-400"
                    }`}
                  >
                    PROJECT {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300">
                      <span
                        className={`mt-2 w-2 h-2 rounded-full ${
                          project.accent === "teal" ? "bg-teal-400" : "bg-amber-400"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-2 justify-start">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border-2 ${
                        project.accent === "teal"
                          ? "border-teal-400/40 text-teal-400 bg-teal-400/10"
                          : "border-amber-400/40 text-amber-400 bg-amber-400/10"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 justify-start">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 ${
                      project.accent === "teal"
                        ? "bg-teal-500 text-white hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
                        : "bg-amber-500 text-black hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                    }`}
                  >
                    View Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-white/5 hover:border-gray-400 transition-all hover:-translate-y-1"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
