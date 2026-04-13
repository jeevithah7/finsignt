import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

export default function Forecasting() {
  const [activeCase, setActiveCase] = useState('Base Case');

  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
      
      {/* SIDEBAR */}
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar activeItem="Forecasting" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '1200px' }}>
        {/* TOPBAR */}
        <div style={{ zIndex: 2 }}>
          <TopNav width="1200px" />
        </div>
        
        {/* CONTENT AREA */}
        <div style={{ 
          zIndex: 1, position: 'relative', width: '1200px', flex: 1, backgroundColor: '#F1F5F9',
          padding: '24px', display: 'flex', flexDirection: 'column',
          boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
        }}>
          
          {/* PAGE HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Forecasting
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                AI-powered revenue modeling &middot; Q1&ndash;Q4 2025
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>
                Growth Model v2.1
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <button style={{ height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                Run Forecast
              </button>
            </div>
          </div>

          {/* ROW 1: 3 summary cards */}
          <div style={{ display: 'flex', gap: '12px', height: '88px', marginBottom: '24px' }}>
            <SummaryCard 
              title="Q1 2025 Projection" value="$5.1M" badge="↑ +19% vs Q1 2024" badgeColor="green" sub="High confidence &middot; 73%"
              progress={73} progressColor="#10B981"
            />
            <SummaryCard 
              title="Full Year 2025" value="$22.4M" badge="↑ +28% YoY" badgeColor="green" sub="Moderate confidence &middot; 61%"
              progress={61} progressColor="#F59E0B"
            />
            <SummaryCard 
              title="Break-even Month" value="March 2025" badge="14 weeks away" badgeColor="blue" sub="At current burn rate"
            />
          </div>

          {/* ROW 2: Combo Chart */}
          <div style={{ height: '300px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Revenue Forecast Model</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Actual + AI projected with confidence intervals</p>
              </div>
              <div style={{ display: 'flex', gap: '6px', backgroundColor: '#F1F5F9', padding: '3px', borderRadius: '8px' }}>
                {['Bear Case', 'Base Case', 'Bull Case'].map(caseName => (
                  <button 
                    key={caseName}
                    onClick={() => setActiveCase(caseName)}
                    style={{ 
                      backgroundColor: activeCase === caseName ? '#FFFFFF' : 'transparent',
                      color: activeCase === caseName ? '#6366F1' : '#64748B',
                      border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter', cursor: 'pointer',
                      boxShadow: activeCase === caseName ? '0 1px 2px rgba(15,23,42,.04)' : 'none'
                    }}
                  >
                    {caseName}
                  </button>
                ))}
              </div>
            </div>
            {/* Chart Area */}
            <div style={{ flex: 1, position: 'relative' }}>
               {/* Y Axis */}
               <div style={{ position: 'absolute', left: 0, top: 0, bottom: '24px', width: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {['$700K', '$600K', '$500K', '$400K', '$300K', '$200K', '$100K', '$0'].map(val => (
                    <span key={val} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{val}</span>
                  ))}
               </div>
               
               <div style={{ position: 'absolute', left: '40px', right: 0, top: 0, bottom: '24px', borderLeft: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
                  {/* Grid lines */}
                  {[0, 14.28, 28.57, 42.85, 57.14, 71.42, 85.71].map(pct => (
                    <div key={pct} style={{ position: 'absolute', left: 0, right: 0, top: `${pct}%`, height: '1px', backgroundColor: '#E2E8F0', opacity: 0.5 }}></div>
                  ))}
                  
                  {/* Divider */}
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', borderLeft: '1px dashed #CBD5E1' }}>
                     <span style={{ position: 'absolute', top: '-16px', left: '-14px', fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter', backgroundColor: '#FFFFFF', padding: '0 4px' }}>Today</span>
                  </div>

                  {/* SVG Chart */}
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 1000 200">
                    {/* Historical: Jan-Dec 24 (0 to 500) */}
                    <polyline points="0,170 41,165 83,168 125,160 166,155 208,145 250,135 291,130 333,125 375,140 416,115 458,105 500,95" fill="none" stroke="#6366F1" strokeWidth="2.5" />
                    
                    {/* Forecast Base: Jan-Dec 25 (500 to 1000) */}
                    <polyline points="500,95 541,92 583,88 625,82 666,76 708,68 750,62 791,57 833,50 875,44 916,37 958,31 1000,25" fill="none" stroke="#10B981" strokeWidth="2" />
                    
                    {/* Confidence Band: +15%, -12% */}
                    <polygon points="500,95 541,85 583,80 625,72 666,65 708,55 750,48 791,42 833,33 875,26 916,17 958,10 1000,0 1000,45 958,54 916,63 875,72 833,80 791,89 750,96 708,104 666,113 625,121 583,128 541,133 500,95" fill="rgba(16,185,129,0.08)" />
                    <polyline points="500,95 541,85 583,80 625,72 666,65 708,55 750,48 791,42 833,33 875,26 916,17 958,10 1000,0" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="0.75" strokeDasharray="4 4" />
                    <polyline points="500,95 541,133 583,128 625,121 666,113 708,104 750,96 791,89 833,80 875,72 916,63 958,54 1000,45" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="0.75" strokeDasharray="4 4" />

                    {/* Faint Bull/Bear */}
                    <polyline points="500,95 541,85 583,80 625,72 666,65 708,55 750,48 791,42 833,33 875,26 916,17 958,10 1000,0" fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                    <polyline points="500,95 541,135 583,132 625,128 666,122 708,115 750,108 791,104 833,98 875,92 916,88 958,82 1000,75" fill="none" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                  </svg>

                  {/* Annotations */}
                  <div style={{ position: 'absolute', left: '58.3%', top: '38%', transform: 'translate(-50%, -100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 6px', fontSize: '10px', fontWeight: 600, color: '#6366F1', whiteSpace: 'nowrap', marginBottom: '4px', boxShadow: '0 1px 2px rgba(15,23,42,.06)' }}>Break-even</div>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366F1', border: '1.5px solid #FFFFFF' }}></div>
                  </div>
                  
                  <div style={{ position: 'absolute', left: '75%', top: '27%', transform: 'translate(-50%, -100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 6px', fontSize: '10px', fontWeight: 600, color: '#10B981', whiteSpace: 'nowrap', marginBottom: '4px', boxShadow: '0 1px 2px rgba(15,23,42,.06)' }}>Series B target</div>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', border: '1.5px solid #FFFFFF' }}></div>
                  </div>
                  
                  <div style={{ position: 'absolute', left: '37.5%', top: '65%', transform: 'translate(-50%, -100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2px 6px', fontSize: '10px', fontWeight: 600, color: '#EF4444', whiteSpace: 'nowrap', marginBottom: '4px', boxShadow: '0 1px 2px rgba(15,23,42,.06)' }}>Revenue dip</div>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', border: '1.5px solid #FFFFFF' }}></div>
                  </div>

               </div>

               {/* X Axis labels */}
               <div style={{ position: 'absolute', left: '40px', right: 0, bottom: '-20px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Jan 2024</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Jun</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Jan 2025</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Jun</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Dec</span>
               </div>
            </div>
          </div>

          {/* ROW 3: 3-column row */}
          <div style={{ display: 'flex', gap: '12px', height: '220px' }}>
            
            {/* Col 1 */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>Growth Probability Score</h3>
               <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                  <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                     <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad)" strokeWidth="10" strokeDasharray="206 282.7" strokeLinecap="round" />
                        <defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#6366F1" /><stop offset="100%" stopColor="#10B981" /></linearGradient></defs>
                     </svg>
                     <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div><span style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter' }}>73</span><span style={{ fontSize: '12px', fontWeight: 400, color: '#94A3B8', fontFamily: 'Inter' }}>/100</span></div>
                     </div>
                  </div>
                  <div>
                     <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontFamily: 'Inter' }}>Growth confidence score based on pipeline & AI models</p>
                  </div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
                     <span style={{ fontSize: '12px', color: '#0F172A', fontFamily: 'Inter' }}>Market conditions</span>
                     <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>Favorable</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
                     <span style={{ fontSize: '12px', color: '#0F172A', fontFamily: 'Inter' }}>Pipeline health</span>
                     <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>Strong</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '12px', color: '#0F172A', fontFamily: 'Inter' }}>Churn risk</span>
                     <span style={{ backgroundColor: '#FFFBEB', color: '#F59E0B', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>Monitor</span>
                  </div>
               </div>
            </div>

            {/* Col 2 */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>Scenario Comparison</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'center' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <span style={{ width: '32px', fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>Bear</span>
                     <div style={{ flex: 1, height: '32px', backgroundColor: '#FEF2F2', borderRadius: '6px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <div style={{ width: '75%', height: '100%', backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
                           <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter' }}>$16.8M</span>
                        </div>
                     </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <span style={{ width: '32px', fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>Base</span>
                     <div style={{ flex: 1, height: '32px', backgroundColor: '#EEF2FF', borderRadius: '6px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <div style={{ width: '85%', height: '100%', backgroundColor: '#6366F1', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
                           <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter' }}>$22.4M</span>
                        </div>
                     </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <span style={{ width: '32px', fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>Bull</span>
                     <div style={{ flex: 1, height: '32px', backgroundColor: '#ECFDF5', borderRadius: '6px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
                           <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter' }}>$28.1M</span>
                        </div>
                     </div>
                  </div>

               </div>
               <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#94A3B8', fontFamily: 'Inter', textAlign: 'center' }}>Based on current pipeline &times; growth rate</p>
            </div>

            {/* Col 3 */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '16px 20px', display: 'flex', flexDirection: 'column' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Key Assumptions</h3>
               <p style={{ margin: '0 0 12px 0', fontSize: '11px', fontWeight: 700, color: '#94A3B8', fontFamily: 'Inter', textTransform: 'uppercase' }}>Model inputs</p>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', rowGap: '6px', alignItems: 'center', flex: 1 }}>
                  <AssumptionRow label="Growth rate" value="+18% YoY" />
                  <AssumptionRow label="Churn rate" value="4.2%" />
                  <AssumptionRow label="New logos/mo" value="12" />
                  <AssumptionRow label="Avg deal size" value="$4,528" />
                  <AssumptionRow label="Expansion rev" value="+8% NRR" />
                  <AssumptionRow label="CAC payback" value="14 months" />
               </div>

               <button style={{ width: '100%', height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', color: '#FFFFFF', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter', cursor: 'pointer', marginTop: '12px' }}>
                 Recalculate
               </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents
function SummaryCard({ title, value, badge, badgeColor, sub, progress, progressColor }) {
  const bBg = badgeColor === 'green' ? '#ECFDF5' : '#EFF6FF';
  const bCx = badgeColor === 'green' ? '#065F46' : '#1E40AF';
  
  return (
    <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '14px 20px', display: 'flex', justifyContent: 'space-between' }}>
       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
         <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', fontFamily: 'Inter' }}>{title}</span>
         <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter', lineHeight: 1 }}>{value}</span>
            <span style={{ backgroundColor: bBg, color: bCx, padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter', marginBottom: '2px' }}>{badge}</span>
         </div>
         <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'Inter' }}>{sub}</span>
       </div>
       {progress !== undefined && (
         <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '4px' }}>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', overflow: 'hidden' }}>
               <div style={{ width: `${progress}%`, height: '100%', backgroundColor: progressColor }}></div>
            </div>
         </div>
       )}
    </div>
  )
}

function AssumptionRow({ label, value }) {
  return (
    <>
      <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter', whiteSpace: 'nowrap' }}>{label}</span>
      <div style={{ backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '2px 8px', fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'text' }}>
        {value}
      </div>
    </>
  )
}
