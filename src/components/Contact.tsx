import React from "react";
import Section from "./Section";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tighter mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>

        <form
          className="space-y-4 text-left max-w-lg mx-auto"
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 bg-white"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 bg-white"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 bg-white resize-none"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
            <Send size={16} className="ml-2" />
          </button>
        </form>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <Mail size={20} className="mr-2" />
            your-email@example.com
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
