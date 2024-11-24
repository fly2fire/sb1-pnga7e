import React from 'react';
import { Building2, MoreVertical, Plus } from 'lucide-react';

const tenants = [
  {
    id: 1,
    name: '科技有限公司',
    plan: '企业版',
    users: 45,
    status: '活跃',
    lastActive: '2024-03-15',
  },
  {
    id: 2,
    name: '创新科技',
    plan: '专业版',
    users: 28,
    status: '活跃',
    lastActive: '2024-03-14',
  },
  {
    id: 3,
    name: '未来科技',
    plan: '基础版',
    users: 12,
    status: '待审核',
    lastActive: '2024-03-13',
  },
];

const Tenants = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">租户管理</h1>
          <p className="text-gray-500 mt-1">管理和监控所有租户</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>添加租户</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">租户名称</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">套餐</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">用户数</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">状态</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">最后活跃</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">{tenant.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{tenant.plan}</td>
                  <td className="px-6 py-4 text-sm">{tenant.users}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tenant.status === '活跃' 
                        ? 'bg-green-50 text-green-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {tenant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{tenant.lastActive}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenants;