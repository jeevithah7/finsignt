import React, { useState, useEffect } from 'react';
import { TrendingDown, AlertTriangle, Droplets, Sparkles, Loader2 } from 'lucide-react';
import axios from 'axios';

const InsightRow = ({ icon: Icon, iconBg, iconColor, headline, body, link, borderLeftColor }) => (
  <div style={{
    minHeight: '56px', padding: '12px 16px', borderBottom: '1px solid #E2E8F0',
    display: 'flex', gap: '10px', alignItems: 'flex-start',
    borderLeft: `2px solid ${borderLeftColor}`,
    boxSizing: 'border-box'
  }}>
    <div style={{
      width: '30px', height: '30px', borderRadius: '8px', backgroundColor: iconBg,
      display: 'flex', alignItems: 'center', justifyItems: 'center', flexShrink: 0
    }}>
      <Icon size={14} color={iconColor} strokeWidth={2} style={{margin: 'auto'}} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{headline}</div>
      <div style={{ fontSize: '11px', fontWeight: 400, color: '#64748B', marginTop: '4px', lineHeight: 1.4, fontFamily: 'Inter' }}>{body}</div>
      <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#6366F1', marginTop: '6px', fontFamily: 'Inter', cursor: 'pointer' }}>{link}</div>
    </div>
  </div>
);

const styleMapping = {
  dip: { icon: TrendingDown, iconBg: '#FEF2F2', iconColor: '#EF4444', borderLeftColor: '#EF4444', link: 'Investigate →' },
  warning: { icon: AlertTriangle, iconBg: '#FFFBEB', iconColor: '#F59E0B', borderLeftColor: '#F59E0B', link: 'Review spend →' },
  info: { icon: Droplets, iconBg: '#EFF6FF', iconColor: '#3B82F6', borderLeftColor: '#3B82F6', link: 'Model scenarios →' },
  success: { icon: Sparkles, iconBg: '#ECFDF5', iconColor: '#10B981', borderLeftColor: '#10B981', link: 'Apply suggestion →' }
};

export default function AiInsights({ timeframe = 'Overview' }) {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      setLoading(true);
      try {
        const token = localStorage.getItem('finsight_token');
        const res = await axios.get(`/api/insights?timeframe=${timeframe}`, { headers: { Authorization: `Bearer ${token}` }});
        setInsights(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, [timeframe]);

  return (
    <div style={{
      width: '100%', height: '100%', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
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
           <div style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#94A3B8' }}>
             {loading ? 'Analyzing data...' : `${insights.length} active signals · updated now`}
           </div>
        </div>
        <div style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '20px', color: '#64748B' }}>
           {loading ? '...' : `${insights.length} signals`}
        </div>
      </div>

      {/* ROWS */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {loading ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
            <Loader2 className="animate-spin" size={24} color="#6366F1" />
          </div>
        ) : (
          insights.map(i => {
            const styles = styleMapping[i.type] || styleMapping.info;
            return (
              <InsightRow
                key={i.id}
                icon={styles.icon} iconBg={styles.iconBg} iconColor={styles.iconColor} borderLeftColor={styles.borderLeftColor}
                headline={i.title} body={i.desc} link={styles.link}
              />
            )
          })
        )}
      </div>
    </div>
  );
}
