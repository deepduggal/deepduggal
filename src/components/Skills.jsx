import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Check, 
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';

// Crisp, self-contained SVG brand icons for exact visual matching without external image assets
const TechIcon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    javascript: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M6.5 18.5V13.8H8.3V18.5C8.3 19.8 7.4 20.3 6.3 20.3C5.3 20.3 4.5 19.7 4.3 18.9L5.8 18.3C5.9 18.6 6.1 18.9 6.4 18.9C6.8 18.9 6.5 18.5 6.5 18.5ZM12.2 18.7C12.7 18.7 13.1 18.4 13.2 17.9L14.7 18.5C14.3 19.6 13.3 20.3 12 20.3C10.2 20.3 9 19 9 17.1C9 15.2 10.2 13.8 12.1 13.8C13.8 13.8 14.6 15 14.5 16.6H10.6C10.7 17.5 11.2 18.7 12.2 18.7ZM10.6 15.6H13C12.9 15 12.5 14.7 12 14.7C11.4 14.7 10.8 15.1 10.6 15.6Z" fill="#000000"/>
      </svg>
    ),
    typescript: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M11.5 11.5H5V13H7.3V20H9.2V13H11.5V11.5ZM17.3 13.8C16.4 13.8 15.6 14.3 15.6 15.2C15.6 17 18.6 16.7 18.6 18.5C18.6 19.2 17.8 19.5 17 19.5C15.8 19.5 15.1 18.8 14.8 18L13.4 18.7C13.9 20 15.2 20.8 16.9 20.8C18.8 20.8 20.2 19.8 20.2 18.3C20.2 16.3 17.2 16.7 17.2 15C17.2 14.5 17.8 14.3 18.3 14.3C19.2 14.3 19.8 14.8 20.1 15.4L21.3 14.5C20.7 13.5 19.5 12.8 17.9 12.8" fill="white"/>
      </svg>
    ),
    react: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    nextjs: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="black" stroke="#333" strokeWidth="1"/>
        <path d="M14.8 16.5L9.2 8.5H8V16H9.3V10.3L14.3 17.5C14.5 17.2 14.7 16.9 14.8 16.5Z" fill="white"/>
        <rect x="15" y="8.5" width="1.3" height="7.5" fill="white"/>
      </svg>
    ),
    nodejs: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" fill="#339933"/>
        <path d="M12 4.2L18.8 8.1V15.9L12 19.8L5.2 15.9V8.1L12 4.2Z" fill="#539E43"/>
      </svg>
    ),
    html5: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.6 20L12 22L18.4 20L20 3H4Z" fill="#E34F26"/>
        <path d="M12 4.8V20.2L17 18.8L18.3 4.8H12Z" fill="#EF652A"/>
        <path d="M7.8 7.8H16.2L15.9 10.4H10.4L10.7 13H15.6L15.2 17.1L12 18L8.8 17.1L8.6 14.6H10.1L10.2 15.8L12 16.3L13.8 15.8L14 13.9H8.2L7.8 7.8Z" fill="white"/>
      </svg>
    ),
    css3: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3L5.6 20L12 22L18.4 20L20 3H4Z" fill="#1572B6"/>
        <path d="M12 4.8V20.2L17 18.8L18.3 4.8H12Z" fill="#33A9DC"/>
        <path d="M16.1 7.8H7.8L8.1 10.4H15.8L15.4 14.6L12 15.5L8.6 14.6L8.4 13H6.9L7.2 16.1L12 17.4L16.8 16.1L17.5 7.8H16.1Z" fill="white"/>
      </svg>
    ),
    mongodb: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C11.6 4.3 11.2 6.6 9 8.2C6.8 9.8 4 11 4 14.5C4 18.6 7.6 22 12 22C16.4 22 20 18.6 20 14.5C20 11 17.2 9.8 15 8.2C12.8 6.6 12.4 4.3 12 2Z" fill="#47A248"/>
        <path d="M12 2V22C12.5 22 13 21.8 13.5 21.5C16.5 19.8 18 17.1 18 14C18 10.9 15.8 9.5 13.7 7.9C12.8 7.2 12.3 5.4 12 2Z" fill="#499D4A"/>
      </svg>
    ),
    graphql: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="#E10098" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="2" r="2" fill="#E10098"/>
        <circle cx="3.5" cy="7" r="2" fill="#E10098"/>
        <circle cx="3.5" cy="17" r="2" fill="#E10098"/>
        <circle cx="12" cy="22" r="2" fill="#E10098"/>
        <circle cx="20.5" cy="17" r="2" fill="#E10098"/>
        <circle cx="20.5" cy="7" r="2" fill="#E10098"/>
      </svg>
    ),
    git: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.7 10.8L13.2 2.3C12.6 1.7 11.6 1.7 11 2.3L2.3 11C1.7 11.6 1.7 12.6 2.3 13.2L10.8 21.7C11.4 22.3 12.4 22.3 13 21.7L21.7 13C22.3 12.4 22.3 11.4 21.7 10.8Z" fill="#F05032"/>
        <circle cx="12" cy="8" r="1.8" fill="white"/>
        <circle cx="12" cy="16" r="1.8" fill="white"/>
        <circle cx="16" cy="12" r="1.8" fill="white"/>
        <path d="M12 8V16M12 12H16" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    redux: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 6C14 6 12 7.5 11 9.5C10 7.5 8 6 5.5 6C2.5 6 0 8.5 0 11.5C0 16 7 21 11 23.5C11.3 23.7 11.7 23.7 12 23.5C16 21 23 16 23 11.5C23 8.5 20.5 6 17.5 6H16.5Z" fill="#764ABC"/>
      </svg>
    )
  };

  return icons[name.toLowerCase()] || <DynamicIcon name={name.toLowerCase()} /> || <Code2 className={`${className} text-blue-400`} />;
};

