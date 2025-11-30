import React from 'react';
import { Layout, Smartphone, Code, TabletSmartphone } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Front-End Development",
    description: "I specialize in building dynamic, user-friendly interfaces that ensure a seamless user experience. My services focus on creating responsive, high-performance websites using React.js, Next.js, and Tailwind CSS.",
    icon: "layout"
  },
  {
    id: 2,
    title: "JavaScript Development",
    description: "I specialize in creating dynamic and interactive web applications. From complex state management to seamless client-side interactions, I focus on delivering efficient, scalable, and maintainable solutions.",
    icon: "code"
  },
  {
    id: 3,
    title: "CSS Frameworks & UI",
    description: "We create responsive, feature-rich interfaces. Our approach integrates best practices in UI/UX design, performance optimization, and code reusability, ensuring your app stands out.",
    icon: "smartphone"
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Creating responsive, feature-rich mobile applications using frameworks like React Native. Whether for Android or iOS, we focus on delivering intuitive, fast, and reliable mobile experiences.",
    icon: "tablet"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'layout': return <Layout className="h-8 w-8" />;
    case 'code': return <Code className="h-8 w-8" />;
    case 'smartphone': return <Smartphone className="h-8 w-8" />;
    case 'tablet': return <TabletSmartphone className="h-8 w-8" />;
    default: return <Layout className="h-8 w-8" />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-20 h-1 bg-brand-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">
            I provide a wide range of software development services, from sleek front-end interfaces to robust mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-dark-800 p-8 rounded-2xl border border-slate-800 hover:border-brand-500 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-dark-900 rounded-lg flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;