import React from 'react';

export default function MobileDashboard() {
  return (
    <div style={{ position: 'relative', width: '390px', height: '844px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9', boxShadow: '0 24px 64px rgba(0,0,0,0.1)' }}>
      
      {/* MOBILE TOPBAR */}
      <div style={{ height: '104px', backgroundColor: '#0F172A', display: 'flex', flexDirection: 'column' }}>
         <div style={{ height: '52px', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left: Logo */}
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#6366F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            {/* Center: Title */}
            <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Dashboard</h1>
            {/* Right: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ position: 'relative' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', border: '2px solid #0F172A' }}></div>
               </div>
               <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #A78BFA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'Inter' }}>AK</div>
            </div>
         </div>
         {/* Date Chip */}
         <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 500, fontFamily: 'Inter' }}>Jan &ndash; Dec 2024</span>
         </div>
      </div>

      {/* MOBILE CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
         
         {/* KPI SCROLL ROW */}
         <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
               <MobileKpiCard label="Total Revenue" value="$4.28M" trend="▲ +12.4%" />
               <MobileKpiCard label="Net Profit" value="$1.15M" trend="▲ +8.2%" />
               <MobileKpiCard label="Monthly Growth" value="18.5%" trend="▼ -1.2%" isNeg />
               <MobileKpiCard label="Expense Ratio" value="44.2%" trend="▼ -0.8%" isNeg />
               <MobileKpiCard label="Active Clients" value="284" trend="▲ +4.1%" />
            </div>
            {/* Scroll Indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
               <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366F1' }}></div>
               <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E2E8F0' }}></div>
               <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E2E8F0' }}></div>
               <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E2E8F0' }}></div>
               <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#E2E8F0' }}></div>
            </div>
         </div>

         {/* REVENUE CHART */}
         <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '14px 16px', height: '200px', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Revenue</h3>
               <span style={{ backgroundColor: '#F1F5F9', color: '#64748B', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>12mo</span>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
               {/* Y-axis faux labels */}
               <div style={{ position: 'absolute', left: 0, top: 0, bottom: '20px', width: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$500K</span>
                  <span style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$250K</span>
                  <span style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>$0</span>
               </div>
               {/* Chart Area */}
               <div style={{ position: 'absolute', left: '36px', right: 0, top: 0, bottom: '20px', borderBottom: '1px solid #E2E8F0' }}>
                  <svg style={{ position: 'absolute', width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 100 100">
                     <polyline points="0,80 20,70 40,55 60,40 80,45 100,20" fill="none" stroke="#6366F1" strokeWidth="2.5" />
                     <polyline points="0,95 20,90 40,85 60,80 80,75 100,70" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
                  </svg>
               </div>
               {/* X-axis labels */}
               <div style={{ position: 'absolute', left: '36px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between' }}>
                  {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                     <span key={m} style={{ fontSize: '9px', color: '#94A3B8', fontFamily: 'Inter' }}>{m}</span>
                  ))}
               </div>
            </div>
         </div>

         {/* AI INSIGHTS */}
         <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
            <div style={{ padding: '14px 16px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366F1' }}></div>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>AI Insights</h3>
               <span style={{ marginLeft: 'auto', backgroundColor: '#EEF2FF', color: '#4F46E5', borderRadius: '12px', padding: '2px 8px', fontSize: '10px', fontWeight: 800, fontFamily: 'Inter' }}>4</span>
            </div>
            <div>
               <InsightRow 
                  color="#10B981" bg="#ECFDF5" type="OPPORTUNITY" 
                  title="Upsell opportunity: Helix Systems" 
                  desc="Usage exceeded 90% quota for 3 consecutive months." 
               />
               <InsightRow 
                  color="#EF4444" bg="#FEF2F2" type="RISK" 
                  title="Churn risk detected: Orbital Labs" 
                  desc="Login frequency dropped 60% in the last 30 days." 
                  borderNone
               />
               <div style={{ borderTop: '1px solid #E2E8F0', padding: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#6366F1', fontFamily: 'Inter', cursor: 'pointer' }}>See all 4 insights &rarr;</span>
               </div>
            </div>
         </div>

         {/* TRANSACTION LIST */}
         <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,0.06)', marginBottom: '8px' }}>
            <div style={{ padding: '14px 16px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Recent Transactions</h3>
               <span style={{ fontSize: '11px', fontWeight: 600, color: '#6366F1', fontFamily: 'Inter', cursor: 'pointer' }}>View all &rarr;</span>
            </div>
            <div>
               <TxRow name="Nexus Corp" cat="Enterprise" amt="+$84,200" stat="Processed" pBg="#ECFDF5" pCx="#065F46" />
               <TxRow name="Orbital Labs" cat="Mid-Market" amt="+$28,400" stat="Pending" pBg="#FFFBEB" pCx="#92400E" />
               <TxRow name="AWS Hosting" cat="Infrastructure" amt="-$18,240" stat="Processed" pBg="#ECFDF5" pCx="#065F46" borderNone />
            </div>
         </div>

      </div>

      {/* BOTTOM NAV BAR */}
      <div style={{ height: '56px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 8px' }}>
         <NavTab icon="Home" label="Home" active={true} />
         <NavTab icon="Chart" label="Revenue" />
         <NavTab icon="List" label="Txns" />
         <NavTab icon="Star" label="Alerts" dot />
         <NavTab icon="User" label="Account" />
      </div>

    </div>
  );
}

// Subcomponents

function MobileKpiCard({ label, value, trend, isNeg }) {
  const bBg = isNeg ? '#FEF2F2' : '#ECFDF5';
  const bCx = isNeg ? '#991B1B' : '#065F46';

  return (
    <div style={{ flexShrink: 0, width: '140px', backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '12px 14px', position: 'relative', overflow: 'hidden', boxShadow: '0 1px 3px rgba(15,23,42,0.06)', border: '1px solid #E2E8F0' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: '#6366F1' }}></div>
      <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#94A3B8', fontFamily: 'Inter', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter', marginBottom: '8px' }}>{value}</div>
      <div>
         <span style={{ backgroundColor: bBg, color: bCx, padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>{trend}</span>
      </div>
    </div>
  );
}

function InsightRow({ color, bg, type, title, desc, borderNone }) {
  return (
    <div style={{ padding: '12px 16px', borderBottom: borderNone ? 'none' : '1px solid #E2E8F0', display: 'flex', gap: '12px' }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
         {type === 'OPPORTUNITY' ? 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            : 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
         }
      </div>
      <div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: color, fontFamily: 'Inter', letterSpacing: '0.04em' }}>{type}</span>
         </div>
         <h4 style={{ margin: '0 0 2px 0', fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{title}</h4>
         <p style={{ margin: 0, fontSize: '11px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter', lineHeight: 1.4, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '280px' }}>{desc}</p>
      </div>
    </div>
  );
}

function TxRow({ name, cat, amt, stat, pBg, pCx, borderNone }) {
  const isPos = amt.startsWith('+');
  return (
    <div style={{ padding: '12px 16px', borderBottom: borderNone ? 'none' : '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
         <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{name}</div>
         <div style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', marginTop: '2px' }}>{cat}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
         <div style={{ fontSize: '13px', fontWeight: 700, color: isPos ? '#10B981' : '#0F172A', fontFamily: 'Inter' }}>{amt}</div>
         <div style={{ backgroundColor: pBg, color: pCx, padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>{stat}</div>
      </div>
    </div>
  );
}

function NavTab({ icon, label, active, dot }) {
  const color = active ? '#6366F1' : '#94A3B8';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', position: 'relative', cursor: 'pointer', padding: '4px 12px' }}>
      {icon === 'Home' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}
      {icon === 'Chart' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><polyline points="18 9 12 15 8 11 3 16"></polyline></svg>}
      {icon === 'List' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>}
      {icon === 'Star' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>}
      {icon === 'User' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
      
      {dot && <div style={{ position: 'absolute', top: '2px', right: '12px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>}
      
      <span style={{ fontSize: '10px', fontWeight: 500, color: color, fontFamily: 'Inter' }}>{label}</span>
    </div>
  );
}
