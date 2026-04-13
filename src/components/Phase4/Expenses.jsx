import React, { useState } from 'react';

export default function Expenses() {
  const [filter, setFilter] = useState('All');

  const expenses = [
    { id: 1, vendor: 'AWS', cat: 'Infrastructure', amt: '$18,740', date: 'Dec 09, 2024', status: 'Approved' },
    { id: 2, vendor: 'Gusto', cat: 'Payroll', amt: '$142,500', date: 'Dec 08, 2024', status: 'Approved' },
    { id: 3, vendor: 'Google Ads', cat: 'Marketing', amt: '$32,100', date: 'Dec 07, 2024', status: 'Flagged' },
    { id: 4, vendor: 'Salesforce', cat: 'Operations', amt: '$8,400', date: 'Dec 05, 2024', status: 'Approved' },
    { id: 5, vendor: 'OpenAI', cat: 'R&D', amt: '$14,200', date: 'Dec 04, 2024', status: 'Pending' },
    { id: 6, vendor: 'WeWork', cat: 'Operations', amt: '$12,000', date: 'Dec 02, 2024', status: 'Approved' },
  ];

  const filtered = filter === 'All' ? expenses : expenses.filter(e => e.cat === filter);

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
                Expense Tracking
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                Monitor burn rate and departmental budgets
              </p>
            </div>
            <button style={{ height: '32px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
              Add Expense
            </button>
          </div>

          {/* TOP BANNER: 3 KPI CARDS */}
          <div style={{ display: 'flex', gap: '20px' }}>
             <KpiCard title="Total Spend (MTD)" value="$268,450" sub="84% of total monthly budget" status="good" />
             <KpiCard title="Over-Budget Items" value="3" sub="Marketing & Infra exceeded targets" status="warn" />
             <KpiCard title="Largest Category" value="Payroll" sub="$142,500 &middot; 53% of total" status="neutral" />
          </div>

          {/* ROW 2: CHARTS */}
          <div style={{ display: 'flex', gap: '20px', height: '340px' }}>
            
            {/* Left: Month vs Budget Comparion Bar */}
            <div style={{ flex: 2, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                 <div>
                   <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Month vs Budget</h3>
                   <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Actual spend compared to allocated budget</p>
                 </div>
                 <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#6366F1' }} /><span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>Actual</span></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#E2E8F0' }} /><span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>Budget</span></div>
                 </div>
               </div>
               
               <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
                 {/* Y Axis */}
                 <div style={{ width: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
                   {['$160K', '$120K', '$80K', '$40K', '$0'].map(y => (
                     <span key={y} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{y}</span>
                   ))}
                 </div>
                 
                 <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '24px' }}>
                   {/* Horizontal grid lines */}
                   {[0, 25, 50, 75, 100].map(pct => (
                     <div key={pct} style={{ position: 'absolute', left: 0, right: 0, top: `${pct}%`, height: '1px', backgroundColor: '#E2E8F0', opacity: pct === 100 ? 1 : 0.5 }}></div>
                   ))}
                   
                   <BudgetBar label="Payroll" actual={142} budget={140} max={160} />
                   <BudgetBar label="Infra" actual={45} budget={30} max={160} />
                   <BudgetBar label="Marketing" actual={38} budget={32} max={160} />
                   <BudgetBar label="R&D" actual={22} budget={35} max={160} />
                   <BudgetBar label="Ops" actual={21} budget={25} max={160} />
                 </div>
               </div>
            </div>

            {/* Right: Donut Chart */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ marginBottom: '16px' }}>
                 <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Expense Distribution</h3>
                 <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>By category &middot; Dec 2024</p>
               </div>
               
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ position: 'relative', width: '130px', height: '130px' }}>
                   <svg width="130" height="130" viewBox="0 0 130 130" style={{ transform: 'rotate(-90deg)' }}>
                     {/* Payroll 53% -> 176.4/333 */}
                     <circle cx="65" cy="65" r="53" fill="none" stroke="#6366F1" strokeWidth="24" strokeDasharray="176.4 333" strokeDashoffset="0" />
                     {/* Infra 17% -> 56.6/333 */}
                     <circle cx="65" cy="65" r="53" fill="none" stroke="#3B82F6" strokeWidth="24" strokeDasharray="56.6 333" strokeDashoffset="-176.4" />
                     {/* Marketing 14% -> 46.6/333 */}
                     <circle cx="65" cy="65" r="53" fill="none" stroke="#F59E0B" strokeWidth="24" strokeDasharray="46.6 333" strokeDashoffset="-233" />
                     {/* R&D 8% -> 26.6/333 */}
                     <circle cx="65" cy="65" r="53" fill="none" stroke="#8B5CF6" strokeWidth="24" strokeDasharray="26.6 333" strokeDashoffset="-279.6" />
                     {/* Ops 8% -> 26.6/333 */}
                     <circle cx="65" cy="65" r="53" fill="none" stroke="#10B981" strokeWidth="24" strokeDasharray="26.6 333" strokeDashoffset="-306.2" />
                   </svg>
                   <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                     <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter' }}>$268K</span>
                   </div>
                 </div>
                 
                 <div style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <LegendRow color="#6366F1" label="Payroll" pct="53%" />
                   <LegendRow color="#3B82F6" label="Infrastructure" pct="17%" />
                   <LegendRow color="#F59E0B" label="Marketing" pct="14%" />
                   <LegendRow color="#8B5CF6" label="R&D" pct="8%" />
                   <LegendRow color="#10B981" label="Operations" pct="8%" />
                 </div>
               </div>
            </div>

          </div>

          {/* ROW 3: Itemized List */}
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Itemized Expenses</h3>
                <p style={{ margin: '2px 0 0 0', fontFamily: 'Inter', fontSize: '12px', color: '#64748B' }}>Recent transactions &middot; Month to Date</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['All', 'Payroll', 'Infrastructure', 'Marketing'].map(f => (
                  <button 
                    key={f} onClick={() => setFilter(f)}
                    style={{ backgroundColor: filter === f ? '#EEF2FF' : '#F8FAFC', color: filter === f ? '#4F46E5' : '#64748B', border: '1px solid', borderColor: filter === f ? '#C7D2FE' : '#E2E8F0', padding: '4px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter' }}
                  >{f}</button>
                ))}
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Vendor</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Category</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Amount</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Date</th>
                    <th style={{ padding: '12px', borderBottom: '1px solid #E2E8F0', fontSize: '10.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(row => (
                    <tr key={row.id}>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>{row.vendor}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
                         <span style={{ fontSize: '11px', fontWeight: 500, color: '#475569', backgroundColor: '#F1F5F9', padding: '3px 8px', borderRadius: '4px' }}>{row.cat}</span>
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>{row.amt}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9', fontSize: '12.5px', color: '#64748B' }}>{row.date}</td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid #F1F5F9' }}>
                         <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

    </div>
  );
}

// Subcomponents
function KpiCard({ title, value, sub, status }) {
  const isWarn = status === 'warn';
  const isGood = status === 'good';
  const color = isWarn ? '#DC2626' : (isGood ? '#059669' : '#4F46E5');
  const bg = isWarn ? '#FEF2F2' : (isGood ? '#ECFDF5' : '#EEF2FF');

  return (
    <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '16px 20px', display: 'flex', flexDirection: 'column' }}>
       <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{title}</span>
       <span style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter', lineHeight: 1, marginBottom: '6px' }}>{value}</span>
       <div style={{ padding: '4px 8px', backgroundColor: bg, color: color, borderRadius: '4px', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', alignSelf: 'flex-start' }}>
         {sub}
       </div>
    </div>
  );
}

function BudgetBar({ label, actual, budget, max }) {
  const actPct = (actual / max) * 100;
  const budPct = (budget / max) * 100;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '8px', zIndex: 1 }}>
      <div style={{ position: 'relative', width: '36px', height: '100%' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '0', width: '16px', height: `${actPct}%`, backgroundColor: '#6366F1', borderRadius: '4px 4px 0 0' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '0', width: '16px', height: `${budPct}%`, backgroundColor: '#E2E8F0', borderRadius: '4px 4px 0 0' }} />
      </div>
      <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#475569', fontFamily: 'Inter', position: 'absolute', bottom: '-24px' }}>{label}</span>
    </div>
  )
}

function LegendRow({ color, label, pct }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'Inter' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '3px', backgroundColor: color }} />
        <span style={{ color: '#0F172A', fontWeight: 500 }}>{label}</span>
      </div>
      <span style={{ color: '#64748B', fontWeight: 600 }}>{pct}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  let bg, color, text = status;
  if (status === 'Approved') { bg = '#ECFDF5'; color = '#065F46'; }
  else if (status === 'Flagged') { bg = '#FEF2F2'; color = '#991B1B'; text = '⚑ Flagged'; }
  else { bg = '#FFFBEB'; color = '#92400E'; }
  return (
    <span style={{ backgroundColor: bg, color: color, padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
      {text}
    </span>
  );
}
