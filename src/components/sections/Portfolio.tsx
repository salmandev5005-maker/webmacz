import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import scentadda from "../../assets/scentadda.png";
import dahabi from "../../assets/dahabi.png";
import neebo from "../../assets/neebo.png";


const projects = [
  {
    id: 1,
    title: 'Scentadda',
    category: 'Shopify',
    description: 'High-converting D2C store for a luxury Perfume brand.',
    image:scentadda ,
    result: 'Conversion +35%',
    link : "https://scentadda.com/",
    
  },
  {
    id: 2,
    title: 'Nexus Tech',
    category: 'Website',
    description: 'Modern corporate website with WebGL animations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    result: 'Speed +80%',
  },
  {
    id: 3,
    title: 'Dahabi India',
    category: 'Shopify',
    description: 'Minimalist UAE based Perfume store.',
    image: dahabi,
    result: 'Performance +20%',
    link:"https://dahabiindia.com/",
  },
  {
    id: 4,
    title: 'Neebo',
    category: 'Website',
    description: 'Lead generation landing page for a B2C Product startup.',
    image: neebo,
    result: 'Leads +65%',
    link:"https://neebo-template.webflow.io/home/home-03"
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Shopify', 'Website'];

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Featured Projects.</h3>
            </div>
            
            <div className="flex space-x-2 mt-6 md:mt-0 p-1 bg-background rounded-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} delay={0.1 * idx}>
              <div className="group relative rounded-3xl overflow-hidden bg-background border border-white/5">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                    {project.result}
                  </div>

                  {/* CTA Hover */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <button   onClick={() => window.open(project.link, "_blank")}
                     className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center shadow-2xl">
                      
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8 relative z-10 -mt-10 bg-gradient-to-t from-background via-background to-transparent pt-10">
                  <div className="text-primary text-sm font-semibold mb-2">{project.category}</div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
