import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

function Experience({ experienceRef, experienceVisible }) {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Intern – Arduino & IoT",
      company: "Don Bosco Italian Institute",
      duration: "1 month",
      date: "22/8/2022",
      location: "Egypt",
      description: [
        "Completed a hands-on internship focused on Arduino programming and Internet of Things (IoT) projects.",
        "Built and programmed automation and sensor-based projects.",
        "Built and implemented sensor-based and automation projects, connecting hardware components with software control systems.",
        "Developed strong understanding of embedded systems and hardware–software integration.",
        "Basic C/C++ programming for embedded systems - IoT platforms and basic cloud integration ."
      ],
    },
    {
      id: 2,
      type: "work",
      title: "Intern – Analog IC Design",
      company: "Mentronix Egypt",
      duration: "1 month",
      date: "August 2024",
      location: "Egypt",
      description: [
        "Gained hands-on experience in analog integrated circuit design using industry-standard tools.",
        "Learned layout design using L-Edit, ensuring LVS (Layout vs. Schematic) and DRC (Design Rule Check) compliance.",
        "Designed and simulated analog building blocks (current mirrors, amplifiers, etc.).",
        "Learned layout design using L-Edit while ensuring LVS and DRC compliance.",
        "Tanner Tools (S-Edit, T-Spice, L-Edit) - Simulation and verification tools for analog ICs - Circuit analysis and measurement platforms",
      ],
    },
    {
      id: 3,
      type: "education",
      title: "UI/UX Design Diploma",
      company: "Route IT Training Center",
      duration: "Diploma",
      date: "30/1/2025",
      location: "Egypt",
      description: [
        "Completed a comprehensive, project-based program covering the full UI/UX design process from research to high-fidelity prototyping.",
        "Developed a strong design mindset focused on usability, accessibility, and human-centered design principles.",
        "Figma (primary design tool) - Adobe XD - Miro for brainstorming & user research maps",
        "Conducting user research, surveys, interviews, and competitive analysis",
        "Creating personas, user stories, and user journey maps",
        "Building information architecture and defining clear navigation structures",
        "Designing design systems, style guides, grids, typography, and components",
        "Designing for multi-platform experiences: web, mobile apps (iOS & Android)",
      ],
    },
    {
      id: 4,
      type: "education",
      title: "Front-End Development Diploma",
      company: "Route Academy",
      duration: "Diploma",
      date: "31/12/2025",
      location: "Egypt",
      description: [
        "Completed an intensive, hands-on front-end development program covering modern web technologies and UI implementation.",
        "Built responsive, modern web interfaces and learned front-end best practices.",
        "HTML5, CSS3, JavaScript (ES6+) React.js (Components, Props, State Management, Hooks, Routing)",
        "Git & GitHub for version control",
        "Bootstrap & Tailwind CSS for UI styling",
        "APIs & JSON integration",
        "NPM & Node.js basics for web tooling",
      ],
    },
    {
      id: 5,
      type: "work",
      title: "Sr-Coding Instructor",
      company: "Jupiter School",
      duration: "6 months (currently)",
      date: "2025",
      location: "Egypt",
      description: [
        "Delivered hands-on programming sessions for students, helping them build strong logical and computational thinking skills.",
        "Designed structured learning paths tailored to different age groups, ensuring smooth understanding of core programming concepts.",
        "Created engaging learning materials to simplify complex technical concepts.",
        "Python basics (variables, loops, conditions, functions).",
        "HTML & CSS for simple web pages - JavaScript basics for interactive content",
        "Creating interactive lessons, challenges, and project-based learning activities",
        "Monitoring student progress and adapting teaching methods for different learning",
      ],
    },
     {
      id: 6,
      type: "work",
      title: "Operation Engineer",
      company: "Enova by Veolia",
      duration: "1 month (currently)",
      date: "11/12/2025",
      location: "Egypt",
      description: [
        "Provided technical support and operational management for light current systems in various branches.",
        "Monitored and ensured optimal performance of electrical, mechanical, and control systems in the facilities.",
        "Conducted regular maintenance, troubleshooting, and repairs for critical systems, including security, access control, and audio systems.",
        "Collaborated with cross-functional teams to ensure seamless system integration and operational efficiency.",
        "Managed preventive maintenance schedules and ensured compliance with safety and quality standards.",
        "Coordinated with external contractors and vendors to ensure smooth project execution and equipment installation.",
        "Generated detailed reports on system performance, issues, and recommendations for improvements.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>
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
        ref={experienceRef}
      >
        {/* Professional Experience Section */}
        <div
          className={`mb-20 transition-all duration-300 ${
            experienceVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">
              Career Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional{" "}
              <span className="text-cyan-400">Experience</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-300 ${
                    experienceVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform md:-translate-x-1/2 border-4 border-slate-950 shadow-lg shadow-cyan-500/50 z-10"></div>

                    {/* Content */}
                    <div
                      className={`flex-1 ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 text-cyan-400">
                              {exp.type === "education" ? (
                                <GraduationCap size={18} />
                              ) : (
                                <Briefcase size={18} />
                              )}
                              <span className="text-sm font-medium">
                                {exp.duration}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-400 font-medium mt-1">
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {exp.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className={`space-y-2`}>
                          {exp.description.map((item, idx) => (
                            <li
                              key={idx}
                              className={`text-gray-400 text-sm flex items-start gap-2`}
                            >
                              <span className="text-cyan-400 mt-1.5 flex-shrink-0">
                                •
                              </span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
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

export default Experience;
