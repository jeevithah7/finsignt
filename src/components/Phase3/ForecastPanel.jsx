import React from 'react';

export default function ForecastPanel() {
  const chartHeight = 72;
  const chartWidth = 328;
  const xStep = chartWidth / 5;
  const yValues = { 80: 0, 120: 36, 160: 72 };
  const valToY = (val) => chartHeight - ((val - 80) / (160 - 80) * chartHeight);

  const actPts = [[0, 98], [1, 142], [2, 138]];
  const forPts = [[2, 138], [3, 152], [4, 168], [5, 185]];

  return (
    <div style={{
      width: '380px', height: '100%', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
      borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04)',
      display: 'flex', flexDirection: 'column'
    }}>
      
      {/* HEADER */}
      <div style={{ padding: '16px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
         <h2 style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', margin: 0 }}>Q1 2025 Forecast</h2>
         <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: '6px', fontSize: '10.5px', fontWeight: 600, color: '#10B981', fontFamily: 'Inter' }}>
           73% confidence
         </div>
      </div>

      {/* GAUGE SECTION */}
      <div style={{ padding: '12px 20px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg width="130" height="72" viewBox="0 0 130 72">
          <defs>
             <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#6366F1" />
               <stop offset="100%" stopColor="#10B981" />
             </linearGradient>
          </defs>
          <path d="M 13 65 A 52 52 0 0 1 117 65" stroke="#E2E8F0" strokeWidth="11" fill="none" strokeLinecap="round" />
          {/* ~126 deg length out of 180 total. Circumference of half circle = pi*r = 3.1415*52 = ~163.3. 126/180 * 163.3 = ~114 */}
          <path d="M 13 65 A 52 52 0 0 1 117 65" stroke="url(#gaugeGrad)" strokeWidth="11" fill="none" strokeLinecap="round" strokeDasharray="163.3" strokeDashoffset={163.3 - 114} />
        </svg>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', fontFamily: 'Inter', marginTop: '6px', lineHeight: 1 }}>$5.1M</div>
        <div style={{ fontSize: '11px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter', marginTop: '2px' }}>Projected Q1 Revenue</div>
      </div>

      {/* RISK HEATMAP */}
      <div style={{ padding: '8px 16px' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '6px', fontFamily: 'Inter' }}>RISK HEATMAP</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
          {['Churn↓', 'Burn+', 'ARR↑', 'Infra', 'CAC↓', 'NRR↑', 'FX', 'LTV↑', 'NDR↑', 'Debt', 'Mktg', 'MRR↑'].map((lbl, i) => {
            const isGreen = [0, 2, 5, 7, 8, 11].includes(i);
            const isRed = [3, 9].includes(i);
            const isIndigo = [4].includes(i);
            const isAmber = !isGreen && !isRed && !isIndigo;
            const bg = isGreen ? '#10B981' : isRed ? '#EF4444' : isIndigo ? '#6366F1' : '#F59E0B';
            return (
              <div key={i} style={{ height: '30px', backgroundColor: bg, borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 600, fontFamily: 'Inter' }}>
                {lbl}
              </div>
            )
          })}
        </div>
      </div>

      {/* PROFIT TREND CHART */}
      <div style={{ padding: '8px 16px 16px', position: 'relative', flex: 1 }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '4px', fontFamily: 'Inter' }}>PROFIT TREND</div>
        
        <div style={{ display: 'flex', height: `${chartHeight}px`, position: 'relative' }}>
          {/* Y AXIS */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '14px', width: '32px' }}>
             <div style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$160K</div>
             <div style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$120K</div>
             <div style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$80K</div>
          </div>

          <div style={{ flex: 1, position: 'relative' }}>
            <svg width="100%" height={chartHeight} style={{ overflow: 'visible' }}>
              {/* Gridlines */}
              {[valToY(160), valToY(120), valToY(80)].map((y, i) => (
                <line key={i} x1="0" y1={y} x2={chartWidth-32} y2={y} stroke="rgba(226,232,240,0.5)" strokeWidth="0.5" strokeDasharray="2 2" />
              ))}

              {/* Confidence Band (Polygon) - roughly mapping +15% upper bound */}
              <polygon points={`
                ${2*xStep},${valToY(138)}
                ${3*xStep},${valToY(152)}
                ${4*xStep},${valToY(168)}
                ${5*xStep},${valToY(185)}
                ${5*xStep},${valToY(185*1.15)}
                ${4*xStep},${valToY(168*1.15)}
                ${3*xStep},${valToY(152*1.15)}
                ${2*xStep},${valToY(138*1.15)}
              `} fill="rgba(16,185,129,0.08)" />

              {/* Actual Line */}
              <polyline points={actPts.map(p => `${p[0]*xStep},${valToY(p[1])}`).join(' ')} fill="none" stroke="#6366F1" strokeWidth="2" />
              {actPts.map(p => <circle key={p[0]} cx={p[0]*xStep} cy={valToY(p[1])} r="3" fill="#6366F1" />)}

              {/* Forecast Line */}
              <polyline points={forPts.map(p => `${p[0]*xStep},${valToY(p[1])}`).join(' ')} fill="none" stroke="#10B981" strokeWidth="1.8" strokeDasharray="4 3" />
              {forPts.map(p => {
                if(p[0] === 2) return null; // Don't overlay start
                return <circle key={p[0]} cx={p[0]*xStep} cy={valToY(p[1])} r="3" fill="#FFFFFF" stroke="#10B981" />
              })}

              {/* Divider */}
              <line x1={2*xStep} y1="0" x2={2*xStep} y2={chartHeight} stroke="#CBD5E1" strokeWidth="0.75" strokeDasharray="2 2" />
              <text x={2*xStep + 4} y="10" fontSize="8" fontWeight="600" fill="#94A3B8" fontFamily="Inter">Forecast →</text>
            </svg>

            {/* X AXIS */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '-14px', left: 0, right: 0, transform: 'translateX(-10px)' }}>
               {['Oct', 'Nov', 'Dec', 'Q1F', 'Q2F', 'Q3F'].map(l => (
                 <div key={l} style={{ width: '20px', textAlign: 'center', fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>{l}</div>
               ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
