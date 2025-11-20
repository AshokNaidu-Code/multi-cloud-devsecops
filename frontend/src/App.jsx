import { useState } from 'react';
import { Shield, Cloud, Activity, GitBranch } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Multi-Cloud DevSecOps Platform
          </h1>
          <p className="text-xl text-gray-300">
            Enterprise-grade security, monitoring, and deployment automation
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {['overview', 'pipeline', 'security', 'monitoring'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Cloud className="w-8 h-8" />}
            title="Multi-Cloud"
            value="3 Providers"
            color="blue"
          />
          <StatCard
            icon={<Shield className="w-8 h-8" />}
            title="Security Score"
            value="98%"
            color="green"
          />
          <StatCard
            icon={<GitBranch className="w-8 h-8" />}
            title="Deployments"
            value="247"
            color="purple"
          />
          <StatCard
            icon={<Activity className="w-8 h-8" />}
            title="Uptime"
            value="99.97%"
            color="orange"
          />
        </div>

        {/* Content Area */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-4">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard
          </h2>
          <p className="text-gray-300">
            Content for {activeTab} will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    purple: 'from-purple-500 to-purple-700',
    orange: 'from-orange-500 to-orange-700',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white/80 mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default App;
