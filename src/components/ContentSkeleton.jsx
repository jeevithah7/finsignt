import React from 'react';

export default function ContentSkeleton({ width = '1200px' }) {
  return (
    <div style={{
      width: width,
      minHeight: '844px',
      backgroundColor: '#F1F5F9',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      
      {/* PAGE HEADER SKELETON */}
      <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ width: '200px', height: '20px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
          <div style={{ width: '280px', height: '14px', backgroundColor: '#E2E8F0', opacity: 0.6, borderRadius: '4px' }} />
        </div>
        <div style={{ width: '240px', height: '30px', backgroundColor: '#E2E8F0', borderRadius: '8px' }} />
      </div>

      {/* KPI ROW SKELETON */}
      <div style={{ height: '110px', marginTop: '8px', display: 'flex', gap: '12px' }}>
        {['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'].map((color, i) => (
          <div key={i} style={{
            flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0',
            position: 'relative', overflow: 'hidden', padding: '16px'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: color }} />
            <div style={{ width: '60%', height: '10px', backgroundColor: '#E2E8F0', borderRadius: '2px', marginBottom: '12px' }} />
            <div style={{ width: '80%', height: '24px', backgroundColor: '#E2E8F0', borderRadius: '4px', marginBottom: '16px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
               <div style={{ width: '30%', height: '16px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
               <div style={{ width: '40%', height: '16px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>

      {/* MID ROW SKELETON */}
      <div style={{ height: '230px', display: 'flex', gap: '12px' }}>
        {/* Left card */}
        <div style={{ flex: '0 0 65%', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <div style={{ width: '140px', height: '14px', backgroundColor: '#E2E8F0', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ width: '100px', height: '10px', backgroundColor: '#E2E8F0', opacity: 0.6, borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '60px', height: '24px', backgroundColor: '#E2E8F0', borderRadius: '12px' }} />
              <div style={{ width: '60px', height: '24px', backgroundColor: '#E2E8F0', borderRadius: '12px' }} />
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#F1F5F9', borderRadius: '6px' }} />
        </div>
        {/* Right card */}
        <div style={{ flex: '1', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px' }}>
           <div style={{ width: '120px', height: '14px', backgroundColor: '#E2E8F0', borderRadius: '4px', marginBottom: '24px' }} />
           {[1, 2, 3, 4].map(i => (
             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#E2E8F0' }} />
               <div style={{ flex: 1 }}>
                 <div style={{ width: '80%', height: '10px', backgroundColor: '#E2E8F0', borderRadius: '2px', marginBottom: '6px' }} />
                 <div style={{ width: '50%', height: '8px', backgroundColor: '#E2E8F0', opacity: 0.6, borderRadius: '2px' }} />
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* BOTTOM ROW SKELETON */}
      <div style={{ height: '220px', display: 'flex', gap: '12px' }}>
         <div style={{ flex: '0 0 66.666%', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
           <div style={{ padding: '20px', borderBottom: '1px solid #E2E8F0' }}>
             <div style={{ width: '160px', height: '14px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
           </div>
           {[1, 2, 3, 4, 5].map((row, i) => (
             <div key={row} style={{ display: 'flex', padding: '12px 20px', gap: '16px', backgroundColor: i % 2 === 1 ? '#F8FAFC' : '#FFFFFF' }}>
               {[1, 2, 3, 4, 5, 6, 7].map(col => (
                 <div key={col} style={{ flex: 1, height: '12px', backgroundColor: '#E2E8F0', borderRadius: '2px' }} />
               ))}
             </div>
           ))}
         </div>
         <div style={{ flex: '1', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ alignSelf: 'flex-start', width: '140px', height: '14px', backgroundColor: '#E2E8F0', borderRadius: '4px', marginBottom: '20px' }} />
           <div style={{ width: '120px', height: '60px', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', border: '16px solid #E2E8F0', borderBottom: 'none', marginBottom: '20px' }} />
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', width: '100%', marginBottom: '16px' }}>
             {Array(12).fill(0).map((_, i) => (
               <div key={i} style={{ height: '12px', backgroundColor: '#E2E8F0', borderRadius: '2px' }} />
             ))}
           </div>
         </div>
      </div>

    </div>
  );
}
