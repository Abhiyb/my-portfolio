import React from "react";
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
   <section
  id="contact"
  className="scroll-mt-24 relative flex flex-col justify-center items-center h-screen px-6 bg-gradient-to-b from-[#0b0e13] via-[#0c1218] to-[#0b0e13] text-white overflow-hidden"
>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-[#00e0b8] font-semibold tracking-widest uppercase text-sm md:text-base mb-2">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Let's <span className="text-[#00e0b8]">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Open to full-time opportunities and exciting collaborations. Let's build something amazing together!
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-8">
          {/* Left: Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center p-5 bg-[#0f141a] rounded-2xl border border-transparent hover:border-[#00e0b8]/40 transition-all">
              <div className="p-3 bg-[#00e0b8]/10 rounded-xl mr-4">
                <Mail className="w-6 h-6 text-[#00e0b8]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a
                  href="mailto:abhiybdrive@gmail.com"
                  className="text-gray-400 hover:text-[#00e0b8] transition-colors text-sm md:text-base"
                >
                  abhiybdrive@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-5 bg-[#0f141a] rounded-2xl border border-transparent hover:border-[#f0a500]/40 transition-all">
              <div className="p-3 bg-[#f0a500]/10 rounded-xl mr-4">
                <Phone className="w-6 h-6 text-[#f0a500]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a
                  href="tel:+918105664856"
                  className="text-gray-400 hover:text-[#f0a500] transition-colors text-sm md:text-base"
                >
                  +91-8105664856
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center p-5 bg-[#0f141a] rounded-2xl border border-transparent hover:border-[#00e0b8]/40 transition-all">
              <div className="p-3 bg-[#00e0b8]/10 rounded-xl mr-4">
                <MapPin className="w-6 h-6 text-[#00e0b8]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-400 text-sm md:text-base">Hyderabad/Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Right: Collaborate Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#00e0b8] via-[#00bfff] to-[#f0a500] p-8 text-center flex flex-col justify-center shadow-lg h-full">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
              Ready to Collaborate?
            </h3>
            <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
              Looking for a passionate developer who can contribute from day one.
            </p>
            <a
              href="https://drive.google.com/file/d/1ohO7sqNa7RWhDG3yoBpZW1KlbFxsNr6i/view?usp=drivesdk"
              download
              className="inline-flex items-center gap-3 px-7 py-3 md:px-9 md:py-4 bg-white text-[#00bfff] rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-sm md:text-base"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5 md:gap-6 mb-6">
          <a
            href="https://github.com/Abhiyb/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 md:p-5 bg-[#0f141a] rounded-2xl border border-transparent hover:border-[#00e0b8]/40 transition-all text-center">
              <Github className="w-7 h-7 md:w-8 md:h-8 text-gray-400 group-hover:text-[#00e0b8] mx-auto mb-1 transition-colors" />
              <span className="text-sm md:text-base font-medium">Portfolio Code</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abhishekh03/"
            
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 md:p-5 bg-[#0f141a] rounded-2xl border border-transparent hover:border-[#00e0b8]/40 transition-all text-center">
              <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-gray-400 group-hover:text-[#00e0b8] mx-auto mb-1 transition-colors" />
              <span className="text-sm md:text-base font-medium">LinkedIn</span>
            </div>
          </a>

        </div>

        {/* Footer */}
        <div className="text-center border-t border-gray-800 pt-3">
          <p className="font-bold text-lg md:text-xl text-[#00e0b8] mb-1">Abhishekh</p>
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 • Always learning, always building
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