// Complete Dataset based on your original skills list with categories & visual meter levels
const DEFAULT_SKILL_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Front-End' },
  { id: 'backend', label: 'Back-End' },
  { id: 'devops', label: 'DevOps & Testing' },
  { id: 'practices', label: 'Engineering Practices' }
];

const SKILLS_DATA = [
  // FRONT-END
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'JavaScript (ES6+)',
    iconKey: 'javascript',
    level: 'Advanced',
    percent: 92,
    color: 'from-amber-400 to-yellow-500'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'TypeScript',
    iconKey: 'typescript',
    level: 'Advanced',
    percent: 88,
    color: 'from-blue-400 to-blue-600'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'React',
    iconKey: 'react',
    level: 'Advanced',
    percent: 95,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'Next.js',
    iconKey: 'nextjs',
    level: 'Advanced',
    percent: 85,
    color: 'from-slate-200 to-slate-400'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'HTML5',
    iconKey: 'html5',
    level: 'Advanced',
    percent: 95,
    color: 'from-orange-500 to-amber-600'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'CSS3 / SASS',
    iconKey: 'css3',
    level: 'Advanced',
    percent: 90,
    color: 'from-blue-500 to-sky-400'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'Redux',
    iconKey: 'redux',
    level: 'Proficient',
    percent: 82,
    color: 'from-purple-400 to-indigo-500'
  },
  {
    category: 'frontend',
    categoryTitle: 'FRONT-END',
    name: 'React Native & Expo',
    iconKey: 'react',
    level: 'Proficient',
    percent: 80,
    color: 'from-sky-400 to-indigo-400'
  },

  // BACK-END & DATABASES
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'Node.js',
    iconKey: 'nodejs',
    level: 'Advanced',
    percent: 88,
    color: 'from-emerald-400 to-green-600'
  },
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'Express.js',
    iconKey: 'nodejs',
    level: 'Advanced',
    percent: 86,
    color: 'from-gray-300 to-gray-500'
  },
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'MongoDB & Mongoose',
    iconKey: 'mongodb',
    level: 'Proficient',
    percent: 82,
    color: 'from-green-500 to-emerald-700'
  },
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'Cloud Firestore',
    iconKey: 'mongodb',
    level: 'Proficient',
    percent: 78,
    color: 'from-amber-500 to-orange-600'
  },
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'GraphQL',
    iconKey: 'graphql',
    level: 'Competent',
    percent: 72,
    color: 'from-pink-500 to-rose-600'
  },
  {
    category: 'backend',
    categoryTitle: 'BACK-END & DATABASES',
    name: 'SQL & Relational DBs',
    iconKey: 'git',
    level: 'Advanced',
    percent: 86,
    color: 'from-sky-500 to-blue-600'
  },

  // TESTING & DEVOPS
  {
    category: 'devops',
    categoryTitle: 'TESTING & DEVOPS',
    name: 'Jest & Enzyme',
    iconKey: 'git',
    level: 'Advanced',
    percent: 85,
    color: 'from-red-400 to-rose-600'
  },
  {
    category: 'devops',
    categoryTitle: 'TESTING & DEVOPS',
    name: 'RN Testing Library',
    iconKey: 'react',
    level: 'Proficient',
    percent: 78,
    color: 'from-cyan-400 to-blue-600'
  },
  {
    category: 'devops',
    categoryTitle: 'TESTING & DEVOPS',
    name: 'Git & GitHub Workflows',
    iconKey: 'git',
    level: 'Advanced',
    percent: 90,
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'devops',
    categoryTitle: 'TESTING & DEVOPS',
    name: 'Webpack & Tooling',
    iconKey: 'javascript',
    level: 'Advanced',
    percent: 89,
    color: 'from-blue-400 to-indigo-500'
  },

  // ENGINEERING PRACTICES
  {
    category: 'practices',
    categoryTitle: 'ENGINEERING PRACTICES',
    name: 'Object-Oriented Programming (OOP)',
    iconKey: 'javascript',
    level: 'Advanced',
    percent: 90,
    color: 'from-blue-400 to-indigo-600'
  },
  {
    category: 'practices',
    categoryTitle: 'ENGINEERING PRACTICES',
    name: 'Data Structures & Algorithms',
    iconKey: 'typescript',
    level: 'Proficient',
    percent: 80,
    color: 'from-purple-400 to-violet-600'
  },
  {
    category: 'practices',
    categoryTitle: 'ENGINEERING PRACTICES',
    name: 'Responsive & Accessible Web (a11y)',
    iconKey: 'html5',
    level: 'Advanced',
    percent: 94,
    color: 'from-teal-400 to-emerald-500'
  },
  {
    category: 'practices',
    categoryTitle: 'ENGINEERING PRACTICES',
    name: 'AI Pair Programming & Debugging',
    iconKey: 'sparkles',
    level: 'Advanced',
    percent: 92,
    color: 'from-sky-400 to-blue-600'
  }
];

