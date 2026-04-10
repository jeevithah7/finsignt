import React from 'react';

const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const yLabels = ['$500K', '$400K', '$300K', '$200K', '$100K']; // $0 is base
const dataExpenses = [212, 228, 224, 245, 270, 257, 282, 277, 295, 287, 303, 290];
const dataRevenue = [280, 310, 295, 340, 380, 362, 410, 395, 430, 385, 445, 428];
const dataProfit = [68, 82, 71, 95, 110, 105, 128, 118, 135, 98, 142, 138];

export default function AnalyticsChart() {
  const chartWidth = 648;
  const chartHeight = 140;
  const xStep = chartWidth / 11;
  const yScale = chartHeight / 500;

  const getY = (val) => chartHeight - (val * yScale);

  const revenuePoints = dataRevenue.map((val, i) => `${i * xStep},${getY(val)}`).join(' ');
  const profitPoints = dataProfit.map((val, i) => `${i * xStep},${getY(val)}`).join(' ');
  const revenueFillPoints = `0,${chartHeight} ${revenuePoints} ${chartWidth},${chartHeight}`;

  return (
    <div style={{
      width: '740px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
      borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04)',
      display: 'flex', flexDirection: 'column'
    }}>
      
      {/* HEADER */}
      <div style={{ padding: '20px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', margin: 0 }}>Revenue & Profit Analytics</h2>
          <div style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#94A3B8', marginTop: '2px' }}>12-month performance overview</div>
        </div>
        
        <div style={{ display: 'flex', gap: '4px' }}>
           <div style={{ backgroundColor: '#EEF2FF', padding: '4px 12px', borderRadius: '5px', fontSize: '11px', fontWeight: 600, color: '#6366F1' }}>Revenue</div>
           <div style={{ backgroundColor: 'transparent', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 500, color: '#64748B' }}>Expenses</div>
           <div style={{ backgroundColor: 'transparent', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 500, color: '#64748B' }}>Cash Flow</div>
        </div>
      </div>

      {/* LEGEND */}
      <div style={{ padding: '0 24px', marginTop: '10px', display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#6366F1' }} />
          <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748B' }}>Total Revenue</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#10B981', border: '1px dashed #FFFFFF' }} />
          <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748B' }}>Net Profit</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#E2E8F0', border: '1px solid #CBD5E1' }} />
          <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748B' }}>Expenses</span>
        </div>
      </div>

      {/* CHART AREA */}
      <div style={{ padding: '12px 24px 20px', display: 'flex', height: '175px' }}>
        
        {/* Y AXIS */}
        <div style={{ width: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '20px' }}>
          {yLabels.map(y => (
            <div key={y} style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{y}</div>
          ))}
          <div style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>$0</div>
        </div>

        {/* SVG PLOT */}
        <div style={{ flex: 1, position: 'relative' }}>
          <svg width="100%" height={chartHeight} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            {/* Gridlines */}
            {[0, 1, 2, 3, 4, 5].map(i => (
              <line key={i} x1="0" y1={(chartHeight/5)*i} x2={chartWidth} y2={(chartHeight/5)*i} stroke="rgba(226,232,240,0.6)" strokeWidth="0.5" strokeDasharray="4 4" />
            ))}

            {/* Expense Bars */}
            {dataExpenses.map((val, i) => {
               const barWidth = 30; // approx 70% of 58 spacing
               const x = i * xStep - barWidth/2;
               const y = getY(val);
               const h = val * yScale;
               return <rect key={i} x={x} y={y} width={barWidth} height={h} fill="#E2E8F0" rx="3" ry="3" />
            })}

            {/* Revenue Line */}
            <polyline points={revenuePoints} fill="none" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
            
            {/* Net Profit Line */}
            <polyline points={profitPoints} fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinejoin="round" strokeDasharray="4 3" />
            
            {/* Hover Points (invisible normally, just plotting October callout) */}
            {/* October is index 9 */}
            <circle cx={9 * xStep} cy={getY(dataRevenue[9])} r="3" fill="#EF4444" stroke="rgba(239,68,68,0.2)" strokeWidth="4" />
          </svg>
          
          {/* Oct Callout Pill */}
          <div style={{
            position: 'absolute', top: `${getY(dataRevenue[9]) - 25}px`, left: `${9 * xStep - 15}px`,
            backgroundColor: '#FEF2F2', padding: '2px 6px', borderRadius: '4px',
            fontSize: '10px', fontWeight: 600, color: '#991B1B', pointerEvents: 'none'
          }}>
            Oct dip
          </div>

          {/* X AXIS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', transform: 'translateX(-10px)' }}>
             {xLabels.map((lbl, i) => (
               <div key={i} style={{ width: '20px', textAlign: 'center', fontSize: '10px', color: '#94A3B8', fontFamily: 'Inter' }}>{lbl}</div>
             ))}
          </div>
        </div>
      </div>

    </div>
  );
}
