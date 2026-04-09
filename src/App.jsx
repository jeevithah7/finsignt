import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import ContentSkeleton from './components/ContentSkeleton';
import Shell from './components/Shell';
import { Grid2X2, TrendingUp, Star } from 'lucide-react';
import './App.css';

function NavStateDemo({ title, description, icon: Icon, active, hover, badge }) {
  return (
    <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '9px',
          padding: `8px 10px 8px ${active ? '8px' : '10px'}`,
          backgroundColor: active ? 'rgba(99,102,241,0.22)' : hover ? 'rgba(255,255,255,0.06)' : 'transparent',
          borderLeft: active ? '2px solid #6366F1' : '2px solid transparent',
          color: active ? '#FFFFFF' : hover ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.50)',
          fontFamily: 'Inter', fontSize: '12.5px', fontWeight: active ? 600 : 500,
          borderRadius: '8px', 
          width: '200px'
        }}>
          <Icon size={15} strokeWidth={1.5} />
          <span style={{ flex: 1 }}>{title}</span>
          {badge && (
            <span style={{ fontSize: '9px', fontWeight: 700, backgroundColor: '#EF4444', color: '#FFFFFF', padding: '1px 5px', borderRadius: '10px' }}>
              {badge}
            </span>
          )}
        </div>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.50)', fontSize: '12px', fontFamily: 'Inter' }}>
        {description}
      </div>
    </div>
  );
}

function BreakpointDemo({ title, width, sidebar, topbar, content }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', width: '220px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', marginBottom: '8px' }}>{title} ({width})</div>
      <div style={{ display: 'flex', height: '100px', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
        <div style={{ width: sidebar, backgroundColor: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '9px' }}>SB</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '15px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', padding: '0 4px', fontSize: '8px', color: '#94A3B8' }}>{topbar}</div>
          <div style={{ flex: 1, padding: '4px', fontSize: '9px', color: '#94A3B8' }}>{content}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#E2E8F0', minHeight: '100vh', padding: '40px', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center' }}>
      <header style={{ width: '100%', maxWidth: '1440px', textAlign: 'center' }}>
        <h1 className="text-section-heading" style={{ fontSize: '28px', color: '#0F172A' }}>FinSight Phase 2: Structural Shell</h1>
        <p className="text-body-default" style={{ color: '#64748B', marginTop: '8px' }}>Full implementation of layout architecture and navigation</p>
      </header>

      {/* FRAME 2.1 */}
      <section style={{ width: '1440px' }}>
        <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.1 &mdash; Shell Architecture Grid</h2>
        <div style={{ width: '1440px', height: '900px', display: 'flex', border: '2px dashed #94A3B8' }}>
          {/* Region A */}
          <div style={{ width: '240px', height: '100%', backgroundColor: '#0F172A', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 600 }}>SIDEBAR &mdash; 240px</div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
             {/* Region B */}
             <div style={{ height: '56px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '14px', fontWeight: 600 }}>TOPBAR &mdash; 56px</div>
             </div>
             {/* Region C */}
             <div style={{ flex: 1, backgroundColor: '#F1F5F9', position: 'relative', display: 'flex', justifyContent: 'center' }}>
               {/* 12 col grid */}
               <div style={{ width: '100%', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px', opacity: 0.1 }}>
                 {Array(12).fill(0).map((_, i) => <div key={i} style={{ backgroundColor: '#6366F1', height: '100%' }} />)}
               </div>
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '14px', fontWeight: 600 }}>CONTENT AREA &mdash; 1200 x 844px</div>
             </div>
          </div>
        </div>
      </section>

      {/* FRAME 2.2 */}
      <section style={{ width: '1440px', display: 'flex', gap: '40px' }}>
         <div>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.2 &mdash; Sidebar Navigation</h2>
           <Sidebar />
         </div>

         {/* FRAME 2.7 inserted here for proximity */}
         <div>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.7 &mdash; All Nav Item States</h2>
           <div style={{ width: '500px', backgroundColor: '#0F172A', borderRadius: '12px', overflow: 'hidden' }}>
             <NavStateDemo title="Revenue Analytics" description="DEFAULT — 50% white opacity" icon={TrendingUp} />
             <NavStateDemo title="Revenue Analytics" description="HOVER — subtle bg + 85% white" icon={TrendingUp} hover />
             <NavStateDemo title="Dashboard" description="ACTIVE — indigo tint + left border" icon={Grid2X2} active />
             <NavStateDemo title="Risk Alerts" description="BADGE — alert count pill" icon={Star} badge="3" />
           </div>

           {/* FRAME 2.8 */}
           <h2 className="text-label-caps" style={{ marginBottom: '16px', marginTop: '40px' }}>F2.8 &mdash; Responsive Breakpoints</h2>
           <div style={{ width: '800px', backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px' }}>
              <BreakpointDemo title="1440px (Full)" width="1440px" sidebar="240px" topbar="All elements" content="1200px 5 KPI cols" />
              <BreakpointDemo title="1280px (Compact)" width="1280px" sidebar="64px" topbar="Date collapses" content="1376px 5 KPI cols" />
              <BreakpointDemo title="1024px (Tablet Edge)" width="1024px" sidebar="0px" topbar="Hamburger menu" content="1024px 3+2 grid" />
           </div>
         </div>
      </section>

      {/* FRAME 2.3 & 2.4 combined visually but distinct */}
      <section style={{ width: '1440px' }}>
         <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.3 &mdash; Top Navigation Bar (Default & Focus variant)</h2>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <TopNav />
           <TopNav forceFocus />
         </div>

         <h2 className="text-label-caps" style={{ marginBottom: '16px', marginTop: '40px' }}>F2.4 &mdash; Content Area Skeleton</h2>
         <div style={{ boxShadow: 'var(--shadow-2)', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
           <ContentSkeleton width="1200px" />
         </div>
      </section>

      {/* FRAME 2.5 */}
      <section style={{ width: '1440px' }}>
        <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.5 &mdash; Full Shell (1440x900)</h2>
        <div style={{ boxShadow: 'var(--shadow-3)', borderRadius: '12px', overflow: 'hidden' }}>
          <Shell withAnnotations />
        </div>
      </section>

      {/* FRAME 2.6 */}
      <section style={{ width: '1440px' }}>
        <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F2.6 &mdash; Sidebar Collapsed (1280px breakpoint scenario)</h2>
        <div style={{ boxShadow: 'var(--shadow-3)', borderRadius: '12px', overflow: 'hidden' }}>
          <Shell collapsed withAnnotations />
        </div>
      </section>

    </div>
  );
}

export default App;
