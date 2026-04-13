import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="page-transition-enter" style={{ 
      width: '100%', flex: 1, backgroundColor: '#FFFFFF',
      display: 'flex', borderTopLeftRadius: '16px', borderTop: '1px solid #E2E8F0', borderLeft: '1px solid #E2E8F0',
      boxShadow: '-4px -4px 12px rgba(0,0,0,0.02)'
    }}>
          
          {/* SETTINGS NAV */}
          <div style={{ width: '240px', borderRight: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', padding: '32px 20px', borderTopLeftRadius: '16px' }}>
             <h2 style={{ margin: '0 0 24px 8px', fontSize: '18px', fontWeight: 800, color: '#0F172A', fontFamily: 'Inter' }}>Settings</h2>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Tab label="Profile" active={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')} />
                <Tab label="Notifications" active={activeTab === 'Notifications'} onClick={() => setActiveTab('Notifications')} />
                <Tab label="Integrations" active={activeTab === 'Integrations'} onClick={() => setActiveTab('Integrations')} />
                <Tab label="Team" active={activeTab === 'Team'} onClick={() => setActiveTab('Team')} />
                <Tab label="Billing" active={activeTab === 'Billing'} onClick={() => setActiveTab('Billing')} />
             </div>
          </div>

          {/* SETTINGS CONTENT */}
          <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
            
            {activeTab === 'Profile' && (
              <div style={{ maxWidth: '600px' }}>
                 <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Personal Profile</h3>
                 <p style={{ margin: '0 0 32px 0', fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>Manage your account settings and personal preferences.</p>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E2E8F0', backgroundImage: 'url(https://i.pravatar.cc/150?img=68)', backgroundSize: 'cover' }}></div>
                    <div>
                       <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter', marginBottom: '8px' }}>Change Avatar</button>
                       <p style={{ margin: 0, fontSize: '11px', color: '#94A3B8', fontFamily: 'Inter' }}>JPG, GIF or PNG. Max size of 2MB.</p>
                    </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    <InputField label="First Name" defaultValue="Jeevitha" />
                    <InputField label="Last Name" defaultValue="H" />
                 </div>
                 <div style={{ marginBottom: '24px' }}>
                    <InputField label="Email Address" defaultValue="jeevitha@fin-sight.com" />
                 </div>
                 <div style={{ marginBottom: '32px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter', display: 'block', marginBottom: '6px' }}>Timezone</label>
                    <select style={{ width: '100%', height: '40px', borderRadius: '8px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', backgroundColor: '#FFFFFF' }}>
                       <option>(GMT-05:00) Eastern Time - New York</option>
                       <option>(GMT-08:00) Pacific Time - Los Angeles</option>
                       <option>(GMT+00:00) London</option>
                    </select>
                 </div>

                 <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '32px 0' }} />
                 <button style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Save Changes</button>
              </div>
            )}

            {activeTab === 'Notifications' && (
              <div style={{ maxWidth: '600px' }}>
                 <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Email Notifications</h3>
                 <p style={{ margin: '0 0 32px 0', fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>Control what emails you receive from the platform.</p>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <ToggleRow title="Daily Summary" desc="Receive a daily digest of revenue and expenses." checked={true} />
                    <ToggleRow title="Risk Alerts" desc="Immediate alerts for critical anomalies and threshold breaches." checked={true} />
                    <ToggleRow title="Report Readiness" desc="Notify when a generated report is ready to download." checked={false} />
                    <ToggleRow title="Team Activity" desc="Updates on team invites, role changes, and system access." checked={false} />
                 </div>
                 <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '32px 0' }} />
                 <button style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Update Preferences</button>
              </div>
            )}

            {activeTab === 'Integrations' && (
              <div style={{ maxWidth: '800px' }}>
                 <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Connected Integrations</h3>
                 <p style={{ margin: '0 0 32px 0', fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>Connect third-party tools to sync data automatically.</p>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <IntegrationCard name="Stripe" desc="Payments & Subscriptions" connected={true} icon="S" color="#6366F1" />
                    <IntegrationCard name="QuickBooks" desc="Accounting & Ledger" connected={false} icon="QB" color="#10B981" />
                    <IntegrationCard name="Slack" desc="Alerts & Notifications" connected={true} icon="Sl" color="#EAB308" />
                    <IntegrationCard name="Salesforce" desc="CRM Pipeline Data" connected={false} icon="SF" color="#0EA5E9" />
                 </div>
              </div>
            )}

            {activeTab === 'Team' && (
              <div style={{ maxWidth: '800px' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div>
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Team Members</h3>
                      <p style={{ margin: 0, fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>Manage access and roles for your workspace workspace.</p>
                    </div>
                    <button style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                       Invite Member
                    </button>
                 </div>

                 <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter' }}>
                       <thead>
                          <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                             <th style={{ padding: '12px 20px', fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Member</th>
                             <th style={{ padding: '12px 20px', fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Role</th>
                             <th style={{ padding: '12px 20px', fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                          </tr>
                       </thead>
                       <tbody>
                          <TeamRow name="Jeevitha H" email="jeevitha@fin-sight.com" role="Admin" />
                          <TeamRow name="Alex Turner" email="alex@fin-sight.com" role="Editor" />
                          <TeamRow name="Sarah Chen" email="sarah@fin-sight.com" role="Viewer" />
                       </tbody>
                    </table>
                 </div>
              </div>
            )}

            {activeTab === 'Billing' && (
              <div style={{ maxWidth: '600px' }}>
                 <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#0F172A', fontFamily: 'Inter' }}>Billing & Plans</h3>
                 <p style={{ margin: '0 0 32px 0', fontSize: '13px', color: '#64748B', fontFamily: 'Inter' }}>You are currently on the <strong>Enterprise Plan</strong>.</p>
                 <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', backgroundColor: '#F8FAFC' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#0F172A', fontFamily: 'Inter' }}>Enterprise ($499/mo)</h4>
                          <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter' }}>Next billing date: Jan 01, 2025</span>
                       </div>
                       <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', fontFamily: 'Inter' }}>Manage in Stripe ↗</button>
                    </div>
                 </div>
              </div>
            )}

          </div>

    </div>
  );
}

// Subcomponents
function Tab({ label, active, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        padding: '10px 16px', borderRadius: '8px', cursor: 'pointer',
        backgroundColor: active ? '#EEF2FF' : 'transparent',
        color: active ? '#4F46E5' : '#64748B',
        fontWeight: active ? 600 : 500,
        fontSize: '13px', fontFamily: 'Inter',
        display: 'flex', alignItems: 'center'
      }}
    >
      {label}
    </div>
  )
}

function InputField({ label, defaultValue }) {
  return (
    <div>
      <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', fontFamily: 'Inter', display: 'block', marginBottom: '6px' }}>{label}</label>
      <input type="text" defaultValue={defaultValue} style={{ width: '100%', boxSizing: 'border-box', height: '40px', borderRadius: '8px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', color: '#0F172A', fontFamily: 'Inter', outline: 'none' }} />
    </div>
  )
}

function ToggleRow({ title, desc, checked }) {
  const [on, setOn] = useState(checked);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
       <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{title}</h4>
          <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter' }}>{desc}</span>
       </div>
       <div onClick={() => setOn(!on)} style={{ width: '40px', height: '24px', backgroundColor: on ? '#10B981' : '#CBD5E1', borderRadius: '20px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
          <div style={{ width: '18px', height: '18px', backgroundColor: '#FFFFFF', borderRadius: '50%', position: 'absolute', top: '3px', left: on ? '19px' : '3px', transition: '0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
       </div>
    </div>
  )
}

function IntegrationCard({ name, desc, connected, icon, color }) {
  return (
    <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
       <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, fontSize: '16px', fontWeight: 800, fontFamily: 'Inter' }}>{icon}</div>
          <div>
             <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{name}</h4>
             <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>{desc}</span>
          </div>
       </div>
       {connected ? (
          <button style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px 12px', fontSize: '11px', fontWeight: 600, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}>Disconnect</button>
       ) : (
          <button style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '11px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'Inter' }}>Connect</button>
       )}
    </div>
  )
}

function TeamRow({ name, email, role }) {
  const isAd = role === 'Admin';
  return (
    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
       <td style={{ padding: '16px 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
             <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter' }}>{name}</span>
             <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'Inter' }}>{email}</span>
          </div>
       </td>
       <td style={{ padding: '16px 20px' }}>
          <span style={{ backgroundColor: isAd ? '#EEF2FF' : '#F1F5F9', color: isAd ? '#4F46E5' : '#475569', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, fontFamily: 'Inter' }}>{role}</span>
       </td>
       <td style={{ padding: '16px 20px', textAlign: 'right' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: 600, color: '#64748B', cursor: 'pointer', fontFamily: 'Inter' }}>Edit</button>
       </td>
    </tr>
  )
}
