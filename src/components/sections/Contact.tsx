import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS integration stub
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const waLink = "https://wa.me/919310485005?text=Hi+Webmacz%2C+I%27d+like+to+discuss+a+project.";

  return (
    <section id="contact" className="py-24 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Content */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's build something extraordinary.
              </h3>
              <p className="text-gray-400 text-lg mb-10">
                Ready to elevate your digital presence? Fill out the form or reach out directly on WhatsApp.
              </p>

              <div className="space-y-6 mb-12">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">WhatsApp Us</h4>
                    <p className="text-gray-400 text-sm">We reply within 2 hours</p>
                  </div>
                </a>
                
                <div className="flex items-center p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-5">
                    <span className="text-xl font-bold">@</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Email Us</h4>
                    <p className="text-gray-400 text-sm">hello@webmacz.com</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-background border border-white/10 rounded-3xl p-8 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-5 py-3.5 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-5 py-3.5 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Project Type</label>
                    <select
                      name="project_type"
                      required
                      className="w-full px-5 py-3.5 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="shopify">Shopify Store Setup</option>
                      <option value="website">Website Development</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-5 py-3.5 bg-surface border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl flex items-center justify-center transition-all mt-4 disabled:opacity-70"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {!status && <Send className="w-5 h-5 ml-2" />}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
