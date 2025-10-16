import React from "react";
import { GraduationCap, Briefcase, Trophy, Target, Award, Code2 } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-32 px-6 relative bg-[#0b0f10] text-white overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 px-6 py-2 bg-amber-400/10 rounded-full border border-amber-400/30">
            About Me
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Crafting Digital <span className="text-teal-400">Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engineering student with a passion for creating impactful web applications
            and solving real-world problems through code.
          </p>
        </div>

        {/* Education + Experience */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-teal-400/10 rounded-2xl border border-teal-400/30">
                <GraduationCap className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold">Education Journey</h3>
            </div>

            <div className="space-y-5">
              {/* College */}
              <div className="p-6 bg-[#111418] border border-teal-500/40 rounded-2xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(45,212,191,0.2)]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-xl text-white">
                      The National Institute of Engineering
                    </h4>
                    <p className="text-teal-400 font-bold mt-1">
                      Bachelor of Engineering - Information Science
                    </p>
                  </div>
                  <span className="px-4 py-1 bg-teal-400/20 text-teal-400 text-sm font-bold rounded-xl border border-teal-400/40">
                    7.8 CGPA
                  </span>
                </div>
                <p className="text-gray-400">Mysuru, Karnataka • 2021 - 2025</p>
              </div>

              {/* PU College */}
              <div className="p-6 bg-[#111418] border border-amber-500/40 rounded-2xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-white">Sarvajna PU College</h4>
                    <p className="text-gray-400 mt-1">Class XII (PCMB) • 2019 - 2021</p>
                  </div>
                  <span className="px-4 py-1 bg-amber-400/20 text-amber-400 text-sm font-bold rounded-xl border border-amber-400/40">
                    89%
                  </span>
                </div>
              </div>

              {/* High School */}
              <div className="p-6 bg-[#111418] border border-amber-500/40 rounded-2xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-white">Govt High School</h4>
                    <p className="text-gray-400 mt-1">Class X (SSLC) • 2016 - 2019</p>
                  </div>
                  <span className="px-4 py-1 bg-amber-400/20 text-amber-400 text-sm font-bold rounded-xl border border-amber-400/40">
                    91.04%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-amber-400/10 rounded-2xl border border-amber-400/30">
                <Briefcase className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-3xl font-bold">Professional Experience</h3>
            </div>

            <div className="p-8 bg-[#111418] border border-amber-400/40 rounded-2xl hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="font-bold text-2xl mb-2 text-white">Graduate Intern</h4>
                  <p className="text-amber-400 font-bold text-lg">Zeta (FinTech)</p>
                </div>
                <span className="px-4 py-1 bg-amber-400/20 text-amber-400 text-sm font-bold rounded-xl border border-amber-400/40">
                  APR - JUL 2025
                </span>
              </div>

              <ul className="list-disc ml-6 space-y-3 text-gray-300">
                <li>
                  Full-stack development using{" "}
                  <span className="text-teal-400 font-semibold">Spring Boot</span> and{" "}
                  <span className="text-teal-400 font-semibold">Vue.js</span>.
                </li>
                <li>
                  Worked with Ganymede (Database), Heracles (Traffic Management),
                  Cipher (IAM), and Atropos (Event Bus).
                </li>
                <li>
                  Contributed to building secure and scalable financial solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-4 bg-teal-400/10 rounded-2xl border border-teal-400/30">
              <Trophy className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-3xl font-bold">Achievements & Recognition</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <div className="p-8 bg-[#111418] border border-teal-400/40 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] transition-all group">
              <div className="p-4 bg-teal-400/10 rounded-2xl w-fit mb-6 border border-teal-400/30 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-teal-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">
                Technical Club Leader
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Led college technical clubs, inspiring peers toward growth in
                technology and innovation.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="p-8 bg-[#111418] border border-amber-400/40 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all group">
              <div className="p-4 bg-amber-400/10 rounded-2xl w-fit mb-6 border border-amber-400/30 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-amber-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">
                2nd Place – NIE Challenge 2024
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Recognized for exceptional problem-solving skills and coding
                proficiency in competitive programming.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="p-8 bg-[#111418] border border-teal-400/40 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] transition-all group">
              <div className="p-4 bg-teal-400/10 rounded-2xl w-fit mb-6 border border-teal-400/30 group-hover:scale-110 transition-transform">
                <Code2 className="w-10 h-10 text-teal-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">
                300+ DSA Problems
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Strengthened algorithmic thinking and coding depth by solving
                over 300 problems on GeeksforGeeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
