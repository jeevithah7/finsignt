import React, { useState } from 'react';
import RevenueAnalytics from './RevenueAnalytics'; // Using Revenue Analytics as the dashboard background

export default function ExportModal() {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', overflow: 'hidden' }}>
      
      {/* BACKGROUND DASHBOARD */}
      <div style={{ filter: 'blur(4px)', transform: 'scale(1.01)' }}>
         <RevenueAnalytics />
      </div>

      {/* OVERLAY */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15,23,42,0.45)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* MODAL CARD */}
            <div style={{ width: '560px', backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 16px 40px rgba(15,23,42,0.14)', padding: '32px' }}>
               
               {/* HEADER */}
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div>
                     <h2 style={{ margin: 0, fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Export Report</h2>
                     <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, color: '#94A3B8' }}>Configure and download your financial report</p>
                  </div>
                  <button style={{ backgroundColor: 'transparent', border: 'none', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748B' }}>
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
               </div>

               {/* FORM SECTIONS */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* SECTION 1 — Report Type */}
                  <div>
                     <div style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Report Type</div>
                     <div style={{ display: 'flex', gap: '8px' }}>
                        <OptionCard title="Executive Summary" sub="High-level KPIs for stakeholders" badge="Most used" selected={true} />
                        <OptionCard title="Full Analytics" sub="Complete data with all charts" />
                        <OptionCard title="Custom" sub="Choose specific sections" />
                     </div>
                  </div>

                  {/* SECTION 2 — Date Range */}
                  <div>
                     <div style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Date Range</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <DateInput value="Jan 1, 2024" />
                        <span style={{ fontSize: '12px', fontWeight: 400, color: '#94A3B8', fontFamily: 'Inter' }}>to</span>
                        <DateInput value="Dec 31, 2024" />
                     </div>
                  </div>

                  {/* SECTION 3 — Include Sections */}
                  <div>
                     <div style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Include Sections</div>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <Checkbox label="Revenue Overview" checked={true} />
                        <Checkbox label="Profit Analysis" checked={true} />
                        <Checkbox label="Expense Breakdown" checked={true} />
                        <Checkbox label="Transaction Log" checked={true} />
                        <Checkbox label="Forecasting Data" checked={true} />
                        <Checkbox label="Risk Alerts" checked={false} />
                     </div>
                  </div>

                  {/* SECTION 4 — Format */}
                  <div>
                     <div style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Format</div>
                     <div style={{ display: 'flex', gap: '8px' }}>
                        <FormatPill label="PDF" selected={true} />
                        <FormatPill label="Excel" />
                        <FormatPill label="PowerPoint" />
                     </div>
                  </div>

                  {/* SECTION 5 — Delivery */}
                  <div>
                     <div style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Inter', color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Delivery</div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: '#0F172A', fontFamily: 'Inter' }}>Email to stakeholders</span>
                        {/* Toggle Switch */}
                        <div style={{ width: '36px', height: '20px', borderRadius: '10px', backgroundColor: '#6366F1', position: 'relative' }}>
                           <div style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#FFFFFF' }}></div>
                        </div>
                     </div>
                     <div style={{ marginTop: '8px', padding: '0 12px', height: '36px', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', fontSize: '12px', color: '#64748B', fontFamily: 'Inter', backgroundColor: '#F8FAFC' }}>
                        arjun@finsight.io +2 more
                     </div>
                  </div>

               </div>

               {/* FOOTER */}
               <div style={{ height: '1px', backgroundColor: '#E2E8F0', width: '100%', margin: '20px 0' }}></div>
               
               {!showProgress ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        <span style={{ fontSize: '11px', fontFamily: 'Inter' }}>~2.4 MB &middot; PDF format</span>
                     </div>
                     <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 16px', height: '34px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>
                           Cancel
                        </button>
                        <button onClick={() => setShowProgress(true)} style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '0 20px', height: '34px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                           Generate Report
                        </button>
                     </div>
                  </div>
               ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ width: '100%', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '67%', height: '100%', backgroundColor: '#6366F1' }}></div>
                     </div>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Generating report… 67%</span>
                        <a href="#" style={{ fontSize: '11px', color: '#EF4444', fontFamily: 'Inter', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); setShowProgress(false); }}>Cancel</a>
                     </div>
                  </div>
               )}

            </div>
            
            {showProgress && <div style={{ height: '34px' }} />} {/* Placeholder to offset progress state height change visually if needed, though they asked for it below modal? Wait: "PROGRESS STATE VARIANT (show below modal): Same modal but with progress bar replacing footer". I replaced the footer. */}
         </div>

      </div>
    </div>
  );
}

// Subcomponents

function OptionCard({ title, sub, badge, selected }) {
  return (
    <div style={{ flex: 1, border: selected ? '2px solid #6366F1' : '1px solid #E2E8F0', backgroundColor: selected ? '#EEF2FF' : '#FFFFFF', borderRadius: '8px', padding: '12px 14px', cursor: 'pointer' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: selected ? 'rgba(99,102,241,0.1)' : '#F1F5F9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={selected ? '#6366F1' : '#64748B'} strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{title}</span>
         </div>
         <span style={{ fontSize: '10px', color: '#64748B', fontFamily: 'Inter', lineHeight: 1.2 }}>{sub}</span>
         {badge && <span style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 700, fontFamily: 'Inter', alignSelf: 'flex-start', marginTop: '4px' }}>{badge}</span>}
      </div>
    </div>
  );
}

function DateInput({ value }) {
  return (
    <div style={{ flex: 1, height: '36px', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '8px', backgroundColor: '#FFFFFF' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      <span style={{ fontSize: '13px', color: '#0F172A', fontFamily: 'Inter' }}>{value}</span>
    </div>
  );
}

function Checkbox({ label, checked }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: checked ? '1.5px solid #6366F1' : '1.5px solid #E2E8F0', backgroundColor: checked ? '#6366F1' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         {checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
      </div>
      <span style={{ fontSize: '12px', fontWeight: 500, color: '#334155', fontFamily: 'Inter' }}>{label}</span>
    </div>
  );
}

function FormatPill({ label, selected }) {
  return (
    <div style={{ padding: '6px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, fontFamily: 'Inter', backgroundColor: selected ? '#6366F1' : '#F1F5F9', color: selected ? '#FFFFFF' : '#64748B', cursor: 'pointer' }}>
      {label}
    </div>
  );
}
