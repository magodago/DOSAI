
import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Mic, MessageSquare, Settings, ArrowRight, TrendingDown, 
  BrainCircuit, Globe, Target, Quote, Star, CheckCircle, 
  Utensils, Scissors, ShoppingBag, Stethoscope, MessageCircle,
  Zap, Users, Clock, Sparkles, ShieldCheck
} from 'lucide-react';
import { SLIDES, TESTIMONIALS, WHATSAPP_URL, SECTORS, COMPARISON_DATA } from './constants.tsx';
import IncomeLossChart from './components/IncomeLossChart.tsx';

const IconMap: any = {
  Utensils, Scissors, ShoppingBag, Stethoscope, Mic, Settings, Target
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-cyan-500/30 overflow-x-hidden">
      {/* CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: bgY }} className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="shooting-star"></div>
          ))}
        </div>
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-900/10 blur-[150px] rounded-full" 
        />
      </div>

      {/* PERSISTENT WHATSAPP BUBBLE */}
      <motion.div 
        className="fixed bottom-8 right-8 z-[100]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <a href={WHATSAPP_URL} target="_blank" className="relative block group">
          <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition-all animate-pulse" />
          <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] group-hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white fill-white" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-slate-950 flex items-center justify-center text-[10px] font-black text-white">1</div>
          </div>
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-slate-950 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Respondo en &lt; 5 min
          </div>
        </a>
      </motion.div>

      {/* TOP SCARCITY BANNER */}
      <div className="fixed top-0 left-0 w-full z-[70] bg-cyan-500/10 backdrop-blur-md border-b border-cyan-500/20 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4 text-center">
          <span className="hidden md:block h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
            Agenda Abierta: Solo 2 plazas libres para nuevos proyectos este mes
          </p>
        </div>
      </div>

      <header className="fixed top-12 left-0 w-full p-6 md:px-10 z-[60]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 border border-cyan-500/20 rounded-xl flex items-center justify-center font-roboto-black-italic text-2xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">DO</div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-[0.4em] text-white uppercase">David Ortiz</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-cyan-500">IA de Alto Rendimiento</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center p-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-6xl">
            <div className="inline-flex items-center gap-6 mb-12 flex-wrap justify-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[8px] font-black text-cyan-500">
                    {['B', 'R', 'P', 'S'][i]}
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">+12 Negocios automatizados este mes</p>
            </div>
            
            <h1 className="font-roboto-black-italic text-[14vw] md:text-[10rem] leading-[0.8] mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              VIVE <br/> <span className="text-cyan-500">EL FUTURO.</span>
            </h1>
            <p className="text-xl md:text-4xl font-light text-slate-400 max-w-4xl mx-auto italic leading-tight mb-16 px-4">
              "No implementamos tecnología. Diseñamos libertad financiera a través de la IA."
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href={WHATSAPP_URL} target="_blank" className="bg-cyan-500 text-slate-950 px-12 py-6 rounded-full font-roboto-black-italic uppercase text-xl md:text-2xl shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all inline-block">
                  Auditoría Gratuita 15 min
                </a>
              </motion.div>
              <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 text-cyan-500" />
                Sin compromiso de permanencia
              </div>
            </div>
          </motion.div>
        </section>

        {/* COST COMPARISON */}
        <section className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-900/30">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-16">
              <h2 className="font-roboto-black-italic text-5xl md:text-8xl text-white mb-6 uppercase italic leading-none">
                MUCHO <span className="text-cyan-500">MENOS</span> DE LO QUE <span className="text-cyan-500">PIENSAS.</span>
              </h2>
              <p className="text-slate-400 text-xl font-light italic">La IA es el empleado más rentable que jamás tendrás.</p>
            </div>
            
            <div className="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative">
              <div className="grid grid-cols-3 bg-white/5 p-8 border-b border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                <div>Concepto</div>
                <div className="text-center">Empleado Humano</div>
                <div className="text-center text-cyan-500">Agente IA</div>
              </div>
              {COMPARISON_DATA.map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-8 border-b border-white/5 last:border-0 items-center">
                  <div className="font-black uppercase text-xs text-white">{row.label}</div>
                  <div className="text-center text-slate-400 font-light italic">{row.human}</div>
                  <div className="text-center text-cyan-400 font-black italic flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" /> {row.ai}
                  </div>
                </div>
              ))}
              <div className="p-10 bg-cyan-500/5 text-center">
                <p className="text-slate-400 text-sm italic mb-6">"El ROI suele ser positivo desde el primer mes."</p>
                <div className="inline-block px-8 py-3 bg-white/5 border border-cyan-500/30 rounded-2xl text-cyan-400 text-xs font-black uppercase tracking-widest">
                  Ahorro anual estimado: > 15.000€
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-20">
              <h2 className="font-roboto-black-italic text-5xl md:text-8xl text-white mb-6 uppercase italic">
                Sectores <span className="text-cyan-500">Ganadores</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SECTORS.map((sector, i) => {
                const Icon = IconMap[sector.icon];
                return (
                  <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] backdrop-blur-md group hover:border-cyan-500/30 transition-all">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-cyan-500 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <h4 className="font-roboto-black-italic text-2xl text-white mb-4 italic uppercase">{sector.name}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed italic">{sector.impact}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="min-h-screen flex items-center justify-center p-6 bg-slate-900/20">
          <div className="max-w-7xl w-full">
            <h2 className="font-roboto-black-italic text-5xl md:text-8xl text-center text-white mb-20 uppercase italic">
              RESULTADOS <span className="text-cyan-500">RECIENTES</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, scale: 1 }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                  <Quote className="w-10 h-10 text-cyan-500 mb-6 opacity-30" />
                  <p className="text-xl font-light italic text-slate-200 mb-10 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-black text-slate-950">{t.avatar}</div>
                    <div>
                      <h4 className="font-black uppercase text-xs text-white">{t.name}</h4>
                      <p className="text-[10px] text-cyan-500 uppercase tracking-widest">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-5xl w-full text-center">
            <h2 className="font-roboto-black-italic text-4xl md:text-7xl text-white mb-16 leading-tight uppercase italic">
              TU <span className="text-cyan-500">MÁXIMO</span> POTENCIAL
            </h2>
            <div className="bg-slate-900/30 p-8 rounded-[3rem] border border-white/5 shadow-inner">
              <IncomeLossChart data={SLIDES[3].content.chartData} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="min-h-screen flex items-center justify-center p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] pointer-events-none" />
          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} className="max-w-4xl relative z-10">
            <h2 className="font-roboto-black-italic text-[16vw] md:text-[12rem] text-white leading-[0.75] mb-20 italic uppercase">
              TU <br/> <span className="text-cyan-500">TURNO.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl animate-pulse rounded-full" />
              <a href={WHATSAPP_URL} target="_blank" className="group relative inline-flex items-center gap-10 bg-white text-slate-950 px-8 md:px-24 py-10 md:py-12 rounded-full font-roboto-black-italic uppercase text-3xl md:text-5xl shadow-2xl hover:bg-cyan-500 transition-all duration-700">
                HABLAR CON DAVID
                <ArrowRight className="w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-6 transition-transform" />
              </a>
            </motion.div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 px-4">
              {['Resultados Reales', 'Implementación Rápida', 'Soporte Directo', 'Escalado IA'].map((tag, i) => (
                <div key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3 text-cyan-500" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="p-10 flex flex-col md:flex-row justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-slate-700 gap-6">
        <div>© DAVID ORTIZ CONSULTING 2025</div>
        <div className="flex gap-10">
          <span>PRIVACIDAD</span>
          <span>ESTRATEGIA DE ALTO NIVEL</span>
        </div>
      </footer>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]" style={{ scaleX }} />
    </div>
  );
};

export default App;
