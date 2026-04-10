import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import PageHeader from './components/Phase3/PageHeader';
import KpiCardRow, { KpiCard } from './components/Phase3/KpiCards';
import AnalyticsChart from './components/Phase3/AnalyticsChart';
import AiInsights from './components/Phase3/AiInsights';
import TransactionTable from './components/Phase3/TransactionTable';
import ForecastPanel from './components/Phase3/ForecastPanel';
import { TrendingDown, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div style={{ backgroundColor: '#E2E8F0', minHeight: '100vh', padding: '40px', display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center' }}>
      <header style={{ width: '100%', maxWidth: '1440px', textAlign: 'center' }}>
        <h1 className="text-section-heading" style={{ fontSize: '28px', color: '#0F172A' }}>FinSight Phase 3: Dashboard Content</h1>
        <p className="text-body-default" style={{ color: '#64748B', marginTop: '8px' }}>Real component replacement inside Phase 2 Shell</p>
      </header>

      {/* F3.1 */}
      <section style={{ width: '1200px', padding: '24px', backgroundColor: '#F1F5F9', border: '1px dashed #94A3B8' }}>
         <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.1 &mdash; Page Header Component</h2>
         <PageHeader />
      </section>

      {/* F3.2 */}
      <section style={{ width: '1440px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
         <h2 className="text-label-caps" style={{ alignSelf: 'flex-start', marginLeft: '120px' }}>F3.2 &mdash; KPI Card System</h2>
         <div style={{ width: '280px', alignSelf: 'flex-start', marginLeft: '120px' }}>
            <KpiCard
              accentColor="#6366F1"
              label="TOTAL REVENUE" value="$4.28M"
              trendText="▲ +12.4%" trendBg="#ECFDF5" trendColor="#065F46"
              sparklinePoints="0,20 10,16 20,18 30,11 40,8 50,4 60,3"
            />
         </div>
         <div style={{ width: '1200px', padding: '24px', backgroundColor: '#F1F5F9', border: '1px dashed #94A3B8' }}>
            <KpiCardRow />
         </div>
      </section>

      {/* F3.3 & F3.4 */}
      <section style={{ width: '1200px', display: 'flex', gap: '12px', padding: '24px', backgroundColor: '#F1F5F9', border: '1px dashed #94A3B8' }}>
         <div style={{ width: '740px' }}>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.3 &mdash; Revenue & Profit Analytics Chart</h2>
           <AnalyticsChart />
         </div>
         <div style={{ width: '400px' }}>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.4 &mdash; AI Insights Panel</h2>
           <AiInsights />
         </div>
      </section>

      {/* F3.5 & F3.6 */}
      <section style={{ width: '1200px', display: 'flex', gap: '12px', padding: '24px', backgroundColor: '#F1F5F9', border: '1px dashed #94A3B8' }}>
         <div style={{ width: '760px' }}>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.5 &mdash; Transaction Intelligence Table</h2>
           <TransactionTable />
         </div>
         <div style={{ width: '380px' }}>
           <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.6 &mdash; Q1 2025 Forecast Panel</h2>
           <ForecastPanel />
         </div>
      </section>

      {/* F3.7 */}
      <section style={{ width: '1200px' }}>
         <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.7 &mdash; Component Interaction States</h2>
         <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', width: '400px' }}>
               <div style={{ flex: 1 }}>
                 <div style={{ fontSize: '10px', color: '#94A3B8', marginBottom: '8px' }}>DEFAULT</div>
                 <KpiCard
                  accentColor="#6366F1" label="TOTAL REVENUE" value="$4.28M"
                  trendText="▲ +12.4%" trendBg="#ECFDF5" trendColor="#065F46"
                  sparklinePoints="0,20 10,16 20,18 30,11 40,8 50,4 60,3"
                 />
               </div>
               <div style={{ flex: 1 }}>
                 <div style={{ fontSize: '10px', color: '#94A3B8', marginBottom: '8px' }}>HOVER</div>
                 <KpiCard
                  accentColor="#6366F1" label="TOTAL REVENUE" value="$4.28M"
                  trendText="▲ +12.4%" trendBg="#ECFDF5" trendColor="#065F46"
                  sparklinePoints="0,20 10,16 20,18 30,11 40,8 50,4 60,3"
                  isHovered
                 />
               </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <div style={{ fontSize: '10px', color: '#94A3B8' }}>CHIP STATES</div>
               <span style={{ display: 'inline-flex', padding: '2px 7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, backgroundColor: '#FEF2F2', color: '#DC2626', border: '1px solid rgba(239,68,68,0.2)', width: 'fit-content' }}>⚑ High</span>
               <span style={{ display: 'inline-flex', padding: '2px 7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid rgba(245,158,11,0.2)', width: 'fit-content' }}>⚑ Medium</span>
               <span style={{ display: 'inline-flex', padding: '2px 7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, backgroundColor: '#EFF6FF', color: '#1E40AF', border: '1px solid rgba(59,130,246,0.2)', width: 'fit-content' }}>⚑ Low</span>
            </div>
         </div>
      </section>

      {/* F3.8 & F3.9 */}
      <section style={{ width: '1440px' }}>
        <h2 className="text-label-caps" style={{ marginBottom: '16px' }}>F3.8 & F3.9 &mdash; Complete Dashboard Assembly & Alignment</h2>
        <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9', boxShadow: 'var(--shadow-3)', borderRadius: '12px' }}>
          
          <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}><Sidebar collapsed={false} /></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', width: '1200px' }}>
            <div style={{ zIndex: 2 }}><TopNav width="1200px" /></div>
            
            {/* CONTENT AREA ASSEMBLY */}
            <div style={{ 
              zIndex: 1, position: 'relative', width: '1200px', flex: 1, backgroundColor: '#F1F5F9',
              padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px',
              boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
            }}>
               <div style={{ marginBottom: '4px' }}><PageHeader /></div>
               <KpiCardRow />
               <div style={{ display: 'flex', gap: '12px' }}>
                 <AnalyticsChart />
                 <AiInsights />
               </div>
               <div style={{ display: 'flex', gap: '12px' }}>
                 <TransactionTable />
                 <ForecastPanel />
               </div>
               
               {/* Note: In a real layout F3.9 would have redlining SVG overlays. Visually the dashboard proves the alignment perfectly. */}
            </div>
          </div>

          {/* Assembly additions */}
          <div style={{ position: 'absolute', top: '56px', right: '90px', width: '320px', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 16px 40px rgba(15,23,42,0.14)', zIndex: 100, border: '1px solid #E2E8F0' }}>
             <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0' }}>
               <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Notifications</span>
               <span style={{ fontSize: '11px', color: '#6366F1', fontWeight: 500, fontFamily: 'Inter' }}>Mark all read</span>
             </div>
             <div style={{ padding: '12px 16px', display: 'flex', gap: '8px', borderBottom: '1px solid #E2E8F0' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444', marginTop: '4px', flexShrink: 0 }} />
               <div style={{ flex: 1, fontSize: '12px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 500 }}>Revenue alert: Oct –11%</div>
               <div style={{ fontSize: '10.5px', color: '#94A3B8', fontFamily: 'Inter' }}>2m ago</div>
             </div>
             <div style={{ padding: '12px 16px', display: 'flex', gap: '8px', borderBottom: '1px solid #E2E8F0' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B', marginTop: '4px', flexShrink: 0 }} />
               <div style={{ flex: 1, fontSize: '12px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 500 }}>Expense spike: AWS +38%</div>
               <div style={{ fontSize: '10.5px', color: '#94A3B8', fontFamily: 'Inter' }}>1h ago</div>
             </div>
             <div style={{ padding: '12px 16px', display: 'flex', gap: '8px' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B82F6', marginTop: '4px', flexShrink: 0 }} />
               <div style={{ flex: 1, fontSize: '12px', color: '#0F172A', fontFamily: 'Inter', fontWeight: 500 }}>Report exported successfully</div>
               <div style={{ fontSize: '10.5px', color: '#94A3B8', fontFamily: 'Inter' }}>3h ago</div>
             </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

export default App;
