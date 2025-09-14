import  { useState } from 'react';

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 2,
      title: "Project B",
      year: "2022",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Project C", 
      year: "2022",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Project D",
      year: "2022", 
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              hoveredProject === project.id ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Recent Projects
          </h1>
          <button className="text-lg underline hover:no-underline transition-all duration-300">
            Reset
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-4 mb-16">
          <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
            Web Development
          </span>
          <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 text-white/70">
            Web Design
          </span>
          <span className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/10 text-white/70">
            UI/UX
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer border-b border-white/10 last:border-b-0"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center justify-between py-8 md:py-12 transition-all duration-500 group-hover:px-8">
                {/* Project Number */}
                <div className="flex items-center gap-8 md:gap-16 flex-1">
                  <span className="text-2xl md:text-3xl font-light text-white/60 group-hover:text-white transition-colors duration-300 min-w-[2rem]">
                    {project.id}
                  </span>
                  
                  {/* Project Title */}
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight transform transition-all duration-500 group-hover:translate-x-4 group-hover:text-white/90">
                    {project.title}
                  </h2>
                </div>

                {/* Year */}
                <div className="text-xl md:text-2xl font-light text-white/60 group-hover:text-white transition-colors duration-300">
                  {project.year}
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

     
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;