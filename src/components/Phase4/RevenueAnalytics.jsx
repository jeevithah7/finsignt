import React from 'react';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

export default function RevenueAnalytics() {
  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
      
      {/* SIDEBAR */}
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar activeItem="Revenue Analytics" />
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
                Revenue Analytics
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                Detailed breakdown &middot; Fiscal Year 2024
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '4px', display: 'flex' }}>
                <button style={{ backgroundColor: '#E2E8F0', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>12 Months</button>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}>30 Days</button>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}>7 Days</button>
              </div>
              <button style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 500, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Select Date
              </button>
            </div>
          </div>

          {/* ROW 1 — 4 metric strips */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <MetricStrip label="Annual Recurring Revenue" value="$3.84M" trend="↑ $284K from last year" trendPos={true} />
            <MetricStrip label="Average Deal Size" value="$4,528" trend="↑ 12% YoY growth" trendPos={true} />
            <MetricStrip label="Customer LTV" value="$18,240" trend="↓ –3% vs target" trendPos={false} />
            <MetricStrip label="Revenue per Employee" value="$142K" trend="↑ 8% this quarter" trendPos={true} />
          </div>

          {/* ROW 2 — 2-column layout */}
          <div style={{ display: 'flex', gap: '12px', height: '280px', marginBottom: '24px' }}>
            
            {/* LEFT COLUMN: Stacked Bar Chart */}
            <div style={{ width: '60%', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Revenue by Segment</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Enterprise vs Mid-Market vs SMB</p>
              </div>
              
              {/* STACKED BAR CHART AREA */}
              <div style={{ flex: 1, position: 'relative', display: 'flex' }}>
                {/* Y Axis */}
                <div style={{ width: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$1.2M</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$800K</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$400K</span>
                  <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$0</span>
                </div>
                {/* Chart body */}
                <div style={{ flex: 1, position: 'relative', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '0' }}>
                  {/* Grid lines */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '1px', backgroundColor: '#E2E8F0', opacity: 0.5 }}></div>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: '33.33%', height: '1px', backgroundColor: '#E2E8F0', opacity: 0.5 }}></div>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: '66.66%', height: '1px', backgroundColor: '#E2E8F0', opacity: 0.5 }}></div>
                  
                  {/* Bars (max 1.2M = 100%) */}
                  <StackedBar q="Q1 2024" ent={420} mid={210} smb={105} max={1200} />
                  <StackedBar q="Q2 2024" ent={490} mid={235} smb={118} max={1200} />
                  <StackedBar q="Q3 2024" ent={560} mid={268} smb={128} max={1200} />
                  <StackedBar q="Q4 2024" ent={612} mid={295} smb={142} max={1200} />
                </div>
              </div>
              
              {/* Legend inline */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', justifyContent: 'center' }}>
                <LegendItem color="#6366F1" label="Enterprise" />
                <LegendItem color="#8B5CF6" label="Mid-Market" />
                <LegendItem color="#A78BFA" label="SMB" />
              </div>
            </div>

            {/* RIGHT COLUMN: Donut Chart */}
            <div style={{ width: '40%', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Revenue Distribution</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>By client segment &middot; Dec 2024</p>
              </div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG DONUT */}
                <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                  <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Enterprise 58% -> cir = pi*d = 3.14*132 = 414.6 */}
                    <circle cx="80" cy="80" r="66" fill="none" stroke="#6366F1" strokeWidth="28" strokeDasharray="240 414.6" strokeDashoffset="0" />
                    {/* Mid-Market 27% -> 111.9 */}
                    <circle cx="80" cy="80" r="66" fill="none" stroke="#8B5CF6" strokeWidth="28" strokeDasharray="109.9 414.6" strokeDashoffset="-242" />
                    {/* SMB 15% -> 62.1 */}
                    <circle cx="80" cy="80" r="66" fill="none" stroke="#A78BFA" strokeWidth="28" strokeDasharray="60.1 414.6" strokeDashoffset="-353.9" />
                  </svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter' }}>$428K</span>
                    <span style={{ fontSize: '10px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter', letterSpacing: '0.02em' }}>This Month</span>
                  </div>
                </div>

                {/* Legend list */}
                <div style={{ marginTop: '24px', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <DonutLegendRow color="#6366F1" label="Enterprise" pct="58%" val="$248K" />
                  <DonutLegendRow color="#8B5CF6" label="Mid-Market" pct="27%" val="$116K" />
                  <DonutLegendRow color="#A78BFA" label="SMB" pct="15%" val="$64K" />
                </div>
              </div>
            </div>

          </div>

          {/* ROW 3 — Top Revenue Clients */}
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Top Revenue Clients</h3>
              <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Ranked by 2024 total revenue &middot; all segments</p>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Rank</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Client Name</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Segment</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>2024 Revenue</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>MoM Change</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Contract Type</th>
                    <th style={{ padding: '8px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Renewal Date</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow rank={1} name="Nexus Corp" seg="Enterprise" rev="$284,500" mom="+14%" rtype="pos" cont="Annual" date="Mar 2025" />
                  <TableRow rank={2} name="Vertex AI" seg="Enterprise" rev="$248,000" mom="+22%" rtype="pos" cont="Multi-yr" date="Jan 2026" />
                  <TableRow rank={3} name="Orbital Labs" seg="Mid-Market" rev="$142,800" mom="+8%" rtype="pos" cont="Annual" date="Jun 2025" />
                  <TableRow rank={4} name="Helix Systems" seg="Enterprise" rev="$128,400" mom="–3%" rtype="neg" cont="Annual" date="Dec 2024" />
                  <TableRow rank={5} name="Quantum Metrics" seg="Mid-Market" rev="$98,200" mom="+31%" rtype="pos" cont="Monthly" date="Rolling" />
                  <TableRow rank={6} name="Axiom Data" seg="Enterprise" rev="$94,500" mom="+6%" rtype="pos" cont="Annual" date="Apr 2025" />
                  <TableRow rank={7} name="Prism Analytics" seg="SMB" rev="$72,000" mom="+18%" rtype="pos" cont="Annual" date="Sep 2025" />
                </tbody>
              </table>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents
function MetricStrip({ label, value, trend, trendPos }) {
  return (
    <div style={{ flex: 1, height: '72px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', fontFamily: 'Inter', marginBottom: '4px' }}>{label}</span>
        <span style={{ fontSize: '11px', fontWeight: 500, color: trendPos ? '#10B981' : '#EF4444', fontFamily: 'Inter' }}>{trend}</span>
      </div>
      <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter' }}>
        {value}
      </div>
    </div>
  )
}

function StackedBar({ q, ent, mid, smb, max }) {
  const total = ent + mid + smb;
  const hp1 = (ent / max) * 100;
  const hp2 = (mid / max) * 100;
  const hp3 = (smb / max) * 100;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
      <div style={{ width: '40px', display: 'flex', flexDirection: 'column-reverse', height: '100%' }}>
        <div style={{ backgroundColor: '#6366F1', height: `${hp1}%`, width: '100%' }} />
        <div style={{ backgroundColor: '#8B5CF6', height: `${hp2}%`, width: '100%' }} />
        <div style={{ backgroundColor: '#A78BFA', height: `${hp3}%`, width: '100%', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} />
      </div>
      <div style={{ marginTop: '8px', fontSize: '11px', color: '#64748B', fontFamily: 'Inter', whiteSpace: 'nowrap', position: 'absolute', bottom: '-24px' }}>{q}</div>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }} />
      <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>{label}</span>
    </div>
  );
}

function DonutLegendRow({ color, label, pct, val }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'Inter' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }} />
        <span style={{ color: '#0F172A', fontWeight: 500 }}>{label}</span>
        <span style={{ color: '#64748B' }}>{pct}</span>
      </div>
      <span style={{ fontWeight: 600, color: '#0F172A' }}>{val}</span>
    </div>
  );
}

function TableRow({ rank, name, seg, rev, mom, rtype, cont, date }) {
  const badgeBg = rtype === 'pos' ? '#ECFDF5' : '#FEF2F2';
  const badgeCx = rtype === 'pos' ? '#065F46' : '#991B1B';
  const arrow = rtype === 'pos' ? '▲' : '▼';
  
  let pBg= '#EFF6FF'; let pCx='#1E40AF';
  if(cont==='Multi-yr'){ pBg='#EEF2FF'; pCx='#3730A3'; }
  else if(cont==='Monthly'){ pBg='#FFFBEB'; pCx='#92400E'; }

  return (
    <tr>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9' }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>{rank}</div>
      </td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 500 }}>{name}</td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B' }}>{seg}</td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 700 }}>{rev}</td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9' }}>
        <span style={{ backgroundColor: badgeBg, color: badgeCx, padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>{arrow} {mom}</span>
      </td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9' }}>
        <span style={{ backgroundColor: pBg, color: pCx, padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>{cont}</span>
      </td>
      <td style={{ padding: '10px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B' }}>{date}</td>
    </tr>
  );
}
