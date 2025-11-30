import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800">
               <img 
                src="https://picsum.photos/600/800?blur=2" 
                alt="Working on code" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-brand-600 p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-white">3+</p>
              <p className="text-brand-100 text-sm font-medium">Years Experience</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-brand-500 rounded-full"></div>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              👋 Greetings! I am <span className="text-white font-medium">Md Mahmud Hasan Akhonda</span>, a devoted and enthusiastic software developer. 
              My expertise lies in crafting dynamic and user-centric web applications, formidable mobile apps, and resilient backend solutions.
            </p>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              As an aspiring professional, my dedication to perpetual learning drives me to deliver results of the utmost quality, 
              precisely tailored to your distinct requirements. I am fervently committed to staying at the forefront of technology, 
              consistently incorporating innovations to create solutions that push the boundaries of convention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "User-Centric Design",
                "Mobile-First Approach",
                "Scalable Codebase",
                "Collaborative Development"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;