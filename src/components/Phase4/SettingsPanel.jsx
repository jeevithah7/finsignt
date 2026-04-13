import React from 'react';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';

export default function SettingsPanel() {
  return (
    <div style={{ position: 'relative', width: '1440px', height: '900px', display: 'flex', overflow: 'hidden', border: '1px solid #E2E8F0', backgroundColor: '#F1F5F9' }}>
      
      {/* SIDEBAR */}
      <div style={{ zIndex: 2, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
        <Sidebar activeItem="Settings" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '1200px' }}>
        {/* TOPBAR */}
        <div style={{ zIndex: 2 }}>
          <TopNav width="1200px" />
        </div>
        
        {/* CONTENT AREA */}
        <div style={{ 
          zIndex: 1, position: 'relative', width: '1200px', flex: 1, backgroundColor: '#F1F5F9',
          padding: '24px', display: 'flex', flexDirection: 'column',
          boxShadow: 'inset 0 2px 8px rgba(15,23,42,0.04)'
        }}>
          
          {/* PAGE HEADER */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ margin: 0, fontFamily: 'Inter', fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Settings
            </h1>
            <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '13px', fontWeight: 400, color: '#64748B' }}>
              Manage your workspace and preferences
            </p>
          </div>

          {/* 2-COLUMN SETTINGS LAYOUT */}
          <div style={{ display: 'flex', gap: '24px', flex: 1, overflow: 'hidden' }}>
            
            {/* LEFT NAV PANEL */}
            <div style={{ width: '240px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '8px', border: '1px solid #E2E8F0', height: 'fit-content' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <NavItem label="Profile" active={true} />
                  <NavItem label="Notifications" />
                  <NavItem label="Integrations" />
                  <NavItem label="Security" />
                  <NavItem label="Billing" />
               </div>
            </div>

            {/* RIGHT CONTENT PANEL */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '24px 28px', border: '1px solid #E2E8F0', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
               
               {/* SECTION: Personal Information */}
               <div>
                  <h2 style={{ margin: 0, fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Personal Information</h2>
                  <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, color: '#64748B' }}>Update your account details</p>
                  <div style={{ height: '1px', backgroundColor: '#E2E8F0', width: '100%', margin: '16px 0 20px 0' }}></div>
                  
                  {/* Avatar Upload */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                     <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1 0%, #A78BFA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'Inter' }}>
                        AK
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div>
                           <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>Arjun Kapoor</span>
                           <span style={{ display: 'block', fontSize: '12px', color: '#94A3B8', fontFamily: 'Inter' }}>CFO, Series B</span>
                        </div>
                        <button style={{ backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter', width: 'fit-content' }}>
                           Change photo
                        </button>
                     </div>
                  </div>

                  {/* Form Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                     <InputGroup label="First Name" value="Arjun" />
                     <InputGroup label="Last Name" value="Kapoor" />
                     <InputGroup label="Email" value="arjun@finsight.io" />
                     <InputGroup label="Phone" value="+91 98765 43210" />
                     <InputGroup label="Role" value="Chief Financial Officer" />
                     <InputGroup label="Company" value="FinSight Inc." />
                  </div>
               </div>

               {/* SECTION: Preferences */}
               <div style={{ marginTop: '28px' }}>
                  <h2 style={{ margin: 0, fontFamily: 'Inter', fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>Preferences</h2>
                  <div style={{ height: '1px', backgroundColor: '#E2E8F0', width: '100%', margin: '16px 0 20px 0' }}></div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                     <ToggleRow label="Email notifications" sub="Receive alerts for risk events" on={true} />
                     <ToggleRow label="Weekly digest" sub="Summary report every Monday" on={true} />
                     <ToggleRow label="Two-factor authentication" sub="Extra security for your account" on={false} />
                  </div>
               </div>

               {/* SECTION: Danger Zone */}
               <div style={{ marginTop: '28px', border: '1px solid #FECACA', borderRadius: '8px', padding: '16px 20px', backgroundColor: '#FFF5F5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                     <h3 style={{ margin: 0, fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#991B1B' }}>Delete Account</h3>
                     <p style={{ margin: '4px 0 0 0', fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, color: '#64748B', maxWidth: '360px' }}>Permanently delete your account and all data. This action cannot be undone.</p>
                  </div>
                  <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #FECACA', borderRadius: '8px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, color: '#EF4444', cursor: 'pointer', fontFamily: 'Inter' }}>
                     Delete Account
                  </button>
               </div>

               {/* SAVE BUTTON ROW */}
               <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                  <button style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', height: '36px', padding: '0 16px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}>
                     Save Changes
                  </button>
               </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents

function NavItem({ label, active }) {
  return (
    <div style={{ 
      padding: '8px 12px', borderRadius: '8px', fontSize: '12.5px', fontFamily: 'Inter', cursor: 'pointer',
      backgroundColor: active ? '#EEF2FF' : 'transparent',
      color: active ? '#6366F1' : '#64748B',
      fontWeight: active ? 600 : 500
    }}>
      {label}
    </div>
  );
}

function InputGroup({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: 500, color: '#334155', fontFamily: 'Inter' }}>{label}</label>
      <input 
         type="text" 
         defaultValue={value}
         style={{ 
            height: '36px', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0 12px', 
            fontSize: '13px', fontWeight: 400, color: '#0F172A', fontFamily: 'Inter',
            outline: 'none', backgroundColor: '#FFFFFF'
         }} 
      />
    </div>
  );
}

function ToggleRow({ label, sub, on }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
         <span style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#0F172A', fontFamily: 'Inter' }}>{label}</span>
         <span style={{ display: 'block', fontSize: '12px', color: '#64748B', fontFamily: 'Inter', marginTop: '2px' }}>{sub}</span>
      </div>
      <div style={{ width: '36px', height: '20px', borderRadius: '10px', backgroundColor: on ? '#6366F1' : '#E2E8F0', position: 'relative', cursor: 'pointer' }}>
         <div style={{ position: 'absolute', top: '2px', left: on ? '18px' : '2px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#FFFFFF', transition: 'left 0.2s' }}></div>
      </div>
    </div>
  );
}