// Single skill item displaying logo, title, proficiency badge, and progress bar
function SkillCardRow({ skill }) {
  return (
    <div className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-200">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Icon Circle */}
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 shadow-inner flex-shrink-0 group-hover:scale-105 transition-transform">
          <TechIcon name={skill.iconKey} className="w-5 h-5" />
        </div>

        {/* Name & Level */}
        <div className="min-w-0 flex-1 pr-2">
          <div className="flex items-baseline justify-between mb-1">
            <h4 className="text-sm font-semibold text-slate-100 truncate group-hover:text-blue-300 transition-colors">
              {skill.name}
            </h4>
            <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 ml-2 flex-shrink-0">
              {skill.level}
            </span>
          </div>

          {/* Visual Progress Bar */}
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-700/30">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills({ customSkills = null }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Allow fallback to user prop if passed, or use enhanced mockup default
  const allSkills = customSkills 
    ? customSkills.map(s => ({
        category: 'frontend',
        categoryTitle: 'SKILLS',
        name: typeof s === 'string' ? s : s.label,
        iconKey: 'javascript',
        level: 'Proficient',
        percent: 85,
        color: 'from-blue-500 to-indigo-500'
      }))
    : SKILLS_DATA;

  // Filter skills based on selected category tab & search input
  const filteredSkills = useMemo(() => {
    return allSkills.filter(skill => {
      const matchesCategory = activeTab === 'all' || skill.category === activeTab;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkills, activeTab, searchQuery]);

  // Group filtered skills by Category Title
  const groupedSkills = useMemo(() => {
    const groups = {};
    filteredSkills.forEach(skill => {
      if (!groups[skill.categoryTitle]) {
        groups[skill.categoryTitle] = [];
      }
      groups[skill.categoryTitle].push(skill);
    });
    return groups;
  }, [filteredSkills]);

  return (
    <>
      {/* Filter Tabs & Search Bar Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-2.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
          {DEFAULT_SKILL_CATEGORIES.map(category => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search Field */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Filter skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Categorized Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {Object.keys(groupedSkills).length === 0 ? (
          <div className="col-span-full text-center py-12 bg-slate-900/40 rounded-2xl border border-dashed border-slate-800 text-slate-400 text-sm">
            No matching skills found. Try searching for another keyword.
          </div>
        ) : (
          Object.entries(groupedSkills).map(([title, items]) => (
            <div 
              key={title} 
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Card Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <h3 className="text-base font-bold tracking-wider text-slate-200 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shadow-sm shadow-blue-500/80" />
                    {title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-400">
                    {items.length} Skills
                  </span>
                </div>

                {/* 2-Column Skill Grid within Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((skill, index) => (
                    <SkillCardRow key={`${skill.name}-${index}`} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Legend & Quick Summary Footer */}
      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400 gap-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Advanced (88%+)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> Proficient (78%+)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-400" /> Competent (70%+)
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Continuous Learning & AI Integration
        </div>
      </div>
    </>
  );
}

export default Skills;