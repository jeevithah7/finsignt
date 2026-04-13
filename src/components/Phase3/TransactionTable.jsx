import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function TransactionTable() {
  return (
    <div style={{
      width: '100%', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
      borderRadius: '12px', boxShadow: '0 1px 3px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04)',
      display: 'flex', flexDirection: 'column'
    }}>
      
      {/* HEADER */}
      <div style={{ padding: '16px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
           <h2 style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 700, color: '#0F172A', margin: 0 }}>Transaction Intelligence</h2>
           <div style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 400, color: '#94A3B8', marginTop: '2px' }}>Recent activity · anomaly detection active</div>
        </div>
        <div style={{ padding: '4px 10px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
           <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#EF4444', marginRight: '5px' }} />
           <span style={{ fontSize: '10.5px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>2 anomalies flagged</span>
        </div>
      </div>

      {/* TABLE */}
      <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ height: '36px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
            <th style={{ width: '10%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>TXN ID</th>
            <th style={{ width: '18%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>Client</th>
            <th style={{ width: '13%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Amount <ChevronDown size={10} color="#CBD5E1" /></div>
            </th>
            <th style={{ width: '14%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Date <ChevronDown size={10} color="#CBD5E1" /></div>
            </th>
            <th style={{ width: '15%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>Category</th>
            <th style={{ width: '14%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>Status</th>
            <th style={{ width: '16%', padding: '8px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94A3B8', fontFamily: 'Inter' }}>Anomaly</th>
          </tr>
        </thead>
        <tbody>
          
          {/* ROW 1 */}
          <tr style={{ height: '44px', borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }}>
            <td style={{ padding: '9px 12px', fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>#TXN-8841</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>Nexus Corp</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 600, color: '#10B981', fontFamily: 'Inter' }}>+$84,500</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter' }}>Dec 12, 2024</td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#EFF6FF', color: '#1E40AF', fontFamily: 'Inter' }}>Enterprise</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#ECFDF5', color: '#065F46', fontFamily: 'Inter', alignItems: 'center', gap: '3px' }}>● Settled</span>
            </td>
            <td style={{ padding: '9px 12px', fontSize: '12px', color: '#CBD5E1', textAlign: 'center' }}>—</td>
          </tr>

          {/* ROW 2 */}
          <tr style={{ height: '44px', borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFAFA', cursor: 'pointer' }}>
            <td style={{ padding: '9px 12px', fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>#TXN-8835</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Stripe Inc.</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'Inter' }}>–$31,200</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter' }}>Dec 11, 2024</td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', fontFamily: 'Inter' }}>SaaS Tools</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#ECFDF5', color: '#065F46', fontFamily: 'Inter', alignItems: 'center', gap: '3px' }}>● Settled</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
               <span style={{ display: 'inline-flex', padding: '2px 7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, backgroundColor: '#FEF2F2', color: '#DC2626', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'Inter' }}>⚑ High</span>
            </td>
          </tr>

          {/* ROW 3 */}
          <tr style={{ height: '44px', borderBottom: '1px solid #E2E8F0', cursor: 'pointer' }}>
            <td style={{ padding: '9px 12px', fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>#TXN-8829</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Orbital Labs</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#10B981', fontFamily: 'Inter' }}>+$22,000</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter' }}>Dec 10, 2024</td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#EFF6FF', color: '#1E40AF', fontFamily: 'Inter' }}>Mid-Market</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', fontFamily: 'Inter', alignItems: 'center', gap: '3px' }}>● Pending</span>
            </td>
            <td style={{ padding: '9px 12px', fontSize: '12px', color: '#CBD5E1', textAlign: 'center' }}>—</td>
          </tr>

          {/* ROW 4 */}
          <tr style={{ height: '44px', borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFDF5', cursor: 'pointer' }}>
            <td style={{ padding: '9px 12px', fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>#TXN-8821</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>AWS Billing</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'Inter' }}>–$18,740</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter' }}>Dec 09, 2024</td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', fontFamily: 'Inter' }}>Infra</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#ECFDF5', color: '#065F46', fontFamily: 'Inter', alignItems: 'center', gap: '3px' }}>● Settled</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
               <span style={{ display: 'inline-flex', padding: '2px 7px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid rgba(245,158,11,0.2)', fontFamily: 'Inter' }}>⚑ Medium</span>
            </td>
          </tr>

          {/* ROW 5 */}
          <tr style={{ height: '44px', cursor: 'pointer' }}>
            <td style={{ padding: '9px 12px', fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>#TXN-8814</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Vertex AI</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 700, color: '#10B981', fontFamily: 'Inter' }}>+$56,000</td>
            <td style={{ padding: '9px 12px', fontSize: '12px', fontWeight: 400, color: '#64748B', fontFamily: 'Inter' }}>Dec 08, 2024</td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#EFF6FF', color: '#1E40AF', fontFamily: 'Inter' }}>Enterprise</span>
            </td>
            <td style={{ padding: '9px 12px' }}>
              <span style={{ display: 'inline-flex', padding: '2px 8px', borderRadius: '20px', fontSize: '10.5px', fontWeight: 600, backgroundColor: '#ECFDF5', color: '#065F46', fontFamily: 'Inter', alignItems: 'center', gap: '3px' }}>● Settled</span>
            </td>
            <td style={{ padding: '9px 12px', fontSize: '12px', color: '#CBD5E1', textAlign: 'center' }}>—</td>
          </tr>

        </tbody>
      </table>

      {/* FOOTER */}
      <div style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', backgroundColor: '#FFFFFF', borderRadius: '0 0 12px 12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 500, color: '#94A3B8', fontFamily: 'Inter' }}>Showing 5 of 248 transactions</div>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#6366F1', fontFamily: 'Inter', cursor: 'pointer' }}>View all transactions →</div>
      </div>

    </div>
  );
}
