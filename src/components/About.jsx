import React from "react";
import { ArrowRight } from "lucide-react";
import { stats } from "../data/portfolioData";
import abotImage from "../assets/aabout.jpg";

function About({ aboutRef, aboutVisible, scrollToSection }) {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={aboutRef}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-300 ${
              aboutVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <img
                src={abotImage}
                alt="About"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              aboutVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="text-cyan-400 text-sm uppercase tracking-wider">
              About Me
            </div>
            <h2 className="text-4xl font-bold hover:text-cyan-400 transition-colors duration-300">
              I am available for{" "}
              <span className="text-cyan-400">Web development</span> Projects
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate web designer and developer with over 2 years of
              experience building and enhancing a wide range of web
              applications. Skilled in responsive, and user-focused interfaces,
              with a strong understanding of UI/UX principles. I also have solid
              knowledge of Python and data science using various tools and
              libraries, including Power BI. Passionate about delivering
              impactful digital solutions, and leading teams to create
              high-quality, meaningful tech experiences.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-3xl font-bold text-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center space-x-2 group"
            >
              <span>Get In Touch</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow 4s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}

export default About;
