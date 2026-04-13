import React, { useState } from 'react';

export default function Forecasting() {
  const [showActuals, setShowActuals] = useState(true);
  const [activeScenario, setActiveScenario] = useState('Base');

  return (
    <div className="page-transition-enter" style={{ 
      width: '100%', flex: 1, backgroundColor: 'transparent',
      padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
      boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
    }}>
          
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Forecasting
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                AI-powered interactive margin and revenue projections
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                 <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>Show actuals overlay</span>
                 <div onClick={() => setShowActuals(!showActuals)} style={{ width: '32px', height: '18px', backgroundColor: showActuals ? '#6366F1' : '#E2E8F0', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                    <div style={{ width: '14px', height: '14px', backgroundColor: '#FFFFFF', borderRadius: '50%', position: 'absolute', top: '2px', left: showActuals ? '16px' : '2px', transition: '0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
                 </div>
              </div>
              <button style={{ height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                Recalculate Model
              </button>
            </div>
          </div>

          {/* 3 SCENARIO CARDS */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <ScenarioCard title="Conservative" value="$18.5M" conf="92% Confidence" isActive={activeScenario === 'Conservative'} onClick={() => setActiveScenario('Conservative')} />
            <ScenarioCard title="Base" value="$22.4M" conf="73% Confidence" isActive={activeScenario === 'Base'} onClick={() => setActiveScenario('Base')} />
            <ScenarioCard title="Optimistic" value="$28.1M" conf="45% Confidence" isActive={activeScenario === 'Optimistic'} onClick={() => setActiveScenario('Optimistic')} />
          </div>

          {/* BELOW CARDS: SPLIT LAYOUT */}
          <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: '400px' }}>
            
            {/* LARGE MULTI-LINE PROJECTION CHART */}
            <div style={{ flex: 2, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                     <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>12-Month Projection</h3>
                     <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Visualizing confidence bands per scenario</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                     <LegendItem color="#6366F1" label={`Actuals`} isVisible={showActuals} />
                     <LegendItem color="#10B981" label="Base Case" isVisible={true} />
                     <LegendItem color="#F59E0B" label="Boundaries" isVisible={true} isDashed />
                  </div>
               </div>

               {/* CHART SVG AREA */}
               <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
                 <div style={{ width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
                   {['$30M', '$25M', '$20M', '$15M', '$10M', '$0'].map(y => (
                     <span key={y} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{y}</span>
                   ))}
                 </div>
                 
                 <div style={{ flex: 1, position: 'relative', borderLeft: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
                    {/* Gridlines */}
                    {[0, 20, 40, 60, 80].map(pct => (
                      <div key={pct} style={{ position: 'absolute', left: 0, right: 0, top: `${pct}%`, height: '1px', backgroundColor: '#E2E8F0', opacity: 0.5 }}></div>
                    ))}
                    
                    {/* SVG Curve logic */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 1000 200">
                       
                       {/* Shaded Area (Confidence Band for Optimistic vs Conservative boundaries) */}
                       {/* Path from Base point to Conservative curve back around to Optimistic curve */}
                       <polygon points="500,100 600,100 700,95 800,85 900,75 1000,60 1000,20 900,30 800,45 700,65 600,85 500,100" fill="rgba(16,185,129,0.08)" />
                       
                       {/* Conservative/Bear (Bottom bound) */}
                       <polyline points="500,100 600,100 700,95 800,85 900,75 1000,60" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
                       
                       {/* Optimistic/Bull (Top bound) */}
                       <polyline points="500,100 600,85 700,65 800,45 900,30 1000,20" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />

                       {/* Base Case (Solid line) */}
                       <polyline points="500,100 600,95 700,80 800,65 900,50 1000,40" fill="none" stroke="#10B981" strokeWidth="2.5" />

                       {/* Actuals (if toggled) */}
                       {showActuals && (
                          <polyline points="0,170 100,165 200,150 300,155 400,130 500,100" fill="none" stroke="#6366F1" strokeWidth="2.5" />
                       )}
                       
                       {/* Divider line marking 'Today' */}
                       <line x1="500" y1="0" x2="500" y2="200" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                    <div style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)', backgroundColor: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 600, color: '#64748B', fontFamily: 'Inter' }}>
                       Q4 2024 End
                    </div>

                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: '-24px', display: 'flex', justifyContent: 'space-between' }}>
                       {['Jul 24', 'Sep', 'Nov', 'Jan 25', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(lbl => (
                         <span key={lbl} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter', width: '30px', textAlign: 'center' }}>{lbl}</span>
                       ))}
                    </div>
                 </div>
               </div>
            </div>

            {/* KEY ASSUMPTIONS PANEL */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '24px' }}>Key Assumptions</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', flex: 1 }}>
                  <SliderRow label="Market Growth Rate" value="18%" range="[10% - 30%]" pct={40} />
                  <SliderRow label="Customer Churn Rate" value="4.2%" range="[2% - 10%]" pct={27.5} />
                  <SliderRow label="Expansion Revenue (NRR)" value="108%" range="[100% - 130%]" pct={26.6} />
                  <SliderRow label="Avg Deal Size Growth" value="$4,500" range="[$3,000 - $6,000]" pct={50} />
                  
                  <div style={{ marginTop: 'auto', backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '16px', border: '1px solid #E2E8F0' }}>
                     <span style={{ fontSize: '11px', fontWeight: 600, color: '#475569', fontFamily: 'Inter', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Impact Analysis</span>
                     <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Inter', lineHeight: 1.5 }}>
                       Reducing churn to <strong>3.0%</strong> would pull the Base Case up by <strong>+$2.4M</strong> ARR over 12 months, shifting closely to the Optimistic boundary.
                     </p>
                  </div>
               </div>
            </div>

          </div>

    </div>
  );
}

// Subcomponents
function ScenarioCard({ title, value, conf, isActive, onClick }) {
  const isBase = title === 'Base';
  return (
    <div 
      onClick={onClick}
      style={{ 
        flex: 1, backgroundColor: isActive ? '#F8FAFC' : '#FFFFFF', 
        borderRadius: '12px', border: isActive ? '2px solid #6366F1' : '1px solid #E2E8F0', 
        padding: '16px 20px', display: 'flex', flexDirection: 'column',
        cursor: 'pointer', transition: '0.2s',
        boxShadow: isActive ? '0 4px 12px rgba(99,102,241,0.08)' : 'none'
      }}
    >
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
         <span style={{ fontSize: '13px', fontWeight: 600, color: isActive ? '#6366F1' : '#64748B', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
         {isBase && <span style={{ backgroundColor: '#ECFDF5', color: '#065F46', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>Recommended</span>}
       </div>
       <span style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter', lineHeight: 1, marginBottom: '6px' }}>{value}</span>
       <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: 'Inter', fontWeight: 500 }}>{conf}</span>
    </div>
  );
}

function LegendItem({ color, label, isVisible, isDashed }) {
  if (!isVisible) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ 
        width: '16px', height: isDashed ? '0' : '3px', 
        backgroundColor: isDashed ? 'transparent' : color, 
        borderTop: isDashed ? `2px dashed ${color}` : 'none' 
      }} />
      <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>{label}</span>
    </div>
  );
}

function SliderRow({ label, value, range, pct }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{label}</span>
        <div style={{ backgroundColor: '#EEF2FF', color: '#4F46E5', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, fontFamily: 'Inter' }}>{value}</div>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: `${pct}%`, height: '100%', backgroundColor: '#6366F1', borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%, -50%)', width: '14px', height: '14px', backgroundColor: '#FFFFFF', border: '2px solid #6366F1', borderRadius: '50%', cursor: 'ew-resize', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter', fontWeight: 500 }}>
        <span>{range.split(' - ')[0].replace('[', '')}</span>
        <span>{range.split(' - ')[1].replace(']', '')}</span>
      </div>
    </div>
  )
}
