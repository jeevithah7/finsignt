import React from 'react';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

export default function RiskAlerts() {
  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
      
      {/* SIDEBAR */}
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar activeItem="Risk Alerts" />
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
                Risk Alerts
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                3 active &middot; 2 resolved &middot; Last scan: 4 min ago
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>
                Configure Thresholds
              </button>
              <button style={{ height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
                Run Risk Scan
              </button>
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', overflow: 'hidden' }}>
            
            {/* LEFT PANEL */}
            <div style={{ width: '340px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
               <div style={{ padding: '16px', borderBottom: '1px solid #E2E8F0' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Active Alerts</h3>
                  <div style={{ display: 'flex', gap: '16px' }}>
                     <span style={{ fontSize: '12px', fontWeight: 600, color: '#6366F1', fontFamily: 'Inter', borderBottom: '2px solid #6366F1', paddingBottom: '4px' }}>All (5)</span>
                     <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Critical (1)</span>
                     <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Warning (2)</span>
                     <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Info (2)</span>
                  </div>
               </div>

               <div style={{ flex: 1, overflowY: 'auto' }}>
                  <AlertItem 
                     selected={true} severity="cr" pill="CRITICAL" title="Revenue variance exceeds threshold" 
                     time="2 minutes ago" preview="Oct revenue 11% below forecast…"
                  />
                  <AlertItem 
                     selected={false} severity="wa" pill="WARNING" title="Cloud infrastructure spend spike" 
                     time="1 hour ago" preview="AWS costs +38% MoM unexpectedly…"
                  />
                  <AlertItem 
                     selected={false} severity="wa" pill="WARNING" title="Cash runway below 18-month target" 
                     time="3 hours ago" preview="Current runway: 14 months at burn…"
                  />
                  <AlertItem 
                     selected={false} severity="in" pill="INFO" title="New enterprise client onboarded" 
                     time="Yesterday" preview="Nexus Corp contract activated…"
                  />
                  <AlertItem 
                     selected={false} severity="in" pill="INFO" title="Monthly report generated" 
                     time="Yesterday" preview="November 2024 report ready…"
                  />

                  {/* Resolved Section */}
                  <div style={{ padding: '16px' }}>
                     <span style={{ fontSize: '10px', fontWeight: 600, color: '#94A3B8', fontFamily: 'Inter', textTransform: 'uppercase' }}>Resolved (2)</span>
                  </div>
                  <AlertItem 
                     selected={false} severity="ok" pill="RESOLVED" title="Delayed payments: orbital labs" 
                     time="2 days ago" preview="Payment received for invoice INV-183…"
                     resolved={true}
                  />
                  <AlertItem 
                     selected={false} severity="ok" pill="RESOLVED" title="API integration error" 
                     time="4 days ago" preview="Sync restored across all accounts…"
                     resolved={true}
                  />
               </div>
            </div>

            {/* RIGHT PANEL */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', padding: '32px' }}>
               
               {/* DETAIL HEADER */}
               <div style={{ marginBottom: '24px' }}>
                  <span style={{ display: 'inline-block', backgroundColor: '#FEF2F2', color: '#991B1B', padding: '4px 10px', borderRadius: '16px', fontSize: '10px', fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.04em' }}>CRITICAL</span>
                  <h2 style={{ margin: '8px 0', fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Revenue variance exceeds threshold</h2>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Detected 2 min ago
                     </span>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Assigned to Arjun K.
                     </span>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                        Revenue &middot; Enterprise
                     </span>
                  </div>
               </div>

               <div style={{ height: '1px', backgroundColor: '#E2E8F0', width: '100%', marginBottom: '24px' }}></div>

               {/* IMPACT SUMMARY */}
               <div style={{ marginBottom: '28px' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Impact Analysis</h3>
                  <div style={{ display: 'flex', gap: '16px' }}>
                     <ImpactChip label="Revenue Impact" value="–$47,200" valColor="#EF4444" />
                     <ImpactChip label="Affected Clients" value="14 accounts" valColor="#0F172A" />
                     <ImpactChip label="Forecast Deviation" value="–11.2%" valColor="#EF4444" />
                  </div>
               </div>

               {/* CHART SECTION */}
               <div style={{ marginBottom: '28px' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Revenue vs Forecast — Last 6 Months</h3>
                  <div style={{ height: '160px', position: 'relative', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
                     {/* Y-axis faux labels */}
                     <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '10px' }}>
                        <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$500K</span>
                        <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$400K</span>
                        <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$300K</span>
                     </div>
                     <div style={{ flex: 1, position: 'relative', height: '100%', marginLeft: '40px' }}>
                        <svg style={{ position: 'absolute', width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 1000 100">
                           {/* Forecast: dashed */}
                           <polyline points="0,90 200,80 400,70 600,50 800,40 1000,20" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 4" />
                           {/* Actual: solid until recent */}
                           <polyline points="0,95 200,82 400,65 600,45 800,60 1000,80" fill="none" stroke="#6366F1" strokeWidth="2.5" />
                           {/* Gap fill */}
                           <polygon points="600,50 800,40 1000,20 1000,80 800,60 600,45" fill="rgba(239,68,68,0.08)" />
                        </svg>
                        {/* Callout */}
                        <div style={{ position: 'absolute', right: '0%', top: '55%', transform: 'translateY(-50%)', backgroundColor: '#EF4444', color: '#FFFFFF', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>–$47K</div>
                     </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '40px', marginTop: '8px' }}>
                     {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
                        <span key={m} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{m}</span>
                     ))}
                  </div>
               </div>

               {/* AI RECOMMENDATION */}
               <div style={{ marginBottom: '28px' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>AI Recommendation</h3>
                  <div style={{ borderLeft: '3px solid #6366F1', padding: '12px 16px', backgroundColor: '#EEF2FF', borderRadius: '8px' }}>
                     <p style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#334155', lineHeight: '1.6' }}>
                        Enterprise segment underperformed by 11% in October, primarily driven by delayed renewals at Helix Systems ($128K ARR) and contract restructuring at Cobalt Finance. Recommend immediate outreach to at-risk accounts and consider short-cycle incentive program to accelerate Q4 close rate.
                     </p>
                  </div>
               </div>

               {/* ACTION BUTTONS */}
               <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  <button style={{ height: '34px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 16px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>
                     Acknowledge Alert
                  </button>
                  <button style={{ height: '34px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                     Create Action Plan
                  </button>
                  <button style={{ height: '34px', backgroundColor: 'transparent', border: 'none', padding: '0 16px', fontSize: '12px', fontWeight: 600, color: '#EF4444', cursor: 'pointer', fontFamily: 'Inter', marginLeft: 'auto' }}>
                     Escalate to Board
                  </button>
               </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function AlertItem({ selected, severity, pill, title, time, preview, resolved }) {
  let barColor, pillBg, pillCx;
  
  if (severity === 'cr') { barColor = '#EF4444'; pillBg = '#FEF2F2'; pillCx = '#991B1B'; }
  else if (severity === 'wa') { barColor = '#F59E0B'; pillBg = '#FFFBEB'; pillCx = '#92400E'; }
  else if (severity === 'in') { barColor = '#3B82F6'; pillBg = '#EFF6FF'; pillCx = '#1E40AF'; }
  else { barColor = '#E2E8F0'; pillBg = '#F1F5F9'; pillCx = '#64748B'; }
  
  return (
    <div style={{ 
      position: 'relative', padding: '14px 16px 14px 20px', borderBottom: '1px solid #E2E8F0', 
      backgroundColor: selected ? '#F8FAFC' : '#FFFFFF', cursor: 'pointer',
      borderRight: selected ? '3px solid #6366F1' : '1px solid transparent',
      opacity: resolved ? 0.5 : 1
    }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '4px', backgroundColor: selected ? barColor : barColor }}></div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
         <span style={{ backgroundColor: pillBg, color: pillCx, padding: '2px 6px', borderRadius: '12px', fontSize: '9px', fontWeight: 700, fontFamily: 'Inter', letterSpacing: '0.04em' }}>{pill}</span>
         <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{time}</span>
      </div>
      <h4 style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter', textDecoration: resolved ? 'line-through' : 'none' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{preview}</p>
    </div>
  );
}

function ImpactChip({ label, value, valColor }) {
  return (
    <div style={{ flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px 16px' }}>
      <span style={{ display: 'block', fontSize: '11px', color: '#64748B', fontFamily: 'Inter', marginBottom: '4px' }}>{label}</span>
      <span style={{ display: 'block', fontSize: '18px', fontWeight: 800, color: valColor, fontFamily: 'Inter' }}>{value}</span>
    </div>
  );
}
