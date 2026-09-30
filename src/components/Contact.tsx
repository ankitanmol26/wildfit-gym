"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real implementation, this would send data to an API
  };

  return (
    <section id="contact" className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Ready To <span className="text-primary">Start?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and we'll get back to you to schedule your visit.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-black border border-primary p-12 text-center flex flex-col items-center animate-reveal">
              <CheckCircle2 className="text-primary mb-6" size={64} />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Thanks! Your enquiry has been received.</h3>
              <p className="text-gray-400 mb-8">
                One of our team members will contact you shortly to confirm your details.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary underline uppercase font-bold text-sm tracking-wider hover:text-white transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-black border border-border p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-surface border border-border text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-surface border border-border text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="goal" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Fitness Goal</label>
                  <select 
                    id="goal" 
                    className="w-full bg-surface border border-border text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Strength & Power</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Time</label>
                  <select 
                    id="time" 
                    className="w-full bg-surface border border-border text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a Time</option>
                    <option value="morning">Morning (6AM - 10AM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (5PM - 9PM)</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-surface border border-border text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Any questions or specific requirements?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-4 px-8 uppercase tracking-wider transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
