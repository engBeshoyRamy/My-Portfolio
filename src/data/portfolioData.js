import { Code, Palette, Award } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "Full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Cryptocurrency Dashboard",
    category: "UI/UX Design",
    description: "Real-time crypto tracking application",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tech: ["React", "Chart.js", "API"]
  },
  {
    id: 3,
    title: "Social Media App",
    category: "App Design",
    description: "Modern social networking platform",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tech: ["React Native", "Firebase"]
  }
];

export const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with focus on user experience"
  },
  {
    icon: Award,
    title: "Brand Identity",
    description: "Developing unique brand identities that stand out in the digital landscape"
  }
];

export const stats = [
  { number: "20+", label: "Projects Done" },
  { number: "3+", label: "Years Experience" },
  { number: "49+", label: "Awards Won" }
];