import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import userData from "@constants/data";

export default function SolopreneurProjects() {
  const [viewMode, setViewMode] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(userData.solopreneurProjects);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visitedProjects, setVisitedProjects] = useState(new Set());
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${particle.opacity * 0.3})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filtering
  useEffect(() => {
    let filtered = userData.solopreneurProjects;
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== "all") {
      if (selectedCategory === "live") {
        filtered = filtered.filter(project => project.stage.toLowerCase().includes("live"));
      } else {
        filtered = filtered.filter(project => 
          project.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    }
    
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);



  const categories = [...new Set(userData.solopreneurProjects.map(p => p.category))];
  const liveProjects = userData.solopreneurProjects.filter(p => p.stage.includes("Live")).length;

  const handleProjectVisit = (projectId) => {
    setVisitedProjects(prev => new Set([...prev, projectId]));
  };

  return (
    <ContainerBlock
      title="🚀 The Innovation Laboratory - Naveen's Solopreneur Universe"
      description="Enter an interactive journey through 21 groundbreaking projects. Explore, discover, and experience the evolution of a solopreneur's digital ecosystem."
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />



      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        
        {/* Hero Control Panel */}
        <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-slate-300 bg-clip-text text-transparent">
                THE LAB
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Welcome to my innovation laboratory. Each project represents a chapter in the solopreneur story.
              </p>
            </div>

            {/* Interactive Dashboard */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-gray-500 border-opacity-30 hover:bg-opacity-15 transition-all">
                <div className="text-4xl font-bold text-blue-400">{userData.solopreneurProjects.length}</div>
                <div className="text-sm text-gray-300">Total Projects</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-gray-500 border-opacity-30 hover:bg-opacity-15 transition-all">
                <div className="text-4xl font-bold text-emerald-400">{liveProjects}</div>
                <div className="text-sm text-gray-300">Live Products</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{width: `${(liveProjects/21)*100}%`}}></div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-gray-500 border-opacity-30 hover:bg-opacity-15 transition-all">
                <div className="text-4xl font-bold text-indigo-400">{categories.length}</div>
                <div className="text-sm text-gray-300">Categories</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-gray-500 border-opacity-30 hover:bg-opacity-15 transition-all">
                <div className="text-4xl font-bold text-slate-300">{visitedProjects.size}</div>
                <div className="text-sm text-gray-300">Explored</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-slate-300 h-2 rounded-full transition-all duration-500" style={{width: `${(visitedProjects.size/21)*100}%`}}></div>
                </div>
              </div>
            </div>

            {/* View Mode Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { mode: 'dashboard', icon: '📊', label: 'Dashboard' },
                { mode: 'timeline', icon: '⏰', label: 'Timeline' },
                { mode: 'explorer', icon: '🎮', label: 'Explorer' },
                { mode: 'stats', icon: '📈', label: 'Analytics' }
              ].map(({ mode, icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    viewMode === mode
                      ? 'bg-white text-slate-800 shadow-xl scale-105 border-2 border-blue-400'
                      : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20 border border-gray-500 border-opacity-30'
                  }`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search projects, technologies, ideas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-gray-500 border-opacity-30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-15 transition-all"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-gray-500 border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="all" className="text-black">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat} className="text-black">{cat}</option>
                ))}
                <option value="live" className="text-black">Live Projects</option>
              </select>
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        {viewMode === 'dashboard' && <DashboardView projects={filteredProjects} onProjectVisit={handleProjectVisit} />}
        {viewMode === 'timeline' && <TimelineView projects={filteredProjects} onProjectVisit={handleProjectVisit} />}
        {viewMode === 'explorer' && <ExplorerView projects={filteredProjects} onProjectVisit={handleProjectVisit} />}
        {viewMode === 'stats' && <StatsView projects={userData.solopreneurProjects} />}

        {/* Footer */}
        <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Epic?</h2>
            <p className="text-xl mb-8 opacity-90">
              The journey never ends. Let's create the next breakthrough together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:naveen@aifanatic.pro"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 Let's Collaborate
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
              >
                💬 Connect
              </a>
            </div>
          </div>
        </section>
      </div>
    </ContainerBlock>
  );
}

const DashboardView = ({ projects, onProjectVisit }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <InteractiveProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onVisit={onProjectVisit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineView = ({ projects, onProjectVisit }) => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">🚀 Innovation Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-indigo-500 h-full"></div>
          
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <TimelineProjectCard project={project} onVisit={onProjectVisit} isLeft={index % 2 === 0} />
              </div>
              
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2 hover:scale-125 transition-transform cursor-pointer"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExplorerView = ({ projects, onProjectVisit }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">🎮 Project Explorer</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-gray-500/30 cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center group hover:shadow-2xl"
            >
              <div className="text-2xl font-bold text-white group-hover:scale-125 transition-transform">
                {project.id}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <ExplorerDetailPanel 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            onVisit={onProjectVisit}
          />
        )}
      </div>
    </section>
  );
};

