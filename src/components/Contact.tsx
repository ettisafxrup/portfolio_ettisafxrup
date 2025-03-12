
import React, { useState } from 'react';
import { SectionObserver, ContentFadeIn } from './Transitions';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionObserver>
          <ContentFadeIn>
            <div className="text-center mb-16">
              <div className="bg-gray-200 text-gray-700 text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                Get in Touch
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's Work Together
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Reach out and let's create something amazing.
              </p>
            </div>
          </ContentFadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionObserver threshold={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                {submitted ? (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all duration-200 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all duration-200 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all duration-200 outline-none resize-none"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </SectionObserver>
            
            <SectionObserver threshold={0.2}>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <p className="text-gray-600 mb-8">
                    Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-gray-400 mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                          contact@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-gray-400 mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-gray-400 mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-600">
                          San Francisco, California
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl p-8 mt-auto">
                  <h4 className="font-medium mb-3">Availability</h4>
                  <p className="text-gray-600 mb-4">
                    I'm currently available for freelance work and open to discussing full-time opportunities.
                  </p>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gray-800 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>70% Available</span>
                    <span>Open to offers</span>
                  </div>
                </div>
              </div>
            </SectionObserver>
          </div>
        </SectionObserver>
      </div>
    </section>
  );
};

export default Contact;
