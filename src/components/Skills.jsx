import React from "react";
import { Code, Database, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "teal",
      skills: ["C++", "Java", "JavaScript", "SQL"],
    },
    {
      icon: Server,
      title: "Web Development",
      color: "amber",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "teal",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      color: "amber",
      skills: ["Docker", "Kubernetes", "Jenkins", "Git", "CI/CD Pipelines","ArgoCD","JFrog Artifactory"],
    },
  ];

  const coreSkills = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    
  ];

 const devTools = [
  "IntelliJ IDEA",
  "VS Code",
  "Postman",
  "Swagger",
  "MySQL Workbench",

  "GitHub"
];

  

  return (
    <section
      id="skills"
      className="py-32 px-6 relative bg-[#0b0f10] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-teal-400 font-bold tracking-widest uppercase text-sm mb-4 px-6 py-2 bg-teal-400/10 rounded-full border border-teal-400/30">
            Technical Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Skills & <span className="text-amber-400">Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications and
            delivering robust digital experiences.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#111418] border border-gray-700/40 rounded-2xl hover:border-teal-400/40 hover:shadow-[0_0_25px_rgba(0,255,180,0.08)] transition-all hover:-translate-y-1"
            >
              <div
                className={`p-4 rounded-2xl w-fit mb-6 border ${
                  category.color === "teal"
                    ? "bg-teal-400/10 border-teal-400/30"
                    : "bg-amber-400/10 border-amber-400/30"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 ${
                    category.color === "teal"
                      ? "text-teal-400"
                      : "text-amber-400"
                  }`}
                />
              </div>

              <h3
                className={`text-xl font-bold mb-4 ${
                  category.color === "teal" ? "text-teal-300" : "text-amber-300"
                }`}
              >
                {category.title}
              </h3>

              <ul className="space-y-3 text-gray-300">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        category.color === "teal"
                          ? "bg-teal-400"
                          : "bg-amber-400"
                      }`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core CS Concepts */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-3 text-white">
            Core Computer Science
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Strong foundation in fundamental concepts
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-[#111418] border border-teal-400/30 rounded-full font-semibold text-gray-300 hover:text-teal-300 hover:border-teal-400 transition-all hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="p-10 bg-[#111418] border border-amber-400/30 rounded-2xl shadow-[0_0_30px_rgba(255,193,7,0.05)]">
          <h4 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
            <div className="w-1.5 h-10 bg-gradient-to-b from-teal-400 to-amber-400 rounded-full" />
            Development Tools & Platforms
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {devTools.map((tool, idx) => (
              <div
                key={idx}
                className="px-5 py-3 bg-[#0f1214] border border-gray-700/40 rounded-xl text-center text-gray-300 text-sm font-medium hover:text-amber-300 hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(255,193,7,0.08)] transition-all hover:-translate-y-1"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
