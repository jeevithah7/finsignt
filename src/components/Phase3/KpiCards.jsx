import React from 'react';

const Sparkline = ({ points, color }) => (
  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points={points} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export function KpiCard({ accentColor, label, value, trendText, trendBg, trendColor, sparklinePoints, isHovered }) {
  return (
    <div style={{
      width: '100%', minWidth: 0,
      minHeight: '112px',
      backgroundColor: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.55)',
      borderRadius: '12px',
      boxShadow: isHovered 
        ? '0 4px 12px rgba(15,23,42,.08), 0 2px 4px rgba(15,23,42,.04)' 
        : '0 4px 24px rgba(15,23,42,0.08)',
      transform: isHovered ? 'translateY(-1px)' : 'none',
      transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* TOP ACCENT BAR */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        backgroundColor: accentColor, borderRadius: '12px 12px 0 0'
      }} />

      {/* CONTENT */}
      <div style={{ padding: '16px 18px' }}>
        <div style={{
          fontFamily: 'Inter', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em',
          color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px'
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'Inter', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.04em',
          color: '#0F172A', lineHeight: 1
        }}>
          {value}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '3px',
            fontFamily: 'Inter', fontSize: '11px', fontWeight: 600,
            padding: '3px 7px', borderRadius: '5px',
            backgroundColor: trendBg, color: trendColor
          }}>
            {trendText}
          </div>
          <Sparkline points={sparklinePoints} color={accentColor} />
        </div>
      </div>
    </div>
  );
}

export default function KpiCardRow() {
  return (
    <div style={{ width: '100%', display: 'flex', gap: '12px' }}>
      <KpiCard
        accentColor="#6366F1"
        label="TOTAL REVENUE" value="$4.28M"
        trendText="▲ +12.4%" trendBg="#ECFDF5" trendColor="#065F46"
        sparklinePoints="0,20 10,16 20,18 30,11 40,8 50,4 60,3"
      />
      <KpiCard
        accentColor="#10B981"
        label="NET PROFIT" value="$1.14M"
        trendText="▲ +8.7%" trendBg="#ECFDF5" trendColor="#065F46"
        sparklinePoints="0,21 10,17 20,19 30,14 40,10 50,6 60,5"
      />
      <KpiCard
        accentColor="#F59E0B"
        label="MONTHLY GROWTH" value="+8.3%"
        trendText="▼ –1.2% MoM" trendBg="#FFFBEB" trendColor="#92400E"
        sparklinePoints="0,14 10,10 20,6 30,9 40,5 50,10 60,8"
      />
      <KpiCard
        accentColor="#EF4444"
        label="EXPENSE RATIO" value="34.2%"
        trendText="▲ +2.1%" trendBg="#FEF2F2" trendColor="#991B1B"
        sparklinePoints="0,16 10,14 20,15 30,12 40,11 50,13 60,15"
      />
      <KpiCard
        accentColor="#3B82F6"
        label="ACTIVE CLIENTS" value="847"
        trendText="▲ +23 new" trendBg="#EFF6FF" trendColor="#1E40AF"
        sparklinePoints="0,18 10,15 20,14 30,11 40,9 50,6 60,4"
      />
    </div>
  );
}
