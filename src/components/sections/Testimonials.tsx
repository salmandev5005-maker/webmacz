import { Star } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    id: 1,
    quote: "Webmacz completely transformed our online presence. The new Shopify store they built increased our conversion rate by 45% in the first two months alone. Their attention to detail and UX is unmatched.",
    name: "Sarah",
    initials: "Sh",
  },
  {
    id: 2,
    quote: "Working with Webmacz was an absolute breeze. They delivered a blazingly fast Next.js website that not only looks stunning but also ranks higher on Google. Their team is responsive and highly skilled.",
    name: "Arman malik",
    initials: "Am",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Client Success</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Don't just take our word for it.</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={test.id} delay={idx * 0.2}>
              <div className="bg-surface border border-white/5 p-8 md:p-10 rounded-3xl h-full flex flex-col relative group hover:border-primary/30 transition-colors">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 flex-grow leading-relaxed">
                  "{test.quote}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {test.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{test.name}</div>

                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
