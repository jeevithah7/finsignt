import React, { useState } from 'react';

export default function Reports() {
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('All');

  const reports = [
    { id: 1, title: 'Q4 2024 Financial Summary', date: 'Oct 01 - Dec 31, 2024', type: 'Financial', status: 'Ready' },
    { id: 2, title: 'Annual Compliance Audit', date: 'Jan 01 - Dec 31, 2024', type: 'Compliance', status: 'Generating' },
    { id: 3, title: 'Monthly Server Costs', date: 'Dec 01 - Dec 31, 2024', type: 'Operational', status: 'Scheduled' },
    { id: 4, title: 'SaaS Spends Analysis', date: 'Nov 01 - Nov 30, 2024', type: 'Financial', status: 'Ready' },
    { id: 5, title: 'Q3 Tax Provision', date: 'Jul 01 - Sep 30, 2024', type: 'Compliance', status: 'Ready' },
    { id: 6, title: 'Weekly Support Load', date: 'Dec 08 - Dec 14, 2024', type: 'Operational', status: 'Ready' },
  ];

  const filtered = filterType === 'All' ? reports : reports.filter(r => r.type === filterType);

  return (
    <>
      <div className="page-transition-enter" style={{ 
        width: '100%', flex: 1, backgroundColor: 'transparent',
        padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px',
        boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
      }}>
          
          {/* HEADER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
                Reports Hub
              </h1>
              <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
                Generate, schedule, and distribute financial documents
              </p>
            </div>
            <button onClick={() => setShowModal(true)} style={{ height: '36px', backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Schedule New Report
            </button>
          </div>

          {/* FILTER BAR  */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
             <div style={{ display: 'flex', gap: '8px' }}>
                {['All', 'Financial', 'Compliance', 'Operational'].map(f => (
                  <button 
                    key={f} onClick={() => setFilterType(f)}
                    style={{ backgroundColor: filterType === f ? '#0F172A' : '#F8FAFC', color: filterType === f ? '#FFFFFF' : '#64748B', border: '1px solid', borderColor: filterType === f ? '#0F172A' : '#E2E8F0', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter' }}
                  >{f}</button>
                ))}
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FilterDropdown label="Date Range" val="Past 90 Days" />
                <div style={{ width: '1px', height: '24px', backgroundColor: '#E2E8F0' }} />
                <div style={{ position: 'relative' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" style={{ position: 'absolute', left: '10px', top: '9px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input type="text" placeholder="Search reports..." style={{ width: '200px', boxSizing: 'border-box', height: '32px', paddingLeft: '32px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '12px', fontFamily: 'Inter', outline: 'none' }} />
                </div>
             </div>
          </div>

          {/* REPORT GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {filtered.map(report => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
      </div>

        {/* MODAL OVERLAY */}
        {showModal && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '500px', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
               <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 style={{ margin: 0, fontSize: '16px', fontFamily: 'Inter', fontWeight: 700, color: '#0F172A' }}>Schedule New Report</h2>
                  <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#94A3B8' }}>&times;</button>
               </div>
               
               <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 {/* Selectors */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter' }}>Report Type</label>
                    <select style={{ height: '36px', borderRadius: '6px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', backgroundColor: '#FFFFFF', outline: 'none' }}>
                       <option>Financial Summary</option>
                       <option>Compliance Audit</option>
                       <option>Operational Expense</option>
                       <option>Tax Provision</option>
                    </select>
                 </div>

                 <div style={{ display: 'flex', gap: '20px' }}>
                   <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter' }}>Frequency</label>
                      <select style={{ height: '36px', borderRadius: '6px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', backgroundColor: '#FFFFFF', outline: 'none' }}>
                         <option>Weekly</option>
                         <option>Monthly</option>
                         <option>Quarterly</option>
                      </select>
                   </div>
                   <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter' }}>Delivery Format</label>
                      <select style={{ height: '36px', borderRadius: '6px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', backgroundColor: '#FFFFFF', outline: 'none' }}>
                         <option>PDF Document</option>
                         <option>Excel / CSV</option>
                         <option>Presentation</option>
                      </select>
                   </div>
                 </div>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter' }}>Recipient Emails</label>
                    <input type="text" placeholder="team@company.com, execs@company.com" style={{ height: '36px', borderRadius: '6px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', outline: 'none' }} />
                 </div>
               </div>

               <div style={{ padding: '16px 24px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end', gap: '12px', backgroundColor: '#F8FAFC', borderRadius: '0 0 12px 12px' }}>
                  <button onClick={() => setShowModal(false)} style={{ padding: '8px 16px', background: 'none', border: 'none', fontSize: '13px', fontWeight: 600, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}>Cancel</button>
                  <button onClick={() => setShowModal(false)} style={{ padding: '8px 16px', backgroundColor: '#6366F1', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Create Schedule</button>
               </div>
            </div>
          </div>
        )}
    </>
  );
}

// Subcomponents
function ReportCard({ report }) {
  const tBg = report.type === 'Financial' ? '#EEF2FF' : report.type === 'Compliance' ? '#FFFBEB' : '#ECFDF5';
  const tCx = report.type === 'Financial' ? '#4F46E5' : report.type === 'Compliance' ? '#D97706' : '#059669';
  
  const sBg = report.status === 'Ready' ? '#ECFDF5' : report.status === 'Generating' ? '#FEF2F2' : '#F1F5F9';
  const sCx = report.status === 'Ready' ? '#065F46' : report.status === 'Generating' ? '#DC2626' : '#475569';
  
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* THUMBNAIL PREVIEW */}
      <div style={{ height: '120px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '80px', height: '100px', backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginTop: '20px', borderTopRadius: '4px', border: '1px solid #E2E8F0', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '2px' }}></div>
            <div style={{ width: '70%', height: '8px', backgroundColor: '#E2E8F0', borderRadius: '2px' }}></div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
               <div style={{ flex: 1, height: '30px', backgroundColor: '#EEF2FF', borderRadius: '2px' }}></div>
               <div style={{ flex: 1, height: '30px', backgroundColor: '#ECFDF5', borderRadius: '2px' }}></div>
            </div>
            <div style={{ width: '100%', flex: 1, backgroundColor: '#F8FAFC', borderRadius: '2px', border: '1px solid #F1F5F9' }}></div>
        </div>
        {/* Status Badge Over Thumbnail */}
        <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: sBg, color: sCx, padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {report.status === 'Ready' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
          {report.status === 'Generating' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
          {report.status}
        </span>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
         <span style={{ backgroundColor: tBg, color: tCx, padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Inter', alignSelf: 'flex-start', marginBottom: '8px' }}>{report.type}</span>
         <h3 style={{ margin: '0 0 4px 0', fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A', lineHeight: 1.4 }}>{report.title}</h3>
         <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>{report.date}</span>

         {/* ACTION BUTTONS */}
         <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
            <button disabled={report.status !== 'Ready'} style={{ flex: 2, height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: report.status === 'Ready' ? '#0F172A' : '#94A3B8', cursor: report.status === 'Ready' ? 'pointer' : 'not-allowed', fontFamily: 'Inter', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download
            </button>
            <button disabled={report.status !== 'Ready'} style={{ flex: 1, height: '32px', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: report.status === 'Ready' ? '#0F172A' : '#94A3B8', cursor: report.status === 'Ready' ? 'pointer' : 'not-allowed', fontFamily: 'Inter', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Share
            </button>
         </div>
      </div>

    </div>
  );
}

function FilterDropdown({ label, val }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter', fontWeight: 500 }}>{label}:</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}>
        <span style={{ fontSize: '11.5px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 600 }}>{val}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  )
}
