import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import ContentSkeleton from './ContentSkeleton';

export default function Shell({ collapsed = false, withAnnotations = false }) {
  const sidebarWidth = collapsed ? '64px' : '240px';
  const contentWidth = collapsed ? '1376px' : '1200px';

  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
      
      <Sidebar collapsed={collapsed} />
      
      <div style={{ display: 'flex', flexDirection: 'column', width: contentWidth }}>
        <TopNav width={contentWidth} />
        <ContentSkeleton width={contentWidth} />
      </div>

      {withAnnotations && (
        <>
           {/* Sidebar Boundary */}
           <div style={{ position: 'absolute', left: sidebarWidth, top: 0, bottom: 0, borderLeft: '1px dashed #EF4444', pointerEvents: 'none', zIndex: 100 }} />
           
           {/* Topbar Boundary */}
           <div style={{ position: 'absolute', left: sidebarWidth, right: 0, top: '56px', borderTop: '1px dashed #3B82F6', pointerEvents: 'none', zIndex: 100 }} />
           
           {/* Specs badge bottom-left */}
           <div style={{ position: 'absolute', left: '16px', bottom: '16px', backgroundColor: '#0F172A', color: '#FFFFFF', padding: '6px 12px', borderRadius: '6px', fontSize: '10px', fontWeight: 500, zIndex: 100 }}>
             1440 × 900px · Inter · Light mode · 2x
           </div>
        </>
      )}

    </div>
  );
}
