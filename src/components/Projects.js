import React, { useState, useRef, useEffect } from 'react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Eye,
  Info,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  MoveHorizontal,
  Gamepad2,
  SlidersHorizontal
} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'kamel-handyman',
    title: 'Kamel Handy Man',
    subtitle: 'Local Contracting & Home Services Web App',
    category: 'business',
    categoryLabel: 'Local Business',
    description: 'A high-converting, mobile-first business web app for a premier North Carolina handyman service. Features instant quotes, dynamic service scheduling, and localized SEO.',
    url: 'https://deepduggal.github.io/khm/',
    fallbackImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Google Maps API'],
    stats: {
      loadSpeed: '< 0.8s',
      conversionIncrease: '+140%',
      lighthouseScore: '99/100'
    },
    accentColor: 'from-amber-500 to-orange-600',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
  },
  {
    id: 'with-love-bani',
    title: 'With Love, Bani',
    subtitle: 'Bespoke Couture & Personal Styling Platform',
    category: 'luxury',
    categoryLabel: 'E-Commerce & Luxury',
    description: 'An elegant, high-end digital portfolio and consultation platform for luxury bespoke fashion and personal styling services. Built with fluid typography and micro-animations.',
    url: 'https://deepduggal.github.io/With-Love-Bani/preview/',
    fallbackImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    stats: {
      loadSpeed: '< 1.1s',
      conversionIncrease: '+95%',
      lighthouseScore: '98/100'
    },
    accentColor: 'from-pink-500 to-rose-600',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
  },
  {
    id: 'dont-be-a-square',
    title: "Don't Be A Square",
    subtitle: 'High-Velocity Interactive Arcade Game',
    category: 'games',
    categoryLabel: 'Games & Interactive',
    description: 'A fast-paced, retro-style action arcade web game built with physics-driven mechanics and HTML5 Canvas. Dodge obstacle waves, trigger power-ups, and survive geometric chaos at 60 FPS.',
    url: 'https://deepduggal.github.io/DontBeASquareGame/',
    fallbackImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tags: ['HTML5 Canvas', 'JavaScript ES6+', 'Web Audio API', 'Game Physics', 'Phaser.js'],
    stats: {
      loadSpeed: '< 0.3s',
      conversionIncrease: '0.5M+ Plays',
      lighthouseScore: '100/100'
    },
    accentColor: 'from-purple-500 to-indigo-600',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  {
    id: 'sexy-calc',
    title: 'Sexy Calc',
    subtitle: 'Sleek Modern Web Calculator App',
    category: 'webapps',
    categoryLabel: 'Web App & Utility',
    description: 'A visually stunning, responsive calculator web app built with tactile haptic feedback effects, memory functions, and history logs.',
    url: 'https://deepduggal.github.io/Sexy-Calc/src/index.html',
    fallbackImg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    stats: {
      loadSpeed: '< 0.4s',
      conversionIncrease: '10k+ Users',
      lighthouseScore: '100/100'
    },
    accentColor: 'from-cyan-500 to-blue-600',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  {
    id: 'todoapp',
    title: 'To Do List App',
    subtitle: 'A to do list app made with Google\'s Design framework',
    category: 'games',
    categoryLabel: 'Games & Interactive',
    description: 'Comprehensive business management software providing live inventory tracking, automated quote estimations, and streamlined accounting workflows.',
    url: 'https://deepstodoapp.surge.sh/',
    fallbackImg: 'https://images.unsplash.com/photo-1542744094-3a31216994c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloud Firestore'],
    stats: {
      loadSpeed: '< 1.2s',
      conversionIncrease: '+210%',
      lighthouseScore: '96/100'
    },
    accentColor: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'business', label: 'Local Business' },
  { id: 'luxury', label: 'E-Commerce' },
  { id: 'games', label: 'Games' },
  { id: 'webapps', label: 'Web Apps' },
  { id: 'saas', label: 'SaaS' }
];