const StatsView = ({ projects }) => {
  const techStats = {};
  projects.forEach(project => {
    const techs = project.tech.split(',').map(t => t.trim());
    techs.forEach(tech => {
      techStats[tech] = (techStats[tech] || 0) + 1;
    });
  });

  const topTechs = Object.entries(techStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  return (
    <section className="bg-gradient-to-br from-slate-900 to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">📊 Analytics Dashboard</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">🛠️ Technology Mastery</h3>
            <div className="space-y-4">
              {topTechs.map(([tech, count], index) => (
                <div key={tech} className="flex items-center">
                  <div className="w-32 text-white text-sm truncate">{tech}</div>
                  <div className="flex-1 mx-4 bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-3 rounded-full transition-all duration-1000 hover:scale-105"
                      style={{ width: `${(count / topTechs[0][1]) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-white font-bold">{count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">📊 Project Distribution</h3>
            <div className="grid grid-cols-2 gap-4">
              {[...new Set(projects.map(p => p.category))].map(category => {
                const count = projects.filter(p => p.category === category).length;
                return (
                  <div key={category} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <div className="text-3xl font-bold text-blue-400">{count}</div>
                    <div className="text-white text-sm">{category}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveProjectCard = ({ project, index, onVisit }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    onVisit(project.id);
    if (project.url && !project.url.includes('Chrome Web Store')) {
      window.open(`https://${project.url}`, '_blank');
    }
  };

  return (
    <div
      className="group relative h-80 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${isHovered ? 'rotate-y-180' : ''}`}>
        
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform">
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-indigo-600 bg-clip-text text-transparent">
                #{project.id.toString().padStart(2, '0')}
              </div>
              <div className={`px-3 py-1 rounded-full text-white text-xs font-bold ${getStageColor(project.stage)}`}>
                {project.stage}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </span>
              <div className="flex gap-2 items-center">
                <span title="Difficulty">{getDifficultyIcon(project.difficulty)}</span>
                <span title="Impact">{getImpactIcon(project.impact)}</span>
                {project.url && !project.url.includes('Chrome Web Store') && (
                  <span title="Visit Live" className="text-blue-500 dark:text-blue-400">🔗</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl shadow-xl text-white overflow-hidden">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-4">{project.name}</h3>
            
            <div className="space-y-3 flex-grow">
              <div>
                <div className="text-xs uppercase tracking-wide opacity-80 mb-1">🛠️ Tech Stack</div>
                <div className="text-sm font-medium">{project.tech}</div>
              </div>
              
              {project.url && (
                <div>
                  <div className="text-xs uppercase tracking-wide opacity-80 mb-1">
                    🌐 {project.url.includes('Chrome Web Store') ? 'Available on' : 'Live at'}
                  </div>
                  <div className="text-sm font-medium bg-white bg-opacity-20 rounded-lg px-3 py-2 backdrop-blur-sm border border-white border-opacity-30">
                    {project.url.includes('Chrome Web Store') ? 'Chrome Web Store' : project.url}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Complexity</div>
                  <div className="text-sm font-medium">{getDifficultyIcon(project.difficulty)} {project.difficulty}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Impact</div>
                  <div className="text-sm font-medium">{getImpactIcon(project.impact)} {project.impact}</div>
                </div>
              </div>
            </div>
            
            <div className="text-xs opacity-80 text-center">
              Click to explore • {project.url && !project.url.includes('Chrome Web Store') && '🔗 Visit live'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineProjectCard = ({ project, onVisit, isLeft }) => {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl ${
        isLeft ? 'text-right' : 'text-left'
      }`}
      onClick={() => onVisit(project.id)}
    >
      <div className="text-sm text-blue-400 font-bold mb-2">#{project.id} • {project.stage}</div>
      <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm">{project.category}</span>
        <div className="flex gap-2">
          <span>{getDifficultyIcon(project.difficulty)}</span>
          <span>{getImpactIcon(project.impact)}</span>
        </div>
      </div>
    </div>
  );
};

const ExplorerDetailPanel = ({ project, onClose, onVisit }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full border border-white/20 transform animate-scaleIn">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-white">{project.name}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-red-400 text-2xl transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6 text-white">
          <p className="text-lg">{project.description}</p>
          
          <div>
            <h4 className="font-bold mb-2">🛠️ Technology Stack</h4>
            <p className="text-gray-300">{project.tech}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb-2">📊 Stage</h4>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStageColor(project.stage)}`}>
                {project.stage}
              </span>
            </div>
            <div>
              <h4 className="font-bold mb-2">⚡ Difficulty</h4>
              <div>{getDifficultyIcon(project.difficulty)} {project.difficulty}</div>
            </div>
            <div>
              <h4 className="font-bold mb-2">🎯 Impact</h4>
              <div>{getImpactIcon(project.impact)} {project.impact}</div>
            </div>
          </div>
          
          {project.url && (
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  onVisit(project.id);
                  if (!project.url.includes('Chrome Web Store')) {
                    window.open(`https://${project.url}`, '_blank');
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 rounded-full font-bold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Explore Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const getStageColor = (stage) => {
  const stageColors = {
    "Live": "bg-green-500",
    "Live / evolving": "bg-green-600", 
    "Live (event‑based)": "bg-green-400",
    "Live (client‑specific)": "bg-green-500",
    "Public beta": "bg-blue-500",
    "Beta": "bg-blue-400",
    "Alpha": "bg-yellow-500",
    "Private alpha": "bg-yellow-600",
    "MVP in build": "bg-orange-500",
    "MVP scaffolding": "bg-orange-400",
    "Prototype": "bg-purple-500",
    "Pilot use": "bg-indigo-500",
    "Pilot with schools": "bg-indigo-400"
  };
  return stageColors[stage] || "bg-gray-500";
};

const getDifficultyIcon = (difficulty) => {
  const icons = {
    "Easy": "🟢",
    "Medium": "🟡", 
    "Advanced": "🟠",
    "Expert": "🔴"
  };
  return icons[difficulty] || "⚪";
};

const getImpactIcon = (impact) => {
  const icons = {
    "Medium": "⭐⭐",
    "High": "⭐⭐⭐",
    "Very High": "⭐⭐⭐⭐"
  };
  return icons[impact] || "⭐";
};

// CSS Styles
if (typeof document !== 'undefined') {
  const styles = `
    .perspective-1000 { perspective: 1000px; }
    .transform-style-preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
    .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
} 