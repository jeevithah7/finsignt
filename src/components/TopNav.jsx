import React from 'react';
import { Search, Calendar, ChevronDown, Bell, DownloadCloud } from 'lucide-react';

export default function TopNav({ width = '1200px', forceFocus = false }) {
  return (
    <div style={{
      width: width,
      height: '56px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: '12px',
      flexShrink: 0
    }}>
      
      {/* Search bar */}
      <div style={{
        position: 'relative',
        width: '280px',
        height: '32px',
        background: '#F8FAFC',
        border: forceFocus ? '1px solid #6366F1' : '1px solid #E2E8F0',
        borderRadius: '8px',
        boxShadow: forceFocus ? '0 0 0 3px rgba(99,102,241,0.18)' : 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px 0 30px'
      }}>
        <Search size={13} color="#94A3B8" style={{ position: 'absolute', left: '9px' }} strokeWidth={2} />
        <span style={{ fontSize: '12.5px', color: forceFocus ? '#64748B' : '#94A3B8', fontFamily: 'Inter' }}>Search metrics, clients, reports…</span>
      </div>

      {/* Flex spacer */}
      <div style={{ flex: 1 }} />

      {/* Date range selector button */}
      <div style={{
        height: '32px',
        padding: '6px 12px',
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        display: 'flex', gap: '6px', alignItems: 'center',
        cursor: 'pointer'
      }}>
        <Calendar size={12} color="#64748B" strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Jan 2024 – Dec 2024</span>
        <ChevronDown size={10} color="#64748B" strokeWidth={2} />
      </div>

      {/* Notification bell button */}
      <div style={{
        width: '32px', height: '32px',
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer'
      }}>
        <Bell size={14} color="#64748B" strokeWidth={2} />
        <div style={{
          position: 'absolute', top: '5px', right: '5px',
          width: '6px', height: '6px', borderRadius: '50%',
          backgroundColor: '#EF4444', border: '1.5px solid #FFFFFF'
        }} />
      </div>

      {/* Export Report button */}
      <div style={{
        height: '32px',
        padding: '6px 14px',
        background: '#6366F1',
        borderRadius: '8px',
        display: 'flex', gap: '6px', alignItems: 'center',
        cursor: 'pointer'
      }}>
        <DownloadCloud size={12} color="#FFFFFF" strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', fontFamily: 'Inter' }}>Export Report</span>
      </div>

      {/* User avatar */}
      <div style={{
        width: '32px', height: '32px',
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#FFFFFF', fontSize: '11px', fontWeight: 700, fontFamily: 'Inter',
        cursor: 'pointer'
      }}>
        AK
      </div>

    </div>
  );
}
