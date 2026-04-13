import React, { useState } from 'react';

export default function Transactions() {
  const [selectedTxn, setSelectedTxn] = useState(null);

  const txns = [
    { id: '#TXN-8841', client: 'Nexus Corp', amt: '+$84,500', date: 'Dec 12, 2024', cat: 'Enterprise', method: 'Bank Transfer', status: 'Settled', anomaly: null },
    { id: '#TXN-8835', client: 'Stripe Inc.', amt: '–$31,200', date: 'Dec 11, 2024', cat: 'SaaS Tools', method: 'Credit Card', status: 'Settled', anomaly: 'High' },
    { id: '#TXN-8829', client: 'Orbital Labs', amt: '+$22,000', date: 'Dec 10, 2024', cat: 'Mid-Market', method: 'Wire', status: 'Pending', anomaly: null },
    { id: '#TXN-8821', client: 'AWS Billing', amt: '–$18,740', date: 'Dec 09, 2024', cat: 'Infra', method: 'ACH', status: 'Settled', anomaly: 'Medium' },
    { id: '#TXN-8814', client: 'Vertex AI', amt: '+$56,000', date: 'Dec 08, 2024', cat: 'Enterprise', method: 'Wire', status: 'Settled', anomaly: null },
    { id: '#TXN-8809', client: 'Google Cloud', amt: '–$12,400', date: 'Dec 07, 2024', cat: 'Infra', method: 'Credit Card', status: 'Failed', anomaly: null },
    { id: '#TXN-8801', client: 'Helix Systems', amt: '+$14,200', date: 'Dec 05, 2024', cat: 'Pro', method: 'Stripe', status: 'Settled', anomaly: null },
  ];

  return (
    <>
      <div className="page-transition-enter" style={{ 
        width: '100%', flex: 1, backgroundColor: 'transparent',
        padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
        boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
      }}>
          
          {/* PAGE HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Transaction Ledger
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                Master record of all incoming and outgoing funds
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter', gap: '6px' }}>
                 <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></span> Export
              </button>
            </div>
          </div>

          {/* SUMMARY BAR */}
          <div style={{ display: 'flex', gap: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px 24px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase' }}>Total Count</span>
               <span style={{ fontSize: '24px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 800 }}>8,421</span>
            </div>
            <div style={{ width: '1px', backgroundColor: '#E2E8F0' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase' }}>Flagged Anomalies</span>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 800 }}>14</span>
                  <span style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter' }}>Action req</span>
               </div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#E2E8F0' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
               <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase' }}>Total Volume (MTD)</span>
               <span style={{ fontSize: '24px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 800 }}>$1.48M</span>
            </div>
          </div>

          {/* FILTER BAR & TABLE */}
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            
            {/* Filter Bar */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', gap: '16px', alignItems: 'center' }}>
               <div style={{ flex: 1, position: 'relative' }}>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" style={{ position: 'absolute', left: '10px', top: '9px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                 <input type="text" placeholder="Search by ID, client, or amount..." style={{ width: '100%', boxSizing: 'border-box', height: '32px', paddingLeft: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '12px', fontFamily: 'Inter', outline: 'none' }} />
               </div>
               <FilterDropdown label="Date Range" val="This Month" />
               <FilterDropdown label="Category" val="All Categories" />
               <FilterDropdown label="Status" val="All Statuses" />
               <FilterDropdown label="Amount" val="$0 - $50K" />
            </div>

            {/* Table */}
            <div style={{ flex: 1, overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px 20px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>TXN ID</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Client</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Amount</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Date</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Category</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Method</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '12px 20px 12px 12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', textAlign: 'center' }}>Anomaly</th>
                  </tr>
                </thead>
                <tbody>
                  {txns.map(t => (
                    <tr key={t.id} onClick={() => setSelectedTxn(t)} style={{ cursor: 'pointer', backgroundColor: selectedTxn?.id === t.id ? '#F8FAFC' : 'transparent' }}>
                      <td style={{ padding: '14px 20px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{t.id}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>{t.client}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: t.amt.startsWith('+') ? '#10B981' : '#EF4444', fontWeight: 700 }}>{t.amt}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12.5px', color: '#64748B' }}>{t.date}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, color: '#475569', backgroundColor: '#F1F5F9', padding: '3px 8px', borderRadius: '4px' }}>{t.cat}</span>
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', color: '#475569' }}>{t.method}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
                         <StatusBadge status={t.status} />
                      </td>
                      <td style={{ padding: '14px 20px 14px 12px', borderBottom: '1px solid #F1F5F9', textAlign: 'center' }}>
                         <AnomalyBadge level={t.anomaly} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div style={{ padding: '12px 20px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter' }}>Showing 1 to 7 of 8,421 entries</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                 <button style={{ padding: '4px 8px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', borderRadius: '4px', cursor: 'pointer' }}>&laquo;</button>
                 <button style={{ padding: '4px 10px', border: '1px solid #6366F1', backgroundColor: '#EEF2FF', color: '#4F46E5', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>1</button>
                 <button style={{ padding: '4px 10px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', color: '#64748B', borderRadius: '4px', fontSize: '12px' }}>2</button>
                 <button style={{ padding: '4px 10px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', color: '#64748B', borderRadius: '4px', fontSize: '12px' }}>3</button>
                 <span style={{ padding: '4px', color: '#94A3B8' }}>...</span>
                 <button style={{ padding: '4px 10px', border: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', borderRadius: '4px', cursor: 'pointer' }}>&raquo;</button>
              </div>
            </div>

          </div>
      </div>

        {/* SIDE DRAWER */}
        {selectedTxn && (
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '400px', backgroundColor: '#FFFFFF', zIndex: 10, boxShadow: '-4px 0 24px rgba(15,23,42,0.08)', display: 'flex', flexDirection: 'column' }}>
             <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '16px', fontFamily: 'Inter', fontWeight: 700, color: '#0F172A' }}>Transaction Detail</h2>
                <button onClick={() => setSelectedTxn(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#94A3B8' }}>&times;</button>
             </div>
             
             <div style={{ padding: '24px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                     {selectedTxn.client.charAt(0)}
                   </div>
                   <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>{selectedTxn.client}</h3>
                   <span style={{ fontSize: '28px', fontWeight: 800, color: selectedTxn.amt.startsWith('+') ? '#10B981' : '#EF4444', fontFamily: 'Inter', marginTop: '8px' }}>{selectedTxn.amt}</span>
                   <div style={{ marginTop: '12px' }}><StatusBadge status={selectedTxn.status} /></div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <DetailRow label="Transaction ID" value={selectedTxn.id} />
                   <DetailRow label="Date & Time" value={`${selectedTxn.date}, 14:02 EST`} />
                   <DetailRow label="Category" value={selectedTxn.cat} />
                   <DetailRow label="Payment Method" value={selectedTxn.method} />
                   <DetailRow label="Invoice" value="INV-2024-884" isLink={true} />
                </div>

                {selectedTxn.anomaly && (
                  <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '16px' }}>
                     <h4 style={{ margin: 0, color: '#991B1B', fontSize: '13px', fontFamily: 'Inter', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Anomaly Detected
                     </h4>
                     <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#991B1B', fontFamily: 'Inter', lineHeight: 1.5 }}>
                        Amount is 3x standard deviation away from normal historical limits for this vendor. Marking as {selectedTxn.anomaly} Severity.
                     </p>
                  </div>
                )}
                
                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                   <button style={{ flex: 1, padding: '10px', height: '36px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>Download PDF</button>
                   <button style={{ flex: 1, padding: '10px', height: '36px', backgroundColor: '#6366F1', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Send Receipt</button>
                </div>
              </div>
           </div>
        )}
    </>
  );
}

// Subcomponents
function FilterDropdown({ label, val }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>{label}:</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #E2E8F0', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}>
        <span style={{ fontSize: '11px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 600 }}>{val}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  let bg = '#EEF2FF', color = '#3730A3';
  if (status === 'Settled') { bg = '#ECFDF5'; color = '#065F46'; }
  else if (status === 'Failed') { bg = '#FEF2F2'; color = '#991B1B'; }
  else if (status === 'Pending') { bg = '#FFFBEB'; color = '#92400E'; }
  return (
    <span style={{ backgroundColor: bg, color: color, padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      {status === 'Settled' && <span style={{ width:'6px', height:'6px', borderRadius:'50%', backgroundColor: color }}></span>}
      {status}
    </span>
  );
}

function AnomalyBadge({ level }) {
  if (!level) return <span style={{ color: '#CBD5E1' }}>—</span>;
  const isHigh = level === 'High';
  return (
    <span style={{ backgroundColor: isHigh ? '#FEF2F2' : '#FFFBEB', color: isHigh ? '#DC2626' : '#D97706', border: `1px solid ${isHigh ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)'}`, padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
      ⚑ {level}
    </span>
  )
}

function DetailRow({ label, value, isLink }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'Inter' }}>
       <span style={{ color: '#64748B' }}>{label}</span>
       {isLink ? (
         <span style={{ color: '#6366F1', fontWeight: 600, cursor: 'pointer' }}>{value}</span>
       ) : (
         <span style={{ color: '#0F172A', fontWeight: 600 }}>{value}</span>
       )}
    </div>
  )
}
