import React, { useState } from 'react';

export default function RevenueAnalytics() {
  const [viewMode, setViewMode] = useState('MoM'); // 'MoM' or 'YoY'

  return (
    <div className="page-transition-enter" style={{ 
      width: '100%', flex: 1, backgroundColor: 'transparent',
      padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
      boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
    }}>
          
          {/* PAGE HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Revenue Analytics
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                Detailed revenue breakdown across segments
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '4px', display: 'flex' }}>
                <button 
                  onClick={() => setViewMode('MoM')}
                  style={{ backgroundColor: viewMode === 'MoM' ? '#E2E8F0' : 'transparent', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: viewMode === 'MoM' ? 600 : 500, color: viewMode === 'MoM' ? '#0F172A' : '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}
                >
                  MoM View
                </button>
                <button 
                  onClick={() => setViewMode('YoY')}
                  style={{ backgroundColor: viewMode === 'YoY' ? '#E2E8F0' : 'transparent', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: viewMode === 'YoY' ? 600 : 500, color: viewMode === 'YoY' ? '#0F172A' : '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}
                >
                  YoY View
                </button>
              </div>
            </div>
          </div>

          {/* LARGE AREA CHART */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column', height: '360px', flexShrink: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Monthly Revenue Streams</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Split by Enterprise, SMB, and Individual</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <LegendItem color="#6366F1" label="Enterprise" />
                <LegendItem color="#8B5CF6" label="SMB" />
                <LegendItem color="#34D399" label="Individual" />
              </div>
            </div>
            
            <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
              {/* Y Axis */}
              <div style={{ width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
                {['$1.2M', '$900K', '$600K', '$300K', '$0'].map(y => (
                  <span key={y} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{y}</span>
                ))}
              </div>
              
              {/* Chart SVG Area */}
              <div style={{ flex: 1, position: 'relative' }}>
                {/* Horizontal grid lines */}
                {[0, 25, 50, 75, 100].map(pct => (
                  <div key={pct} style={{ position: 'absolute', left: 0, right: 0, top: `${pct}%`, height: '1px', backgroundColor: '#E2E8F0', opacity: pct === 100 ? 1 : 0.5 }}></div>
                ))}
                
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                   {/* 
                     Stacked Area Data approximations based on a 10-point curve. 
                     Total max height is ~$1.2M.
                     Data format: 100% height = 0y, 0% height = 100y.
                   */}
                   
                   {/* Enterprise: top layer */}
                   <path d="M 0,100 L 0,80 C 10,70 20,75 30,60 C 40,50 50,55 60,40 C 70,35 80,30 90,20 L 100,15 L 100,100 Z" fill="rgba(99,102,241,0.2)" stroke="#6366F1" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                   
                   {/* SMB: middle layer */}
                   <path d="M 0,100 L 0,85 C 15,78 25,82 35,70 C 45,65 55,68 65,55 C 75,50 85,45 100,35 L 100,100 Z" fill="rgba(139,92,246,0.3)" stroke="#8B5CF6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                   
                   {/* Individual: bottom layer */}
                   <path d="M 0,100 L 0,92 C 10,90 30,88 40,85 C 50,82 70,78 80,75 C 90,70 100,65 100,65 L 100,100 Z" fill="rgba(52,211,153,0.4)" stroke="#34D399" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                   
                </svg>

                {/* X Axis */}
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: '-24px', display: 'flex', justifyContent: 'space-between' }}>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                    <span key={m} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter', width: '20px', textAlign: 'center' }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div style={{ display: 'flex', gap: '20px' }}>
            
            {/* Revenue by Segment (Horizontal Bar) */}
            <div style={{ flex: '1', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>Revenue by Segment</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
                <HorizontalBar label="Enterprise" val="$5.2M" pct="58%" color="#6366F1" />
                <HorizontalBar label="SMB" val="$2.8M" pct="31%" color="#8B5CF6" />
                <HorizontalBar label="Individual" val="$980K" pct="11%" color="#34D399" />
              </div>
            </div>

            {/* Revenue Health Score */}
            <div style={{ flex: '1', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', gap: '24px' }}>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '130px' }}>
                  <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>Health Score</h3>
                  <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                     <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="42" strokeLinecap="round" />
                     </svg>
                     <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter', lineHeight: 1 }}>85</span>
                        <span style={{ fontSize: '10px', fontWeight: 600, color: '#10B981', fontFamily: 'Inter', letterSpacing: '0.05em' }}>HEALTHY</span>
                     </div>
                  </div>
               </div>
               
               <div style={{ flex: 1, borderLeft: '1px solid #E2E8F0', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                  <HealthMetric label="Churn Impact" value="-2.1%" target="< 3.0%" status="good" />
                  <HealthMetric label="Upsell Rate" value="14.5%" target="> 10.0%" status="good" />
                  <HealthMetric label="New ARR" value="$425K" target="$500K" status="warn" />
               </div>
            </div>

          </div>

          {/* THIRD ROW - Top Clients by Revenue Table */}
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Top Clients by Revenue</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Ranked by MRR &middot; Active contracts</p>
              </div>
              <button style={{ fontSize: '12px', fontWeight: 600, color: '#6366F1', background: 'none', border: 'none', cursor: 'pointer' }}>View All Client Data &rarr;</button>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px 12px 12px 0', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Client Name</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Plan Tier</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>MRR</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Growth %</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>6mo Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <ClientRow name="Nexus Corp" tier="Enterprise Plus" mrr="$42,500" growth="+14%" gDir="up" trend="0,15 10,12 20,10 30,8 40,3 50,0" />
                  <ClientRow name="Vertex AI" tier="Enterprise" mrr="$38,000" growth="+8%" gDir="up" trend="0,10 10,11 20,7 30,5 40,4 50,2" />
                  <ClientRow name="Orbital Labs" tier="Enterprise" mrr="$27,100" growth="-2%" gDir="down" trend="0,4 10,3 20,8 30,7 40,11 50,15" />
                  <ClientRow name="Helix Systems" tier="Pro" mrr="$18,400" growth="+22%" gDir="up" trend="0,18 10,16 20,10 30,6 40,4 50,1" />
                  <ClientRow name="Axiom Data" tier="Enterprise" mrr="$15,200" growth="+4%" gDir="up" trend="0,12 10,10 20,14 30,8 40,6 50,5" />
                </tbody>
              </table>
            </div>
            
          </div>

    </div>
  );
}

// Subcomponents
function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: color }} />
      <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>{label}</span>
    </div>
  );
}

function HorizontalBar({ label, val, pct, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'Inter' }}>
        <span style={{ fontWeight: 600, color: '#0F172A' }}>{label}</span>
        <span style={{ fontWeight: 700, color: '#0F172A' }}>{val} <span style={{ fontWeight: 500, color: '#94A3B8', marginLeft: '4px' }}>({pct})</span></span>
      </div>
      <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: pct, height: '100%', backgroundColor: color, borderRadius: '4px' }}></div>
      </div>
    </div>
  )
}

function HealthMetric({ label, value, target, status }) {
  const isGood = status === 'good';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{label}</span>
        <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>Target: {target}</span>
      </div>
      <div style={{ padding: '4px 8px', borderRadius: '6px', backgroundColor: isGood ? '#ECFDF5' : '#FFFBEB', color: isGood ? '#065F46' : '#92400E', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter' }}>
        {value}
      </div>
    </div>
  );
}

function ClientRow({ name, tier, mrr, growth, gDir, trend }) {
  const isUp = gDir === 'up';
  return (
    <tr>
      <td style={{ padding: '14px 12px 14px 0', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>{name}</td>
      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
        <span style={{ backgroundColor: '#EEF2FF', color: '#3730A3', padding: '3px 8px', borderRadius: '12px', fontSize: '10.5px', fontWeight: 600 }}>{tier}</span>
      </td>
      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 700 }}>{mrr}</td>
      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', fontWeight: 600, color: isUp ? '#10B981' : '#EF4444' }}>
        {isUp ? '▲' : '▼'} {growth}
      </td>
      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
          <polyline points={trend} stroke={isUp ? '#10B981' : '#EF4444'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </td>
    </tr>
  );
}
