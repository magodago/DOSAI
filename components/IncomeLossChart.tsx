
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface IncomeLossChartProps {
  data: any[];
}

const IncomeLossChart: React.FC<IncomeLossChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[350px] md:h-[450px]">
      <h3 className="text-[10px] font-black uppercase text-cyan-500 tracking-[0.4em] mb-8 text-center">Simulación de Escalamiento con IA</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPotential" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#475569" 
            fontSize={10}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis 
            stroke="#475569" 
            fontSize={10}
            tickLine={false}
            axisLine={false}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '11px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            itemStyle={{ padding: '2px 0' }}
          />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }} />
          <Area 
            type="monotone" 
            dataKey="perdida" 
            name="Fuga de Capital" 
            stroke="#ef4444" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorLoss)" 
          />
          <Area 
            type="monotone" 
            dataKey="potencial" 
            name="Crecimiento IA" 
            stroke="#06b6d4" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorPotential)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeLossChart;
