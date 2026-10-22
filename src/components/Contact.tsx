import { useState } from "react";
import Section from "./Section";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    const body = `Hi Yusuf,\n\n${message}\n\n──────────────────────────\nSender Details:\nName: ${name}\nEmail: ${email}\n──────────────────────────`;
    const subject = `${name} - Portfolio Contact`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yusufsuhail011@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <Section id="contact" className="border-t border-border">
      <div className="grid items-start gap-12">
        <div>
          <p className="section-kicker">05 / Contact</p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">
            Let's Work Together
          </h2>
          <p className="mb-8 max-w-xl text-base leading-8 text-muted-foreground">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to drop a message.
          </p>

          <div>
            <a
              href="mailto:yusufsuhail011@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <Mail size={16} />
              yusufsuhail011@gmail.com
            </a>
            {/* More contact options */}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <form
            className="space-y-7"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus:border-foreground focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus:border-foreground focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus:border-foreground focus:outline-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
