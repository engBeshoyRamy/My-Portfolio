import React, { useState } from 'react';
import { ArrowRight, Code, Palette, Award, Smartphone, Database, Zap, X } from 'lucide-react';

function Services({ servicesRef, servicesVisible }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies',
      fullDescription: 'I specialize in creating high-performance, scalable web applications using cutting-edge technologies. My expertise includes React, Next.js, and modern JavaScript frameworks. I focus on writing clean, maintainable code while ensuring optimal user experience and performance.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Integration & Development',
        'Performance Optimization',
        'Responsive Design Implementation'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS']
    },
    {
      id: 2,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with focus on user experience',
      fullDescription: 'I create user-centered designs that combine aesthetics with functionality. My design process involves user research, wireframing, prototyping, and user testing to ensure the final product meets both business goals and user needs.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Wireframing & Prototyping',
        'Design Systems Creation',
        'Usability Testing',
        'Mobile App Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro']
    },
    {
      id: 3,
      icon: Award,
      title: 'Data Science',
      description: 'Transforming raw data into actionable insights using modern analytics tools',
      fullDescription: 'I specialize in analyzing complex datasets to uncover patterns, trends, and insights that drive business decisions. Using Python and industry-standard tools, I help organizations make data-driven decisions and visualize their data effectively.',
      features: [
        'Data Cleaning & Preprocessing',
        'Statistical Analysis',
        'Data Visualization',
        'Power BI Dashboards',
        'Python Data Analysis',
        'Business Intelligence Reports'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Matplotlib', 'Seaborn']
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications',
      fullDescription: 'I build mobile applications that provide seamless user experiences across iOS and Android platforms. Whether it\'s a native app or cross-platform solution, I ensure high performance and intuitive design.',
      features: [
        'iOS & Android Development',
        'React Native Apps',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: 5,
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side solutions and APIs',
      fullDescription: 'I develop scalable backend systems that power modern web applications. From RESTful APIs to complex database architectures, I ensure your application runs smoothly and securely.',
      features: [
        'RESTful API Development',
        'Database Design & Optimization',
        'Server Architecture',
        'Authentication & Security',
        'Cloud Integration',
        'Microservices Architecture'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS']
    },
    {
      id: 6,
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed and efficiency',
      fullDescription: 'I specialize in making websites faster and more efficient. Through code optimization, asset management, and modern best practices, I help improve loading times and overall user experience.',
      features: [
        'Code Optimization',
        'Image & Asset Optimization',
        'Lazy Loading Implementation',
        'Caching Strategies',
        'SEO Optimization',
        'Core Web Vitals Improvement'
      ],
      technologies: ['Webpack', 'Lighthouse', 'GTmetrix', 'Chrome DevTools']
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a1628] to-slate-950">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow-delay"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={servicesRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Development <span className="text-cyan-400">Services</span> I Am Providing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className={`group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 min-h-[60px]">
                  {service.description}
                </p>
                <button 
                  onClick={() => openModal(service)}
                  className="text-cyan-400 flex items-center space-x-2 group-hover:space-x-4 transition-all duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn"
          onClick={closeModal}
        >
          <div className="bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {React.createElement(selectedService.icon, { 
                  className: "w-8 h-8 text-cyan-400" 
                })}
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center group"
              >
                <X size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Overview</h4>
                <p className="text-gray-400 leading-relaxed">{selectedService.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">What I Offer</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400 hover:scale-110 transition-transform duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    closeModal();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2 group"
                >
                  <span className="font-medium">Get Started with This Service</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
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

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Services;