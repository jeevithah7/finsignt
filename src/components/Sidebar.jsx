import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid2X2, TrendingUp, Clock, List, LineChart, FileText, Star, Settings, MoreVertical } from 'lucide-react';

export default function Sidebar({ collapsed = false }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div style={{
      width: collapsed ? '64px' : '240px',
      height: '900px',
      backgroundColor: '#0F172A',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      transition: 'width 0.3s ease'
    }}>
      {/* LOGO ZONE */}
      <div style={{
        height: '72px',
        padding: collapsed ? '18px 0 0 0' : '20px 20px 0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          width: '30px', height: '30px',
          backgroundColor: '#6366F1',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L10 12L14 16L20 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {!collapsed && (
          <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>FinSight</span>
            <span style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Analytics</span>
          </div>
        )}
      </div>

      {/* NAVIGATION ZONE */}
      <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        
        {/* GROUP 1 */}
        {!collapsed && <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', padding: '0 8px', marginBottom: '6px', marginTop: '10px' }}>MAIN</div>}
        <NavItem to="/" icon={<Grid2X2 size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Dashboard" active={path === '/'} collapsed={collapsed} />
        <NavItem to="/revenue-analytics" icon={<TrendingUp size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Revenue Analytics" active={path === '/revenue-analytics'} collapsed={collapsed} />
        <NavItem to="/expenses" icon={<Clock size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Expenses" active={path === '/expenses'} collapsed={collapsed} />
        <NavItem to="/transactions" icon={<List size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Transactions" active={path === '/transactions'} collapsed={collapsed} />

        {/* GROUP 2 */}
        {!collapsed && <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', padding: '0 8px', marginBottom: '6px', marginTop: '10px' }}>INTELLIGENCE</div>}
        <NavItem to="/forecasting" icon={<LineChart size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Forecasting" active={path === '/forecasting'} collapsed={collapsed} />
        <NavItem to="/reports" icon={<FileText size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Reports" active={path === '/reports'} collapsed={collapsed} />
        <NavItem to="/risk-alerts" icon={<Star size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Risk Alerts" active={path === '/risk-alerts'} badge="3" collapsed={collapsed} badgeStyle={{ background: '#EF4444', color: '#FFFFFF' }} />

        {/* GROUP 3 */}
        {!collapsed && <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', padding: '0 8px', marginBottom: '6px', marginTop: '10px' }}>SYSTEM</div>}
        <NavItem to="/settings" icon={<Settings size={collapsed ? 20 : 15} strokeWidth={1.5} />} label="Settings" active={path === '/settings'} collapsed={collapsed} />
        
      </div>

      {/* FOOTER ZONE */}
      <div style={{
        height: '60px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '12px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        gap: '8px'
      }}>
        <div style={{
          width: '28px', height: '28px',
          borderRadius: '9999px',
          backgroundColor: '#6366F1',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFFFFF', fontSize: '10px', fontWeight: 700,
          flexShrink: 0
        }}>
          AK
        </div>
        {!collapsed && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', whiteSpace: 'nowrap' }}>Arjun Kapoor</span>
              <span style={{ fontSize: '10px', fontWeight: 400, color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>CFO, Series B</span>
            </div>
            <MoreVertical size={14} color="rgba(255,255,255,0.30)" style={{ flexShrink: 0 }} />
          </>
        )}
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, active, collapsed, badge }) {
  // Compute styles based on state
  let bg = active ? 'rgba(99,102,241,0.22)' : 'transparent';
  let color = active ? '#FFFFFF' : 'rgba(255,255,255,0.50)';
  let paddingLeft = collapsed ? '0' : (active ? '8px' : '10px');
  let borderLeft = active && !collapsed ? '2px solid #6366F1' : '2px solid transparent';
  let fontWeight = active ? 600 : 500;

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          padding: collapsed ? '8px 0' : `8px 10px 8px ${paddingLeft}`,
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderRadius: '8px',
          marginBottom: '2px',
          backgroundColor: bg,
          borderLeft: borderLeft,
          color: color,
          fontFamily: 'Inter',
          fontSize: '12.5px',
          fontWeight: fontWeight,
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          if (!active) {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
          }
        }}
        onMouseLeave={(e) => {
          if (!active) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'rgba(255,255,255,0.50)';
          }
        }}
      >
        {icon}
        {!collapsed && (
          <>
            <span style={{ flex: 1 }}>{label}</span>
            {badge && (
              <span style={{
                fontSize: '9px', fontWeight: 700, backgroundColor: '#EF4444', color: '#FFFFFF',
                padding: '1px 5px', borderRadius: '10px'
              }}>
                {badge}
              </span>
            )}
          </>
        )}
        
        {collapsed && active && (
          <div style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translateY(-50%)', marginLeft: '8px', backgroundColor: '#1E293B', color: '#FFFFFF', fontSize: '11px', fontWeight: 500, padding: '5px 10px', borderRadius: '6px', boxShadow: 'var(--shadow-2)', whiteSpace: 'nowrap', zIndex: 10 }}>
            {label}
          </div>
        )}
      </div>
    </Link>
  );
}
