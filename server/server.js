import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3001;
const JWT_SECRET = 'super-secret-key-for-dev-only';

// Middleware
app.use(cors());
app.use(express.json());

// Database Setup
const db = new sqlite3.Database(':memory:'); // Using in-memory for fast prototyping

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, name TEXT)");
  db.run("CREATE TABLE notifications (id INTEGER PRIMARY KEY, title TEXT, type TEXT, time TEXT, isRead INTEGER)");
  
  // Seed Database
  const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?, ?)");
  stmt.run(1, 'demo@finsight.com', 'demo123', 'Admin User');
  stmt.finalize();

  const nStmt = db.prepare("INSERT INTO notifications VALUES (?, ?, ?, ?, ?)");
  nStmt.run(1, 'New invoice received from AWS', 'billing', '2m ago', 0);
  nStmt.run(2, 'Revenue projection exceeded by 12%', 'alert', '1h ago', 0);
  nStmt.run(3, 'Security settings updated', 'system', 'Yesterday', 1);
  nStmt.finalize();
});

// Routes

// 1. Authentication
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ id: row.id, name: row.name }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, user: { email: row.email, name: row.name } });
  });
});

// Helper for Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// 2. Notifications
app.get('/api/notifications', authenticateToken, (req, res) => {
  db.all("SELECT * FROM notifications ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/notifications/:id/read', authenticateToken, (req, res) => {
  db.run("UPDATE notifications SET isRead = 1 WHERE id = ?", [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// 3. AI Insights
app.get('/api/insights', authenticateToken, (req, res) => {
  // Mock AI insights logic
  const timeframe = req.query.timeframe || 'Overview';
  let insights = [];
  
  if (timeframe === 'Monthly') {
    insights = [
      { id: 1, type: 'dip', title: 'Monthly SaaS expenses rising', desc: 'Software costs increased 8% compared to last month. Review redundant tool subscriptions.' }
    ];
  } else {
    insights = [
      { id: 1, type: 'dip', title: 'Revenue dip detected', desc: 'Oct revenue down 11% vs forecast. Enterprise segment underperforming.' },
      { id: 2, type: 'warning', title: 'Unusual SaaS spend', desc: 'Cloud infra costs +38% MoM. Possible over-provisioning in us-east-1.' },
      { id: 3, type: 'info', title: 'Cash flow risk: Q1', desc: 'Runway at current burn: 14 months. Below 18-month target threshold.' },
      { id: 4, type: 'success', title: 'Budget optimization', desc: 'Reallocating $42K from marketing to retention yields +6% LTV impact.' }
    ];
  }

  // Simulate network delay for AI generation feel
  setTimeout(() => res.json(insights), 1500);
});

// 4. Metrics & Dashboards
app.get('/api/metrics', authenticateToken, (req, res) => {
  const timeframe = req.query.timeframe || 'Overview';
  
  // Return different dummy data based on timeframe
  const data = {
    'Overview': { totalRev: '$4.28M', netProfit: '$1.14M', revChange: '+12.4%', profitChange: '+8.7%' },
    'Monthly': { totalRev: '$356K', netProfit: '$95K', revChange: '-2.1%', profitChange: '-1.4%' },
    'Quarterly': { totalRev: '$1.07M', netProfit: '$285K', revChange: '+4.5%', profitChange: '+5.2%' },
    'YoY': { totalRev: '$14.2M', netProfit: '$3.8M', revChange: '+22.4%', profitChange: '+18.1%' }
  };

  res.json(data[timeframe] || data['Overview']);
});

app.listen(port, () => {
  console.log(`Finsight Backend API running on http://localhost:${port}`);
});
