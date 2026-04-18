import { FadeIn } from '../ui/FadeIn';

const steps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "30-min free call to understand your goals, budget, and timeline."
  },
  {
    num: "02",
    title: "Design",
    desc: "UI/UX wireframes and high-fidelity mockups shared for approval."
  },
  {
    num: "03",
    title: "Development",
    desc: "Full build with daily/weekly progress updates over WhatsApp."
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Cross-browser, mobile, and performance testing before delivery."
  },
  {
    num: "05",
    title: "Delivery & Support",
    desc: "Live deployment + 15 days of free post-launch support."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-surface border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">How We Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">A proven process for success.</h3>
            <p className="text-gray-400 text-lg">
              We streamline the entire journey from idea to launch to ensure you get exactly what you need, on time.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 0.15}>
                <div className="relative bg-background md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-white/5 md:border-none flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-surface border border-white/10 text-xl font-bold text-white flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
