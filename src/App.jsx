import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import DashboardPage from './components/Phase3/DashboardPage';
import RevenueAnalytics from './components/Phase4/RevenueAnalytics';
import Expenses from './components/Phase4/Expenses';
import Transactions from './components/Phase4/Transactions';
import Forecasting from './components/Phase4/Forecasting';
import Reports from './components/Phase4/Reports';
import RiskAlerts from './components/Phase4/RiskAlerts';
import Settings from './components/Phase4/Settings';
import LoginPage from './components/LoginPage';

export default function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('finsight_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('finsight_token');
    localStorage.removeItem('finsight_user');
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
      
      {/* PERSISTENT SIDEBAR */}
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar collapsed={false} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
        {/* PERSISTENT TOPNAV */}
        <div style={{ zIndex: 2 }}>
          <TopNav width="100%" user={user} onLogout={handleLogout} />
        </div>
        
        {/* ROUTED CONTENT AREA */}
        <div style={{ flex: 1, position: 'relative', backgroundColor: '#F1F5F9', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
           <Routes location={location} key={location.pathname}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/revenue-analytics" element={<RevenueAnalytics />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/forecasting" element={<Forecasting />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/risk-alerts" element={<RiskAlerts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<DashboardPage />} />
           </Routes>
        </div>
      </div>
    </div>
  );
}
