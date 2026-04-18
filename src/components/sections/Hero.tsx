import { ArrowRight, Calendar } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.2}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-gray-300 font-medium tracking-wide">
            🏆 Rated Top Shopify Agency 2024
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            We build high-converting <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Shopify stores
            </span> & websites
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            Helping brands increase sales with modern design & performance-driven architecture.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-all hover:scale-105 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://calendly.com/webmacz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              Book a Call 
            </a>
          </div>
        </FadeIn>

        {/* Stats Bar */}
        <FadeIn delay={1.2} direction="up" distance={50}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-surface border border-white/5 shadow-2xl backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Projects Delivered</div>
            </div>
            <div className="text-center md:border-x border-white/10">
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">3x</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Avg Conversion Boost</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
