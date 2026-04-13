import React, { useState } from 'react';

export default function RiskAlerts() {
  const [activeAlerts, setActiveAlerts] = useState([
    { id: 1, severity: 'Critical', title: 'Revenue target missed: October 2024', desc: 'Monthly recurring revenue dipped 11% below the forecasted threshold. Primary driver identified as Enterprise client churn (Helix Systems).', metric: 'MRR', date: '6 hours ago' },
    { id: 2, severity: 'Warning', title: 'Unusual Expense Spike: Cloud Infrastructure', desc: 'AWS billing for US-East region exceeded standard monthly variance by 38%. Review potential un-provisioned EC2 clusters.', metric: 'Expenses', date: '1 day ago' },
    { id: 3, severity: 'Info', title: 'Cash Runway projection updated', desc: 'Latest burn rate models peg runway at 14 months, which is approaching the 12-month internal alert threshold.', metric: 'Cash Flow', date: '2 days ago' }
  ]);

  const removeAlert = (id) => {
    setActiveAlerts(activeAlerts.filter(a => a.id !== id));
  };

  return (
    <div className="page-transition-enter" style={{ 
      width: '100%', flex: 1, backgroundColor: 'transparent',
      padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px',
      boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
    }}>
          
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Risk & Anomaly Alerts
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                AI-detected operational deviations and financial risks
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter', gap: '6px' }}>
                 Mark all as read
              </button>
            </div>
          </div>

          {/* SUMMARY ROW */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <SummaryStat label="Critical" count={1} color="#EF4444" bg="#FEF2F2" />
            <SummaryStat label="Warning" count={1} color="#F59E0B" bg="#FFFBEB" />
            <SummaryStat label="Info" count={1} color="#3B82F6" bg="#EFF6FF" />
            <div style={{ flex: 1, borderLeft: '1px solid #E2E8F0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>System Status</span>
               <span style={{ fontSize: '14px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} /> Anomaly detection active
               </span>
            </div>
          </div>

          {/* SPLIT LAYOUT: Active Alerts (Left) vs History Timeline (Right) */}
          <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
            
            {/* ACTIVE ALERTS COLUMN */}
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Action Required ({activeAlerts.length})</h3>
              
              {activeAlerts.length === 0 && (
                <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
                   <span style={{ fontSize: '24px' }}>🎉</span>
                   <h3 style={{ margin: '12px 0 4px', fontSize: '14px', color: '#0F172A', fontFamily: 'Inter' }}>All caught up!</h3>
                   <p style={{ margin: 0, fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>No active risks detected in your metrics.</p>
                </div>
              )}

              {activeAlerts.map(alert => (
                <div key={alert.id} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', gap: '12px' }}>
                         <SeverityIcon level={alert.severity} />
                         <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>{alert.title}</h4>
                            <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'Inter', fontWeight: 500, marginTop: '2px' }}>Detected {alert.date}</span>
                         </div>
                      </div>
                      <span style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter' }}>
                         Metric: {alert.metric}
                      </span>
                   </div>

                   <p style={{ margin: 0, fontSize: '13px', color: '#475569', fontFamily: 'Inter', lineHeight: 1.6 }}>
                      {alert.desc}
                   </p>

                   <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                      <button style={{ height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '6px', padding: '0 20px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Investigate</button>
                      <button onClick={() => removeAlert(alert.id)} style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '0 20px', fontSize: '12px', fontWeight: 600, color: '#475569', cursor: 'pointer', fontFamily: 'Inter' }}>Dismiss</button>
                   </div>
                </div>
              ))}
            </div>

            {/* RISK HISTORY TIMELINE */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '24px' }}>
                 <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Risk History</h3>
                 <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Resolved alerts from the past 30 days</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', flex: 1 }}>
                 {/* Vertical line constraint */}
                 <div style={{ position: 'absolute', top: '10px', bottom: '20px', left: '16px', width: '2px', backgroundColor: '#F1F5F9', zIndex: 0 }}></div>
                 
                 <TimelineItem 
                   title="Legal compliance review missing" date="Dec 05, 2024"
                   note="Acknowledged and assigned to outside counsel for review."
                   iconClr="#F59E0B"
                 />
                 <TimelineItem 
                   title="Unexpected churn volume" date="Nov 21, 2024"
                   note="Resolved internally with Customer Success targeted campaigns."
                   iconClr="#EF4444"
                 />
                 <TimelineItem 
                   title="Banking feed disconnected" date="Nov 18, 2024"
                   note="Re-authenticated via Plaid interface."
                   iconClr="#3B82F6"
                 />
                 <TimelineItem 
                   title="Late invoice threshold crossed" date="Nov 10, 2024"
                   note="Auto-reminders sent. 90% of invoices recovered within 5 days."
                   iconClr="#F59E0B"
                 />
              </div>

              <button style={{ width: '100%', height: '36px', backgroundColor: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter', marginTop: '16px' }}>
                Load Older History
              </button>

            </div>

          </div>

    </div>
  );
}

// Subcomponents
function SummaryStat({ label, count, color, bg }) {
  return (
    <div style={{ flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
       <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: 800, color: color, fontFamily: 'Inter' }}>{count}</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase' }}>Active</span>
          <span style={{ fontSize: '15px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 700 }}>{label}</span>
       </div>
    </div>
  )
}

function SeverityIcon({ level }) {
  const isC = level === 'Critical';
  const isW = level === 'Warning';
  const bg = isC ? '#FEF2F2' : (isW ? '#FFFBEB' : '#EFF6FF');
  const cx = isC ? '#DC2626' : (isW ? '#D97706' : '#2563EB');
  
  return (
    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cx} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isC && <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>}
          {isW && <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>}
          {!isC && !isW && <circle cx="12" cy="12" r="10"></circle>}
       </svg>
    </div>
  )
}

function TimelineItem({ title, date, note, iconClr }) {
  return (
    <div style={{ display: 'flex', gap: '16px', zIndex: 1, position: 'relative', marginBottom: '24px' }}>
      <div style={{ width: '32px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
         <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFFFFF', border: `3px solid ${iconClr}`, marginTop: '4px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
           <h4 style={{ margin: 0, fontSize: '13px', color: '#0F172A', fontWeight: 600, fontFamily: 'Inter' }}>{title}</h4>
         </div>
         <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'Inter', marginBottom: '8px' }}>Resolved {date}</span>
         <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px', fontSize: '12px', color: '#475569', fontFamily: 'Inter', lineHeight: 1.4 }}>
           {note}
         </div>
      </div>
    </div>
  )
}
