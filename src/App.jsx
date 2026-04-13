import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import PageHeader from './components/Phase3/PageHeader';
import KpiCardRow from './components/Phase3/KpiCards';
import AnalyticsChart from './components/Phase3/AnalyticsChart';
import AiInsights from './components/Phase3/AiInsights';
import TransactionTable from './components/Phase3/TransactionTable';
import ForecastPanel from './components/Phase3/ForecastPanel';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
      
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar collapsed={false} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
        <div style={{ zIndex: 2 }}>
          <TopNav width="100%" />
        </div>
        
        {/* CONTENT AREA ASSEMBLY */}
        <div style={{ 
          zIndex: 1, position: 'relative', width: '100%', flex: 1, backgroundColor: '#F1F5F9',
          padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
          boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)',
          overflowY: 'auto'
        }}>
           <div style={{ marginBottom: '4px' }}><PageHeader /></div>
           <KpiCardRow />
           <div style={{ display: 'flex', gap: '20px' }}>
             <div style={{ flex: 1, minWidth: 0 }}><AnalyticsChart /></div>
             <div style={{ flexShrink: 0, width: '400px' }}><AiInsights /></div>
           </div>
           <div style={{ display: 'flex', gap: '20px' }}>
             <div style={{ flex: 1, minWidth: 0 }}><TransactionTable /></div>
             <div style={{ flexShrink: 0, width: '380px' }}><ForecastPanel /></div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
