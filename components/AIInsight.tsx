
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { getSlideInsight } from '../services/geminiService';

interface AIInsightProps {
  prompt: string;
  fallback: string;
  slideId: number;
}

const AIInsight: React.FC<AIInsightProps> = ({ prompt, fallback, slideId }) => {
  const [insight, setInsight] = useState<string>(fallback);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchInsight = async () => {
      setLoading(true);
      const result = await getSlideInsight(prompt);
      if (isMounted) {
        setInsight(result || fallback);
        setLoading(false);
      }
    };

    fetchInsight();
    return () => { isMounted = false; };
  }, [prompt, fallback, slideId]);

  return (
    <div className="fixed bottom-12 left-12 z-50 max-w-sm pointer-events-none md:pointer-events-auto">
      <motion.div
        key={slideId}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="bg-slate-900/40 backdrop-blur-2xl border border-cyan-500/10 p-6 rounded-[2rem] shadow-2xl shadow-cyan-900/20 group"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-cyan-500/10 rounded-xl">
            <BrainCircuit className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">AI Strategic Assistant</span>
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Live Analysis</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.p 
            key={insight}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-200 text-sm leading-relaxed font-light italic border-l border-cyan-500/20 pl-4 py-1"
          >
            {loading ? (
              <span className="inline-block animate-pulse text-cyan-400/50">Decodificando patrones estratégicos...</span>
            ) : (
              insight
            )}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AIInsight;
