import { ShoppingBag, Code2, Paintbrush, Sparkles } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const servicesList = [
  {
    title: 'Shopify Development',
    description: 'Custom Shopify stores built for speed, mobile-first, and high conversions.',
    benefit: 'Increase sales',
    icon: ShoppingBag,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    title: 'Website Development',
    description: 'Fast, SEO-optimised websites on modern stacks like React and Next.js.',
    benefit: 'Better visibility',
    icon: Code2,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, user-tested designs that reduce drop-off and drive actions.',
    benefit: 'Improve UX',
    icon: Paintbrush,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    title: 'AI Automation',
    description: 'Automate store ops, customer support & email flows with AI.',
    benefit: 'Save time',
    icon: Sparkles,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    badge: 'Coming Soon',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">What we do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise that drives results.</h3>
            <p className="text-gray-400 text-lg">
              We offer end-to-end solutions to help your business scale automatically and engage users beautifully.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 0.15}>
              <div className="group h-full p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                {service.badge && (
                  <span className="absolute top-6 right-6 text-xs font-semibold px-2 py-1 bg-white/10 text-gray-300 rounded-md">
                    {service.badge}
                  </span>
                )}

                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm font-medium text-gray-300">
                    <Sparkles className="w-4 h-4 mr-1.5 text-primary" />
                    {service.benefit}
                  </span>
                </div>
                
                {/* Hover overlay light effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
