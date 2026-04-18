import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import emailjs from '@emailjs/browser';

export function Audit() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS implementation (needs env vars)
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as "service_toxyy9k",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as "template_68ok6kc",
      e.currentTarget,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as "IiUTl4ywJDLZ_Yqsq"
    )
    .then(() => setStatus('success'))
    .catch(() => setStatus('error'));
  

    // Simulate for demo
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="audit" className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-surface border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="text-center relative z-10 mb-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">FREE</span> Shopify Store Audit
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Know exactly what's costing you sales. We'll review speed, UX, conversion rate & SEO — delivered in 48 hrs.
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-10 relative z-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400">We will get back to you within 48 hours with your personalized audit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-5 py-4 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Salman Mac"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-5 py-4 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="mac@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300">Store / Website URL</label>
                  <input
                    type="url"
                    name="store_url"
                    required
                    className="w-full px-5 py-4 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="https://yourstore.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold rounded-xl flex items-center justify-center transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="animate-pulse">Sending Request...</span>
                  ) : (
                    <>
                      Get Free Audit Now <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  100% free. No credit card. No commitment.
                </p>
                {status === 'error' && (
                  <p className="text-center mt-4 text-red-400">Failed to send request. Please try again later.</p>
                )}
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
