
import React, { useState } from 'react';
import { ARTIST_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mailtoLink = `mailto:${ARTIST_EMAIL}?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(
    `Hello, my name is ${formData.name}.\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#111111]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif-display text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-2">Have a question or a project in mind? Let's talk.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
            ></textarea>
          </div>
          <div className="text-center">
            <a
              href={mailtoLink}
              className="inline-block bg-amber-400 text-black font-bold py-3 px-10 rounded-md text-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
