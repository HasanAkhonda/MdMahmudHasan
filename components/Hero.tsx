import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-500 font-medium tracking-wide uppercase text-sm">Software Developer</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                  Md Mahmud Hasan Akhonda
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                I build dynamic, user-friendly interfaces and resilient backend solutions. 
                Let's create something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full transition-all hover:scale-105"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-brand-500 text-slate-300 hover:text-white font-semibold rounded-full transition-all"
              >
                View Services
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://github.com/HasanAkhonda" className="text-slate-500 hover:text-brand-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/md-mahmud-hassan-151b23197/" className="text-slate-500 hover:text-brand-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:mdmahmudhasanakhonda@gmail.com" className="text-slate-500 hover:text-brand-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-2xl rotate-6 opacity-20"></div>
              <img 
                src="/public/IMG_20230124_141252.jpg" 
                alt="Md Mahmud Hasan Akhonda" 
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;