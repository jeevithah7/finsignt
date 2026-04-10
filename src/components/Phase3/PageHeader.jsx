import React from 'react';

export default function PageHeader() {
  return (
    <div style={{ width: '1152px', height: '64px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      
      {/* LEFT SIDE */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.2 }}>
          Financial Dashboard
        </h1>
        <div style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, color: '#94A3B8', marginTop: '4px' }}>
          Last updated: Today at 9:42 AM · Fiscal Year 2024
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: 'flex', backgroundColor: '#E2E8F0', borderRadius: '8px', padding: '3px' }}>
        <div style={{ 
          backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '5px 16px', 
          fontFamily: 'Inter', fontSize: '11.5px', fontWeight: 600, color: '#6366F1', 
          boxShadow: '0 1px 3px rgba(15,23,42,.08)', cursor: 'default'
        }}>
          Overview
        </div>
        <div style={{ padding: '5px 14px', fontFamily: 'Inter', fontSize: '11.5px', fontWeight: 500, color: '#64748B', cursor: 'pointer' }}>
          Monthly
        </div>
        <div style={{ padding: '5px 14px', fontFamily: 'Inter', fontSize: '11.5px', fontWeight: 500, color: '#64748B', cursor: 'pointer' }}>
          Quarterly
        </div>
        <div style={{ padding: '5px 14px', fontFamily: 'Inter', fontSize: '11.5px', fontWeight: 500, color: '#64748B', cursor: 'pointer' }}>
          YoY
        </div>
      </div>

    </div>
  );
}
