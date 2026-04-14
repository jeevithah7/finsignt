import React, { useState, useEffect, useRef } from 'react';
import { Search, Calendar, ChevronDown, Bell, DownloadCloud, LogOut, Check } from 'lucide-react';
import axios from 'axios';

export default function TopNav({ width = '1200px', forceFocus = false, user, onLogout }) {
  const [notifications, setNotifications] = useState([]);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const notifRef = useRef(null);
  const userRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) setShowNotifMenu(false);
      if (userRef.current && !userRef.current.contains(event.target)) setShowUserMenu(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('finsight_token');
      const res = await axios.get('/api/notifications', { headers: { Authorization: `Bearer ${token}` }});
      setNotifications(res.data);
    } catch (err) {
      console.error('Failed to fetch notifications', err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user]);

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('finsight_token');
      await axios.post(`/api/notifications/${id}/read`, {}, { headers: { Authorization: `Bearer ${token}` }});
      // update local
      setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: 1 } : n));
    } catch (err) {
      console.error(err);
    }
  };

  const unreadCount = notifications.filter(n => n.isRead === 0).length;

  // Extract Initials
  const getInitials = (name) => {
    if (!name) return 'AK';
    const split = name.split(' ');
    if (split.length > 1) return (split[0][0] + split[1][0]).toUpperCase();
    return name[0].toUpperCase();
  };

  return (
    <div style={{
      width: width,
      height: '56px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: '12px',
      flexShrink: 0,
      position: 'relative' // relative context for absolute dropdowns
    }}>
      
      {/* Search bar */}
      <div style={{
        position: 'relative',
        width: '280px',
        height: '32px',
        background: '#F8FAFC',
        border: forceFocus ? '1px solid #6366F1' : '1px solid #E2E8F0',
        borderRadius: '8px',
        boxShadow: forceFocus ? '0 0 0 3px rgba(99,102,241,0.18)' : 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px 0 30px'
      }}>
        <Search size={13} color="#94A3B8" style={{ position: 'absolute', left: '9px' }} strokeWidth={2} />
        <span style={{ fontSize: '12.5px', color: forceFocus ? '#64748B' : '#94A3B8', fontFamily: 'Inter' }}>Search metrics, clients, reports…</span>
      </div>

      <div style={{ flex: 1 }} />

      {/* Date range selector */}
      <div style={{
        height: '32px',
        padding: '6px 12px',
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        display: 'flex', gap: '6px', alignItems: 'center',
        cursor: 'pointer'
      }}>
        <Calendar size={12} color="#64748B" strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', fontFamily: 'Inter' }}>Jan 2024 – Dec 2024</span>
        <ChevronDown size={10} color="#64748B" strokeWidth={2} />
      </div>

      {/* Notifications */}
      <div ref={notifRef} style={{ position: 'relative' }}>
        <div style={{
          width: '32px', height: '32px',
          background: showNotifMenu ? '#F8FAFC' : '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', cursor: 'pointer'
        }} onClick={() => setShowNotifMenu(!showNotifMenu)}>
          <Bell size={14} color="#64748B" strokeWidth={2} />
          {unreadCount > 0 && (
            <div style={{
              position: 'absolute', top: '4px', right: '4px',
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: '#EF4444', border: '1px solid #FFFFFF'
            }} />
          )}
        </div>

        {/* Notif Dropdown */}
        {showNotifMenu && (
          <div style={{
            position: 'absolute', top: '40px', right: 0,
            width: '320px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
            borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            zIndex: 100, display: 'flex', flexDirection: 'column', overflow: 'hidden'
          }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Notifications</span>
              {unreadCount > 0 && <span style={{ backgroundColor: '#EEF2FF', color: '#4F46E5', fontSize: '10px', fontWeight: 600, padding: '2px 6px', borderRadius: '4px', fontFamily: 'Inter' }}>{unreadCount} New</span>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '300px', overflowY: 'auto' }}>
              {notifications.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: '#94A3B8', fontSize: '12px', fontFamily: 'Inter' }}>No notifications</div>
              ) : notifications.map(n => (
                <div key={n.id} style={{ padding: '12px 16px', borderBottom: '1px solid #F8FAFC', backgroundColor: n.isRead ? '#FFFFFF' : '#F8FAFC', cursor: 'pointer', display: 'flex', gap: '12px', alignItems: 'flex-start' }} onClick={() => markAsRead(n.id)}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: n.isRead ? 'transparent' : '#EF4444', marginTop: '6px', flexShrink: 0 }} />
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                     <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', fontFamily: 'Inter', lineHeight: 1.3 }}>{n.title}</span>
                     <span style={{ fontSize: '11px', color: '#64748B', fontFamily: 'Inter' }}>{n.time}</span>
                   </div>
                   {!n.isRead && (
                     <div style={{ padding: '4px', color: '#94A3B8' }}><Check size={14} /></div>
                   )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Export Report button */}
      <div style={{
        height: '32px',
        padding: '6px 14px',
        background: '#6366F1',
        borderRadius: '8px',
        display: 'flex', gap: '6px', alignItems: 'center',
        cursor: 'pointer'
      }}>
        <DownloadCloud size={12} color="#FFFFFF" strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', fontFamily: 'Inter' }}>Export Report</span>
      </div>

      {/* User menu */}
      <div ref={userRef} style={{ position: 'relative' }}>
        <div style={{
          width: '32px', height: '32px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFFFFF', fontSize: '11px', fontWeight: 700, fontFamily: 'Inter',
          cursor: 'pointer'
        }} onClick={() => setShowUserMenu(!showUserMenu)}>
          {getInitials(user?.name)}
        </div>

        {/* User Dropdown */}
        {showUserMenu && (
          <div style={{
            position: 'absolute', top: '40px', right: 0,
            width: '200px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0',
            borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            zIndex: 100, display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'Inter', fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>{user?.name || 'User'}</span>
              <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#64748B', marginTop: '2px' }}>{user?.email}</span>
            </div>
            <div style={{ padding: '8px' }}>
              <button 
                onClick={onLogout}
                style={{ width: '100%', display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 12px', border: 'none', background: 'none', color: '#DC2626', fontSize: '13px', fontWeight: 600, fontFamily: 'Inter', cursor: 'pointer', borderRadius: '6px', textAlign: 'left' }}>
                <LogOut size={14} /> Log out
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
