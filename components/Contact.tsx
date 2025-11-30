import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-brand-500 rounded-full mb-6"></div>
              <p className="text-slate-400 text-lg">
                Have a project in mind or want to collaborate? I'd love to hear from you. 
                Fill out the form or reach out directly using the contact info.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-dark-800 p-3 rounded-lg text-brand-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Location</h4>
                  <p className="text-slate-400">
                    H#17, ROAD-10, BLOCK-D, RAMPURA,<br/>
                    BANASREE, DHAKA-1219, BANGLADESH
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-dark-800 p-3 rounded-lg text-brand-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <a href="mailto:mdmahmudhasanakhonda@gmail.com" className="text-slate-400 hover:text-brand-400 transition-colors">
                    mdmahmudhasanakhonda@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-dark-800 p-3 rounded-lg text-brand-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Phone</h4>
                  <a href="tel:+8801629993840" className="text-slate-400 hover:text-brand-400 transition-colors">
                    01629993840
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 p-8 rounded-2xl border border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;