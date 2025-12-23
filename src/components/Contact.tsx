import Section from "./Section";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start max-w-6xl mx-auto">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-lg">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to drop a message.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:yusufsuhail011@gmail.com"
              className="flex items-center text-xl font-medium hover:text-gray-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </div>
              yusufsuhail011@gmail.com
            </a>
            {/* More contact options */}
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
          <form
            className="space-y-6"
            action="mailto:yusufsuhail011@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-between px-8 py-5 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-all group mt-4"
            >
              Send Message
              <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <Send size={20} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
