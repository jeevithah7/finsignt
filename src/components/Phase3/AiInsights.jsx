import React from 'react';
import { TrendingDown, AlertTriangle, Droplets, Sparkles } from 'lucide-react';

const InsightRow = ({ icon: Icon, iconBg, iconColor, headline, body, link, borderLeftColor }) => (
  <div style={{
    height: '56px', padding: '10px 16px', borderBottom: '1px solid #E2E8F0',
    display: 'flex', gap: '10px', alignItems: 'flex-start',
    borderLeft: `2px solid ${borderLeftColor}`,
    boxSizing: 'border-box'
  }}>
    <div style={{
      width: '30px', height: '30px', borderRadius: '8px', backgroundColor: iconBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
    }}>
      <Icon size={14} color={iconColor} strokeWidth={2} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{headline}</div>
      <div style={{ fontSize: '11px', fontWeight: 400, color: '#64748B', marginTop: '1px', lineHeight: 1.4, fontFamily: 'Inter' }}>{body}</div>
      <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#6366F1', marginTop: '3px', fontFamily: 'Inter', cursor: 'pointer' }}>{link}</div>
    </div>
  </div>
);

export default function AiInsights() {
  return (
    <div style={{
      width: '400px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
      borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden'
    }}>
      {/* HEADER */}
      <div style={{ padding: '16px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366F1', marginRight: '8px' }} />
              <h2 style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', margin: 0 }}>AI Insights</h2>
           </div>
           <div style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#94A3B8' }}>4 active signals · updated now</div>
        </div>
        <div style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '20px', color: '#64748B' }}>
           4 signals
        </div>
      </div>

      {/* ROWS */}
      <InsightRow
        icon={TrendingDown} iconBg="#FEF2F2" iconColor="#EF4444" borderLeftColor="#EF4444"
        headline="Revenue dip detected" body="Oct revenue down 11% vs forecast. Enterprise segment underperforming."
        link="Investigate →"
      />
      <InsightRow
        icon={AlertTriangle} iconBg="#FFFBEB" iconColor="#F59E0B" borderLeftColor="#F59E0B"
        headline="Unusual SaaS spend" body="Cloud infra costs +38% MoM. Possible over-provisioning in us-east-1."
        link="Review spend →"
      />
      <InsightRow
        icon={Droplets} iconBg="#EFF6FF" iconColor="#3B82F6" borderLeftColor="#3B82F6"
        headline="Cash flow risk: Q1" body="Runway at current burn: 14 months. Below 18-month target threshold."
        link="Model scenarios →"
      />
      <InsightRow
        icon={Sparkles} iconBg="#ECFDF5" iconColor="#10B981" borderLeftColor="#10B981"
        headline="Budget optimization" body="Reallocating $42K from marketing to retention yields +6% LTV impact."
        link="Apply suggestion →"
      />
    </div>
  );
}
