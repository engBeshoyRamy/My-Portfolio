import React from "react";
import { Send } from "lucide-react";

function Contact({
  contactRef,
  contactVisible,
  formData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <section
      id="contact"
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={contactRef}
      >
        <div
          className={`text-center mb-16 transition-all duration-300 ${
            contactVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business
            grow.
          </p>
        </div>

        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            contactVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 text-white"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="w-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="6"
            className="w-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none hover:border-cyan-500/50 text-white"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2 text-lg font-semibold group"
          >
            <span>Send Message</span>
            <Send
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
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

export default Contact;
