import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Tenants from './pages/Tenants';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tenants" element={<Tenants />} />
              <Route path="/users" element={<div className="p-6">用户管理页面开发中...</div>} />
              <Route path="/settings" element={<div className="p-6">系统设置页面开发中...</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;