import React from 'react';
import PageHeader from './PageHeader';
import KpiCardRow from './KpiCards';
import AnalyticsChart from './AnalyticsChart';
import AiInsights from './AiInsights';
import TransactionTable from './TransactionTable';
import ForecastPanel from './ForecastPanel';

export default function DashboardPage() {
  return (
    <div className="page-transition-enter" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 32px' }}>
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
  );
}
