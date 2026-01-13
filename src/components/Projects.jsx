import React, { useState } from "react";
import { ExternalLink, X, Github } from "lucide-react";
import project1Img from "../assets/projects/project1.jpg";
import project2Img from "../assets/projects/project2.jpg";
import project3Img from "../assets/projects/project3.jpg";
import project4Img from "../assets/projects/project4.jpg";
import project5Img from "../assets/projects/project5.jpg";
import project6Img from "../assets/projects/project6.jpg";
import project7Img from "../assets/projects/project7.jpg";
import project8Img from "../assets/projects/project8.jpg";
import project9Img from "../assets/projects/project9.jpg";
import project10Img from "../assets/projects/project10.jpg";
import project11Img from "../assets/projects/project11.jpg";

function Projects({ projectsRef, projectsVisible }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Multi-Vendor E-Commerce Marketplace",
      category: "Full-stack Web Application",
      filter: "Dashboard",
      image: project9Img,
      shortDesc:
        "A full-featured e-commerce platform enabling multiple vendors to create their own stores, manage products & inventory, while providing customers with a seamless shopping experience.",
      fullDesc:
        "A comprehensive e-commerce solution that empowers multiple vendors to run their businesses on a unified platform. Vendors can register, create stores, manage inventory, and track sales while customers enjoy a seamless multi-vendor shopping experience.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React.js (v18+)",
        "Lucide React",
        "React Router DOM (v6)",
        "Context API",
        "Local Storage (prototype phase)",
        "Tailwind CSS for modern, responsive design",
        "Font libraries for icons",
        "MongoDB for production",
        "jQuery (likely for interactive elements)",
      ],
      features: [
        "Multi-role registration (Customer, Vendor, Admin)",
        "Email validation",
        "Password encryption (bcrypt simulation)",
        "Unique email check",
        "Vendor store creation during registration",
        "Auto-login after registration",
        "Grid layout display (responsive).",
        "Backend integration (Node.js + Express + MongoDB)",
        "Real payment processing (Stripe)",
        "PWA (Progressive Web App)",
        "Advanced search (Elasticsearch)",
        "Wishlist functionality",
      ],
      liveUrl: "https://vendomarket.netlify.app/",
      githubUrl: "https://github.com/engBeshoyRamy/Vendo-Market",
    },
    {
      id: 2,
      title: "FitTrack Pro - Fitness Workout Planner & Tracker",
      category: "Web Development",
      filter: "Applications",
      image: project11Img,
      shortDesc:
        "A powerful fitness workout planner and tracker that helps users build custom workouts, track progress, log exercises in real-time, and visualize their fitness journey with detailed analytics.",
      fullDesc:
        "FitTrack Pro is a full-featured fitness workout planner and tracking application designed for fitness enthusiasts of all levels. It allows users to create personalized workout plans, follow guided active workouts with timers, log performance, track body measurements, set goals, and analyze progress through interactive charts and statistics.",
      technologies: [
        "React.js (18+)",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Context API (State Management)",
        "Window Storage API",
        "Recharts (Data Visualization)",
        "Lucide React (Icons)",
        "Framer Motion (Animations)",
        "Custom Hooks",
        "Web Audio API",
        "Responsive Design",
      ],
      features: [
        "Workout Builder - Create custom workout plans with drag-and-drop exercises, sets, reps, weights, and rest times.",
        "Pre-built Exercise Library - 50+ exercises categorized by muscle groups with instructions and animated visuals.",
        "Active Workout Mode - Live workout execution with timers, rest countdowns, sound alerts, and set tracking.",
        "Workout Logging - Log completed workouts with duration, volume, calories burned, notes, and ratings.",
        "Progress Tracking - Track body measurements, workout history, volume progression, and personal records (PRs).",
        "Analytics Dashboard - Weekly and monthly stats with charts for volume, frequency, muscle distribution, and trends.",
        "Goals & Achievements - Set fitness goals, track progress visually, unlock achievement badges, and celebrate milestones.",
        "Personal Records Tracker - Automatic detection and tracking of PRs for each exercise.",
        "Calendar Workout History - View workouts in calendar and list views with filtering options.",
        "Exercise Management - Search, filter, favorite, and add custom exercises.",
        "Dark Mode Support - Seamless light and dark theme switching across the app.",
        "Toast Notifications - Real-time feedback for actions such as saves, updates, and completions.",
        "Confetti & Animations - Visual celebrations for achievements and completed goals.",
        "Persistent Storage - All data stored and retrieved using window.storage API with error handling.",
        "Responsive Navigation - Optimized experience for mobile, tablet, and desktop devices.",
        "Form Validation - Client-side validation with clear error messages.",
        "Loading States & Skeletons - Smooth loading experience across all pages.",
      ],
      liveUrl: "https://fitness-trackersystem.netlify.app/",
      githubUrl: "https://github.com/engBeshoyRamy/Fitness-Tracker",
    },
    {
      id: 3,
      title: "Daniels - Portfolio",
      category: "Web Development",
      filter: "Portfolio",
      image: project1Img,
      shortDesc:
        "A responsive and modern personal portfolio website showcasing the work and services of Beshoy Ramy, a UI/UX Designer and Web Developer.",
      fullDesc:
        "A single-page portfolio website with smooth navigation, showcasing services, filterable project gallery, testimonials, team profiles, and contact information. Built with modern web design principles for optimal user experience.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap (responsive framework)",
        "Font libraries for icons",
        "jQuery (likely for interactive elements)",
      ],
      features: [
        "Responsive Design - Fully adaptive layout for all device sizes.",
        "Single Page Application - Smooth scrolling navigation between sections.",
        "Portfolio Gallery - Filterable portfolio items (All, Brand, Design, Graphic categories).",
        "Services Section - Showcase of 6 key services (Web Design, Branding, Development, Creative Design, Fully Responsive, Retina Ready).",
        "About Section - Personal introduction with professional background.",
        "Testimonials Carousel - Client reviews and feedback.",
        "Statistics Counter - Dynamic display of achievements (Happy Customers, Complete Projects, Lines of Code, Files Downloaded).",
        "Team Showcase - Team member profiles with roles.",
        "Modern UI/UX - Clean interface with professional typography and imagery.",
        "Interactive Navigation - Toggle-able mobile menu for smaller screens.",
      ],
      liveUrl: "https://engbeshoyramy.github.io/Daniels-project-/",
      githubUrl: "https://github.com/engBeshoyRamy/Daniels-project-",
    },
    {
      id: 4,
      title: "Smart Login System Dashboard",
      category: "Web Application / Authentication System",
      filter: "Dashboard",
      image: project2Img,
      shortDesc:
        "A secure authentication system with login and registration functionality, featuring modern UI design and user account management.",
      fullDesc:
        "A comprehensive login and authentication dashboard with user registration, secure login, password recovery, and social media authentication options. Features a modern, user-friendly interface with security emphasis.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap (responsive framework)",
        "LocalStorage",
        "Form Validation",
      ],
      features: [
        "User Authentication - Secure login system with email and password",
        "Registration System - Account creation functionality",
        "Remember Me - Option to save login credentials",
        "Password Recovery - Forgot password functionality",
        "Social Login Integration - Multiple social media login options",
        "Responsive Design - Mobile-friendly layout",
        "Security Features - Encrypted and secure data handling",
        "Form Validation - Client-side input validation",
        "Clean UI/UX - Modern, intuitive interface design",
      ],
      liveUrl: "https://engbeshoyramy.github.io/Smart-Login-System-Dashboard/",
      githubUrl:
        "https://github.com/engBeshoyRamy/Smart-Login-System-Dashboard",
    },
    {
      id: 5,
      title: "Modern Todo List Application",
      category: "Web Application / Productivity Tool",
      filter: "Applications",
      image: project3Img,
      shortDesc:
        "A modern and interactive todo list application built with HTML, CSS, and JavaScript, featuring full CRUD operations for task management.",
      fullDesc:
        "A feature-rich todo list application allowing users to create, read, update, and delete tasks with a clean, modern interface. Includes local storage for data persistence and an intuitive user experience.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Font Awesome (Web Fonts)",
        "Local Storage API",
      ],
      features: [
        "CRUD Operations - Create, Read, Update, and Delete tasks",
        "Local Storage - Tasks persist across browser sessions",
        "Task Management - Add, edit, and remove tasks easily",
        "Modern UI Design - Clean and intuitive interface",
        "Responsive Layout - Works seamlessly on all devices",
        "Task Status - Mark tasks as complete/incomplete",
        "Data Persistence - All tasks saved locally in the browser",
        "Icon Integration - Font Awesome icons for enhanced UI",
      ],
      liveUrl: "https://engbeshoyramy.github.io/Modern-Todo-List-Application-/",
      githubUrl:
        "https://github.com/engBeshoyRamy/Modern-Todo-List-Application-",
    },
    {
      id: 6,
      title: "Quiz Application",
      category: "Web Application / Educational Tool",
      filter: "Applications",
      image: project4Img,
      shortDesc:
        "An interactive quiz application with a modern glassmorphic design, built using HTML, CSS, and JavaScript for engaging learning experiences.",
      fullDesc:
        "A feature-rich quiz application with dynamic question display, answer validation, and score tracking. Features a stunning glassmorphic UI design for an immersive user experience.",
      technologies: [
        "HTML5",
        "CSS3 (Glassmorphism design)",
        "JavaScript (Vanilla JS)",
        "Bootstrap 5.0.2",
      ],
      features: [
        "Interactive Quiz System - Dynamic question and answer display",
        "Glassmorphic Design - Modern, translucent UI aesthetic",
        "Score Tracking - Real-time score calculation and results",
        "Answer Validation - Immediate feedback on user responses",
        "Question Navigation - Smooth transitions between questions",
        "Results Display - Comprehensive quiz completion summary",
        "Responsive Layout - Works seamlessly across all devices",
        "Bootstrap Integration - Enhanced UI components",
      ],
      liveUrl: "https://engbeshoyramy.github.io/quiz-application-/",
      githubUrl: "https://github.com/engBeshoyRamy/quiz-application-",
    },
    {
      id: 7,
      title: "BookEase - Appointment Booking System",
      category: "Web Development",
      filter: "Applications",
      image: project10Img,
      shortDesc:
        "A comprehensive appointment booking system that simplifies scheduling professional services with real-time availability, instant confirmation, and admin management dashboard.",
      fullDesc:
        "BookEase is a full-featured appointment booking platform designed for service-based businesses. It provides customers with an intuitive booking experience while offering administrators powerful tools to manage services, appointments, and business operations efficiently.",
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Context API (State Management)",
        "LocalStorage API",
        "Lucide React (Icons)",
        "Custom Hooks",
        "Responsive Design",
      ],
      features: [
        "Multi-Step Booking Flow - Guided 4-step booking process (Service Selection → Date/Time → Customer Info → Confirmation).",
        "Real-time Availability - Dynamic slot availability based on business hours and existing appointments.",
        "Service Management - Complete CRUD operations for services with categories, pricing, and duration.",
        "Admin Dashboard - Comprehensive statistics including total appointments, revenue, pending bookings, and customer metrics.",
        "Appointment Management - Full appointment lifecycle management with status tracking (Pending, Confirmed, Completed, Cancelled).",
        "Customer Portal - View and track all personal appointments with filtering options.",
        "Dark Mode Toggle - User preference for light/dark theme throughout the application.",
        "Toast Notifications - Real-time feedback for user actions with auto-dismiss.",
        "Responsive Navigation - Desktop header with mobile bottom navigation bar.",
        "Search & Filter - Advanced filtering for appointments by status, date, and customer information.",
        "Business Hours Configuration - Customizable operating hours for each day of the week.",
        "Instant Confirmation - Immediate booking confirmation with detailed appointment summary.",
        "Protected Admin Routes - Secure admin access with password authentication.",
        "Loading States - Smooth loading indicators for better user experience.",
        "Form Validation - Client-side validation for all user inputs.",
        "Persistent Storage - Data persistence using browser LocalStorage with fallback handling.",
      ],
      liveUrl: "https://bookeaseappointment.netlify.app/",
      githubUrl:
        "https://github.com/engBeshoyRamy/BookEase-Appointment-Booking-System",
    },
    {
      id: 8,
      title: "Mealify Landing Page",
      category: "Web Development",
      filter: "Landing page",
      image: project5Img,
      shortDesc:
        "A modern and attractive restaurant landing page designed to showcase menu items, services, and restaurant ambiance with elegant styling.",
      fullDesc:
        "A professionally designed restaurant landing page featuring sections for menu display, restaurant information, gallery, and contact details. Built with clean code and responsive design principles.",
      technologies: [
        "HTML5",
        "CSS3",
        "Font Awesome (Web Fonts)",
        "Responsive Design",
        "Redis",
      ],
      features: [
        "Responsive Layout - Seamless experience across all devices",
        "Restaurant Showcase - Elegant presentation of restaurant offerings",
        "Menu Display - Dedicated sections for food and beverages",
        "Image Gallery - Visual showcase of dishes and ambiance",
        "Contact Information - Easy-to-find restaurant details",
        "Modern Typography - Custom web fonts for enhanced readability",
        "Clean Design - Professional and appealing visual aesthetic",
        "Fast Loading - Optimized for quick page load times",
      ],
      liveUrl: "https://engbeshoyramy.github.io/Mealify-landingpage/",
      githubUrl: "https://github.com/engBeshoyRamy/Mealify-landingpage",
    },
    {
      id: 9,
      title: "Bookmarker",
      category: " Web Application / Productivity Tool",
      filter: "Applications",
      image: project6Img,
      shortDesc:
        "A bookmark management application that allows users to organize and manage their favorite websites with an intuitive dashboard interface.",
      fullDesc:
        "A practical bookmark manager featuring add, edit, delete, and search functionality with local storage for data persistence. Provides a clean dashboard for efficient website organization.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Local Storage API",
        "Font Awesome (Web Fonts)",
      ],
      features: [
        "Bookmark Management - Add, edit, and delete bookmarks easily",
        "Local Storage - Bookmarks persist across browser sessions",
        "Search Functionality - Quickly find saved websites",
        "URL Validation - Ensures valid website addresses",
        "Quick Access - Visit bookmarked sites with one click",
        "Clean Dashboard - Organized and intuitive interface",
        "Responsive Design - Works on all device sizes",
        "Data Persistence - All bookmarks saved locally",
      ],
      liveUrl: "https://engbeshoyramy.github.io/Bookmarker-dashboard/",
      githubUrl: "https://github.com/engBeshoyRamy/Bookmarker-dashboard",
    },
    {
      id: 10,
      title: "Personal Portfolio Website",
      category: "Web Development",
      filter: "Portfolio",
      image: project7Img,
      shortDesc:
        "A modern and responsive portfolio website showcasing my skills, projects, and professional experience as a Front-End Engineer.",
      fullDesc:
        "A comprehensive personal portfolio website built with cutting-edge web technologies to showcase my professional journey, technical skills, and completed projects. The website features a modern dark theme with smooth animations, interactive sections, and a seamless user experience. It includes detailed information about my background, services I offer, professional experience timeline, and a showcase of my best work. The portfolio is fully responsive and optimized for all devices, providing visitors with an engaging way to explore my capabilities and get in touch.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Lucide React",
        "CSS3",
        "HTML5",
      ],
      features: [
        "Responsive design optimized for all devices (desktop, tablet, mobile)",
        "Modern dark theme with gradient backgrounds and glassmorphism effects",
        "Smooth scroll animations and interactive hover effects",
        "Professional Experience timeline with alternating layout",
        "Services section with detailed modal descriptions",
        "Projects showcase with filtering and detailed view",
        "Contact form for direct communication",
        "Downloadable CV/Resume functionality",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 11,
      title: "Code-Craft Dashboard",
      category: "Full-Stack Web Application",
      filter: "Dashboard",
      image: project8Img,
      shortDesc:
        "A comprehensive web development project featuring both frontend and backend components, built with modern JavaScript technologies.",
      fullDesc:
        "A full-stack web application with separate frontend and backend architecture. Features modular code structure and multiple commits showing active development with 2 contributors.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript (97.2%)",
        "CSS (2.2%)",
        "HTML (0.6%)",
        "Node.js / npm (package management)",
        "Frontend Framework/Library",
      ],
      features: [
        "Full-Stack Architecture - Separate frontend and backend components",
        "Modern JavaScript - Built with contemporary JS practices",
        "Package Management - npm for dependency handling",
        "Modular Structure - Organized frontend directory",
        "Version Control - Git workflow with 19 commits",
        "Collaborative Development - 2 contributors",
        "Cross-platform Compatible - Works across different environments",
      ],
      liveUrl: "https://code-craftt.netlify.app/",
      githubUrl: "https://github.com/engBeshoyRamy/Code-Craft",
    },
  ];

  const filters = [
    "All",
    "Portfolio",
    "Dashboard",
    "Applications",
    "Landing page",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl opacity-50"></div>
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
        ref={projectsRef}
      >
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-300 ${
            projectsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-cyan-400">Projects</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-white scale-105"
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-cyan-400"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer ${
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Show Details Button */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full bg-slate-700 hover:bg-cyan-500 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Show Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2 mx-auto group"
            >
              <span className="font-medium">
                {showAll ? "Show Less Projects" : "See More Projects"}
              </span>
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center group"
              >
                <X
                  size={20}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">
                  Key Website Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <span className="font-medium">View Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Github size={18} />
                  <span className="font-medium">View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Projects;
