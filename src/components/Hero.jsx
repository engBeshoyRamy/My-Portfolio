import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Send,
  Download,
} from "lucide-react";
import cvFile from "../assets/Beshoy-Ramy-CV.pdf";
import profileImage from "../assets/profile.jpg";

function Hero({ heroRef, heroVisible, scrollToSection }) {
  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/engBeshoyRamy",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/beshoy-ramy-851911338/",
      color: "from-pink-500 to-purple-400",
    },
    {
      icon: Mail,
      link: "mailto:hello@example.com",
      color: "from-cyan-500 to-blue-400",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950"
    >
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0">
        {/* Glowing Orbs - Reduced */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>

        {/* Grid Pattern - Lighter */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
        ref={heroRef}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 transition-all duration-300 ${
              heroVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Small Title with Emoji */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl animate-wave-smooth">👋</span>
              <span className="text-cyan-400 text-sm uppercase tracking-[0.2em] font-light">
                HELLO, I'M
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05]">
                <span className="text-white block animate-slide-up">
                  Front-End
                </span>
                <span className="block animate-slide-up-delay relative group">
                  <span className="text-3d-gradient animate-gradient-shift hover:animate-glow-pulse cursor-default">
                    Engineer
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed max-w-xl animate-fade-in-up delay-400">
              Computer & Communication Engineering graduate. I build modern,
              responsive, and user-focused web interfaces with a strong
              background in UI/UX..
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up delay-600">
              {/* View Projects Button - Filled */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center space-x-2 text-white font-medium text-sm">
                  <span>View Projects</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Download CV Button - Outlined */}
              <a
                href={cvFile}
                download="Beshoy_Ramy_CV.pdf"
                className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 inline-flex"
              >
                <span className="relative z-10 flex items-center space-x-2 text-white group-hover:text-white font-medium text-sm transition-colors duration-300">
                  <span>Download CV</span>
                  <Download
                    size={18}
                    className="group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              {/* Social Icons */}
              <div className="flex space-x-3 ml-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${social.color} p-[2px] transition-all duration-300 hover:scale-110 hover:rotate-12`}
                      >
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                          <Icon
                            size={20}
                            className="text-white transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Image with Decorative Elements */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              heroVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Decorative Background Circles - Simplified */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Circle - Removed animation */}
              <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10"></div>
              {/* Middle Circle - Removed animation */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/10"></div>
              {/* Inner Glow */}
              <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
            </div>

            {/* Horizontal Lines - Removed */}

            {/* Profile Image Container */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative group">
                {/* Image Wrapper with Border */}
                <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <img
                    src={profileImage}
                    alt="Beshoy Ramy - Front-End Developer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  className="w-full h-full object-cover transform
                  group-hover:scale-110 transition-transform duration-700" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-400/50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-400/50"></div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full shadow-xl animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium uppercase tracking-wider">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* 3D Gradient Text Effect */
        .text-3d-gradient {
          background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #22d3ee 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }

        /* Gradient Shift Animation */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 50% 50%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 100%; }
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }

        /* Glow Pulse on Hover */
        @keyframes glow-pulse {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.02);
          }
        }

        .hover\:animate-glow-pulse:hover {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        /* Gradient Animation */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        /* Slide Up Animation */
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        /* Wave Animation */
        @keyframes wave-smooth {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
        }

        .animate-wave-smooth {
          animation: wave-smooth 2.5s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }

        /* Fade In Up */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        /* Float Animation */
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Pulse Slow */
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

        /* Spin Slow */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        /* Pulse Line */
        @keyframes pulse-line {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-line {
          animation: pulse-line 3s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .animate-spin-slow,
          .animate-spin-slow-reverse {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
