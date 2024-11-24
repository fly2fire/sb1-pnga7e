import React from 'react';
import { Users, Building2, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const DashboardCard = ({ title, value, change, icon: Icon, changeType }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  changeType: 'increase' | 'decrease';
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    <div className="flex items-center mt-4">
      {changeType === 'increase' ? (
        <ArrowUpRight className="h-4 w-4 text-green-500" />
      ) : (
        <ArrowDownRight className="h-4 w-4 text-red-500" />
      )}
      <span className={`text-sm ${
        changeType === 'increase' ? 'text-green-500' : 'text-red-500'
      }`}>
        {change}
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">仪表盘概览</h1>
        <p className="text-gray-500 mt-1">欢迎回来，这里是今日数据概览</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="总用户数"
          value="2,420"
          change="+2.5% 较上周"
          icon={Users}
          changeType="increase"
        />
        <DashboardCard
          title="活跃租户"
          value="185"
          change="+12.3% 较上月"
          icon={Building2}
          changeType="increase"
        />
        <DashboardCard
          title="系统负载"
          value="67%"
          change="-4.1% 较昨日"
          icon={Activity}
          changeType="decrease"
        />
      </div>

      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">最近活动</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">新租户注册</p>
                  <p className="text-xs text-gray-500">2024-03-1{i}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">10:3{i} AM</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;