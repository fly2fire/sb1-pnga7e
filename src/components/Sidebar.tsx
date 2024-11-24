import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Settings, 
  HelpCircle,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, text: '仪表盘', path: '/' },
    { icon: Users, text: '用户管理', path: '/users' },
    { icon: Building2, text: '租户管理', path: '/tenants' },
    { icon: Settings, text: '系统设置', path: '/settings' },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen px-4 py-6">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Building2 className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">SaaS Admin</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-8 left-4 right-4 space-y-2">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full">
          <HelpCircle className="h-5 w-5" />
          <span>帮助中心</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full">
          <LogOut className="h-5 w-5" />
          <span>退出登录</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;