function WorkSection() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const [isLoadingIframe, setIsLoadingIframe] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [useFallbackMode, setUseFallbackMode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const iframeRef = useRef(null);
  const scrollCarouselRef = useRef(null);

  // Filter projects by category
  const filteredProjects = PROJECTS_DATA.filter(p => 
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  const selectedProject = filteredProjects[selectedProjectIndex] || filteredProjects[0] || PROJECTS_DATA[0];

  // Detect screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileScreen(mobile);
      if (mobile && viewportMode === 'desktop') {
        setViewportMode('mobile');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectProject = (project) => {
    const idx = filteredProjects.findIndex(p => p.id === project.id);
    if (idx !== -1) setSelectedProjectIndex(idx);
    setIsLoadingIframe(true);
    setUseFallbackMode(false);
  };

  const handleIframeLoad = () => {
    setIsLoadingIframe(false);
  };

  const handlePrevProject = () => {
    const total = filteredProjects.length;
    const newIdx = (selectedProjectIndex - 1 + total) % total;
    setSelectedProjectIndex(newIdx);
    setIsLoadingIframe(true);
    setUseFallbackMode(false);
  };

  const handleNextProject = () => {
    const total = filteredProjects.length;
    const newIdx = (selectedProjectIndex + 1) % total;
    setSelectedProjectIndex(newIdx);
    setIsLoadingIframe(true);
    setUseFallbackMode(false);
  };

  const handleRefreshIframe = () => {
    setIsLoadingIframe(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    } else {
      setTimeout(() => setIsLoadingIframe(false), 500);
    }
  };

  const handleCopyUrl = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(selectedProject.url);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
        return;
      }
    } catch (e) {
      // Fallback
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = selectedProject.url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      }
    } catch (e) {
      console.warn('Unable to copy URL to clipboard:', e);
    }
  };

  const getViewportWidthClass = () => {
    switch (viewportMode) {
      case 'mobile': return 'w-[360px] h-[640px] rounded-[32px] border-[8px] border-slate-800 shadow-2xl';
      case 'tablet': return 'w-[720px] h-[580px] rounded-2xl border-4 border-slate-800 shadow-xl';
      case 'desktop':
      default: return 'w-full min-w-[800px] md:min-w-0 h-[560px] rounded-xl';
    }
  };

  return (
    <>

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Portfolio Showcase
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Featured Work & Live Demos
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Test drive live web applications directly inside our embedded viewport browser. Swipe horizontally or use navigation arrows to browse live projects.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-none sm:justify-center">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedProjectIndex(0);
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold flex-shrink-0 transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400' 
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Horizontal Carousel Bar */}
        <div className="relative bg-slate-900/70 border border-slate-800 rounded-2xl p-3 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Select Project ({filteredProjects.length})</span>
            </div>

            {filteredProjects.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevProject}
                  className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/60 active:scale-95"
                  title="Previous Project"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
                <span className="text-xs font-mono text-slate-300 px-1 font-semibold">
                  {selectedProjectIndex + 1} / {filteredProjects.length}
                </span>
                <button
                  onClick={handleNextProject}
                  className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/60 active:scale-95"
                  title="Next Project"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
            )}
          </div>

          <div 
            ref={scrollCarouselRef}
            className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700 snap-x snap-mandatory"
          >
            {filteredProjects.map((project, idx) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`snap-start flex-shrink-0 w-64 sm:w-72 p-3 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-500/10 ring-1 ring-blue-500/50'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${project.badgeColor}`}>
                      {project.categoryLabel}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] text-blue-400 font-bold flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Viewing
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white truncate">{project.title}</h4>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{project.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main iFrame Browser Showcase Window */}
        <div className={`transition-all duration-300 ${isExpanded ? 'fixed inset-2 sm:inset-4 z-50 bg-slate-950/95 backdrop-blur-2xl p-2 sm:p-6 rounded-2xl border border-slate-800 overflow-y-auto' : 'relative'}`}>
          
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Top Browser Control Bar */}
            <div className="bg-slate-900 px-3 py-3 sm:py-2.5 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-2">
              
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Mobile Quick Action Buttons */}
                <div className="flex items-center gap-2 ml-auto sm:hidden">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all active:scale-95"
                    title="Open in new tab"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                  </a>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors active:scale-95"
                    title={isExpanded ? 'Minimize' : 'Expand Fullscreen'}
                    aria-label={isExpanded ? 'Minimize' : 'Expand Fullscreen'}
                  >
                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-full sm:max-w-md mx-auto flex items-center bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 shadow-inner min-w-[200px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span className="text-slate-500 select-none mr-0.5 hidden sm:inline">
                  {selectedProject.url.startsWith('https://') ? 'https://' : selectedProject.url.startsWith('http://') ? 'http://' : ''}
                </span>
                <span className="truncate font-mono text-xs text-slate-200">
                  {selectedProject.url.replace(/^https?:\/\//, '')}
                </span>
                
                <div className="ml-auto flex items-center gap-1.5 pl-2 border-l border-slate-800">
                  <button 
                    onClick={handleCopyUrl}
                    title="Copy URL"
                    aria-label="Copy URL"
                    className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white active:scale-90 transition-all"
                  >
                    {copiedUrl ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={handleRefreshIframe}
                    title="Refresh Preview"
                    aria-label="Refresh Preview"
                    className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white active:scale-90 transition-all"
                  >
                    <RotateCw className={`w-4 h-4 ${isLoadingIframe ? 'animate-spin text-blue-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Viewport Resizer & Actions */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 gap-1">
                  <button
                    onClick={() => setViewportMode('desktop')}
                    title="Desktop View"
                    className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                      viewportMode === 'desktop' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewportMode('tablet')}
                    title="Tablet View"
                    className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                      viewportMode === 'tablet' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewportMode('mobile')}
                    title="Mobile View"
                    className={`p-2 rounded-lg text-xs font-medium transition-colors ${
                      viewportMode === 'mobile' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all active:scale-95"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </a>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors active:scale-95"
                  title={isExpanded ? 'Minimize' : 'Expand Fullscreen'}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Mobile Viewport Switcher Bar */}
            <div className="flex sm:hidden items-center justify-between bg-slate-950 px-3 py-2 border-b border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400">Preview Mode:</span>
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setViewportMode('desktop')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewportMode === 'desktop' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" /> Desktop
                </button>
                <button
                  onClick={() => setViewportMode('tablet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewportMode === 'tablet' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" /> Tablet
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewportMode === 'mobile' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" /> Mobile
                </button>
              </div>
            </div>

            {viewportMode === 'desktop' && isMobileScreen && (
              <div className="bg-blue-950/90 border-b border-blue-900/80 px-3.5 py-2 flex items-center justify-between text-xs text-blue-200">
                <span className="flex items-center gap-2 font-medium">
                  <MoveHorizontal className="w-4 h-4 text-blue-400 animate-pulse" /> Swipe horizontally to pan desktop preview
                </span>
                <button 
                  onClick={() => setViewportMode('mobile')}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] shadow-sm"
                >
                  Fit Mobile
                </button>
              </div>
            )}

            {/* iFrame Container */}
            <div className="bg-slate-950 p-2 sm:p-4 flex items-center justify-center min-h-[460px] sm:min-h-[520px] relative overflow-x-auto touch-pan-x transition-all duration-300">
              
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={handlePrevProject}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-100 backdrop-blur-md shadow-2xl flex items-center justify-center hover:bg-blue-600 active:bg-blue-700 active:scale-90 transition-all"
                    title="Previous Project"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNextProject}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-100 backdrop-blur-md shadow-2xl flex items-center justify-center hover:bg-blue-600 active:bg-blue-700 active:scale-90 transition-all"
                    title="Next Project"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {!useFallbackMode ? (
                <div className={`transition-all duration-300 ease-out mx-auto relative ${getViewportWidthClass()}`}>
                  
                  {isLoadingIframe && (
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3 rounded-xl">
                      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs font-medium text-slate-400">Loading {selectedProject.title} frame...</p>
                    </div>
                  )}

                  <iframe
                    ref={iframeRef}
                    src={selectedProject.url}
                    title={`${selectedProject.title} Live Preview`}
                    className="w-full h-full border-0 bg-white rounded-lg shadow-inner"
                    onLoad={handleIframeLoad}
                    onError={() => {
                      setIsLoadingIframe(false);
                      setUseFallbackMode(true);
                    }}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              ) : (
                <div className="w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 text-left">
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-slate-800 relative group">
                    <img 
                      src={selectedProject.fallbackImg} 
                      alt={selectedProject.title}
                      className="w-full h-52 sm:h-64 object-cover" 
                    />
                  </div>

                  <div className="w-full md:w-1/2 space-y-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border ${selectedProject.badgeColor}`}>
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.description}</p>
                    
                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
                      >
                        Launch Live Site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setUseFallbackMode(false)}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700"
                      >
                        Retry Frame
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Frame Footer */}
            <div className="bg-slate-900/90 px-3.5 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2 truncate">
                <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="truncate">Live iframe for <strong>{selectedProject.title}</strong></span>
              </div>

              <button 
                onClick={() => setUseFallbackMode(!useFallbackMode)}
                className="p-1 text-slate-300 hover:text-blue-400 underline underline-offset-2 font-medium transition-colors ml-auto text-xs"
              >
                {useFallbackMode ? 'Switch to iFrame View' : 'Frame load issue? Use Image View'}
              </button>
            </div>

          </div>
        </div>

        {/* Project Breakdown */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-8 space-y-5 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${selectedProject.badgeColor}`}>
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Project Breakdown</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">{selectedProject.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">{selectedProject.description}</p>
            </div>

            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              Open Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> Initial Load
              </div>
              <div className="text-lg font-extrabold text-white">{selectedProject.stats.loadSpeed}</div>
              <p className="text-[10px] text-slate-500">Fast initial page rendering speed</p>
            </div>

            <div className="space-y-1 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Performance Metric
              </div>
              <div className="text-lg font-extrabold text-white">{selectedProject.stats.conversionIncrease}</div>
              <p className="text-[10px] text-slate-500">Business impact & performance score</p>
            </div>

            <div className="space-y-1 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Key Stack
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {selectedProject.tags.map(t => (
                  <span key={t} className="text-[10px] font-medium bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default WorkSection;