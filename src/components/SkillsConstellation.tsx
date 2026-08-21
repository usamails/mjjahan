import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { SKILL_CONSTELLATION_NODES, PERSONAL_INFO } from '../data/portfolioData';
import { SkillNode } from '../types/portfolio';

export default function SkillsConstellation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNode, setActiveNode] = useState<SkillNode | null>(SKILL_CONSTELLATION_NODES[0]);

  const categories = [
    { id: 'all', label: 'All Ecosystem' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'tech', label: 'Tech & AI' },
    { id: 'travel', label: 'Travel & GDS' },
  ];

  const filteredNodes = selectedCategory === 'all'
    ? SKILL_CONSTELLATION_NODES
    : SKILL_CONSTELLATION_NODES.filter(n => n.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Skill Constellation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-display"
          >
            Digital Ecosystem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            An interconnected network of marketing channels, technical infrastructure, and international travel logistics.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Constellation Visual Stage */}
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Constellation Canvas (Desktop & Tablet) */}
          <div className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center">
            
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                  <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
                </linearGradient>
              </defs>
              
              {/* Connecting rays from center (50%, 50%) to each filtered node */}
              {filteredNodes.map((node) => (
                <line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`${node.xPercent}%`}
                  y2={`${node.yPercent}%`}
                  stroke="url(#lineGrad)"
                  strokeWidth={activeNode?.id === node.id ? 2 : 1}
                  strokeDasharray={activeNode?.id === node.id ? "4 2" : "none"}
                  className="transition-all duration-300"
                />
              ))}
            </svg>

            {/* Central JAHAN ALI Nucleus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-700 p-1 shadow-2xl shadow-cyan-500/30 flex items-center justify-center cursor-default"
              >
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    NUCLEUS
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white tracking-wide font-display">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium">
                    Growth Hub
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating Orbiting Skill Nodes */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {filteredNodes.map((node) => {
                const isActive = activeNode?.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      left: `${node.xPercent}%`,
                      top: `${node.yPercent}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute pointer-events-auto"
                  >
                    <button
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => setActiveNode(node)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 shadow-lg cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950 border-2 border-white scale-110 shadow-cyan-500/40 z-30'
                          : 'bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        node.category === 'marketing' ? 'bg-cyan-400' :
                        node.category === 'tech' ? 'bg-blue-400' : 'bg-indigo-400'
                      }`} />
                      <span>{node.name}</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Active Node Detail Inspector Card */}
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-sm">
                    {activeNode.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">
                        {activeNode.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 uppercase">
                        {activeNode.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {activeNode.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Integrated Skill Discipline</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
