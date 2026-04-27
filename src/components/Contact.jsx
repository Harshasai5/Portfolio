import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../data/constants";
import { Button } from "./ui/Button";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address (e.g., example@gmail.com).");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/saiharsha0501@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from ${formData.name} via Portfolio`,
          _template: "box",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: PORTFOLIO_DATA.socials.github, label: "GitHub", color: "hover:text-white hover:bg-gray-800" },
    { icon: FaLinkedin, href: PORTFOLIO_DATA.socials.linkedin, label: "LinkedIn", color: "hover:text-white hover:bg-blue-600" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-32 relative bg-[var(--color-dark-card)]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            Let's <span className="text-[var(--color-neon-pink)] text-glow">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--color-neon-green)] rounded-full glow-green mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to build something extraordinary? Drop a message or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Info & Socials */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-12">
            
            {/* Email Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-pink)]/10 rounded-full blur-[50px] group-hover:bg-[var(--color-neon-pink)]/20 transition-colors pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="text-[var(--color-neon-pink)]" /> Direct Mail
              </h3>
              
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/10 group-hover:border-[var(--color-neon-pink)]/30 transition-colors">
                <span className="text-gray-300 font-mono text-sm truncate pr-4">
                  {PORTFOLIO_DATA.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white/10 hover:bg-[var(--color-neon-pink)] text-gray-300 hover:text-white rounded-lg transition-colors flex-shrink-0"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 px-2">Digital Presence</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5 }}
                    className={`p-4 glass rounded-2xl border border-white/5 text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-neon-green)] focus:ring-1 focus:ring-[var(--color-neon-green)] transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-neon-green)] focus:ring-1 focus:ring-[var(--color-neon-green)] transition-all font-mono text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-neon-pink)] focus:ring-1 focus:ring-[var(--color-neon-pink)] transition-all font-mono text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {errorMessage && (
                <div className="text-red-400 text-sm mt-2">{errorMessage}</div>
              )}
              {status === "success" && (
                <div className="text-[var(--color-neon-green)] text-sm mt-2 font-medium">
                  Message sent successfully!
                </div>
              )}

              <Button type="submit" disabled={status === "loading"} variant="primary" className={`w-full py-4 text-lg ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
