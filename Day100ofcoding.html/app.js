import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Wallet, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react';

const portfolioData = [
  { month: 'Jan', stocks: 45000, crypto: 12000, bonds: 18000, real_estate: 25000 },
  { month: 'Feb', stocks: 48000, crypto: 15000, bonds: 18500, real_estate: 25000 },
  { month: 'Mar', stocks: 52000, crypto: 18000, bonds: 19000, real_estate: 26000 },
  { month: 'Apr', stocks: 50000, crypto: 16000, bonds: 19500, real_estate: 26500 },
  { month: 'May', stocks: 56000, crypto: 22000, bonds: 20000, real_estate: 27000 },
  { month: 'Jun', stocks: 62000, crypto: 25000, bonds: 20500, real_estate: 28000 },
];

const stockPerformance = [
  { date: '10 Dec', AAPL: 195, GOOGL: 142, MSFT: 380, TSLA: 242 },
  { date: '11 Dec', AAPL: 198, GOOGL: 145, MSFT: 385, TSLA: 245 },
  { date: '12 Dec', AAPL: 196, GOOGL: 143, MSFT: 382, TSLA: 240 },
  { date: '13 Dec', AAPL: 201, GOOGL: 148, MSFT: 390, TSLA: 248 },
  { date: '14 Dec', AAPL: 203, GOOGL: 150, MSFT: 395, TSLA: 252 },
  { date: '15 Dec', AAPL: 205, GOOGL: 152, MSFT: 398, TSLA: 255 },
  { date: '16 Dec', AAPL: 208, GOOGL: 155, MSFT: 402, TSLA: 258 },
];

const assetAllocation = [
  { name: 'Stocks', value: 62000, percentage: 45.6, color: '#8b5cf6' },
  { name: 'Cryptocurrency', value: 25000, percentage: 18.4, color: '#ec4899' },
  { name: 'Bonds', value: 20500, percentage: 15.1, color: '#f59e0b' },
  { name: 'Real Estate', value: 28000, percentage: 20.6, color: '#10b981' },
];

const monthlyExpenses = [
  { category: 'Housing', amount: 2400 },
  { category: 'Transport', amount: 800 },
  { category: 'Food', amount: 1200 },
  { category: 'Entertainment', amount: 600 },
  { category: 'Healthcare', amount: 400 },
  { category: 'Utilities', amount: 350 },
  { category: 'Savings', amount: 3250 },
];

function FinanceDashboard() {
  const [timeRange, setTimeRange] = useState('6M');

  const metrics = [
    { 
      title: 'Total Portfolio', 
      value: '$135,500', 
      change: '+12.8%', 
      trend: 'up', 
      icon: Wallet, 
      color: 'from-purple-500 to-purple-700' 
    },
    { 
      title: 'Monthly Income', 
      value: '$12,450', 
      change: '+5.2%', 
      trend: 'up', 
      icon: DollarSign, 
      color: 'from-green-500 to-green-700' 
    },
    { 
      title: 'Total Expenses', 
      value: '$5,750', 
      change: '-3.1%', 
      trend: 'down', 
      icon: CreditCard, 
      color: 'from-red-500 to-red-700' 
    },
    { 
      title: 'Net Savings', 
      value: '$6,700', 
      change: '+18.5%', 
      trend: 'up', 
      icon: TrendingUp, 
      color: 'from-blue-500 to-blue-700' 
    },
  ];

  const topStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 208.45, change: 2.8, value: 12500 },
    { symbol: 'MSFT', name: 'Microsoft', price: 402.30, change: 1.5, value: 15200 },
    { symbol: 'GOOGL', name: 'Alphabet', price: 155.20, change: 3.2, value: 9300 },
    { symbol: 'TSLA', name: 'Tesla', price: 258.00, change: -1.2, value: 7800 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-xl border-b border-emerald-900/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <DollarSign size={24} />
            </div>
            <h1 className="text-2xl font-bold">Finance Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 bg-emerald-900/30 rounded-lg p-1">
              {['1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    timeRange === range ? 'bg-emerald-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30 hover:border-emerald-500/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                  <metric.icon size={24} />
                </div>
                <span className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {metric.change}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{metric.title}</h3>
              <p className="text-3xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Portfolio Growth */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30">
            <h2 className="text-xl font-bold mb-4">Portfolio Growth Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorStocks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="month" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }} />
                <Legend />
                <Area type="monotone" dataKey="stocks" stackId="1" stroke="#8b5cf6" fill="url(#colorStocks)" />
                <Area type="monotone" dataKey="crypto" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                <Area type="monotone" dataKey="bonds" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                <Area type="monotone" dataKey="real_estate" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Asset Allocation */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30">
            <h2 className="text-xl font-bold mb-4">Asset Allocation</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ percentage }) => `${percentage}%`}
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {assetAllocation.map((asset, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
                    <span className="text-gray-300">{asset.name}</span>
                  </div>
                  <span className="font-semibold">${(asset.value / 1000).toFixed(1)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stock Performance */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30">
            <h2 className="text-xl font-bold mb-4">Stock Performance (7 Days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stockPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="date" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }} />
                <Legend />
                <Line type="monotone" dataKey="AAPL" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="GOOGL" stroke="#ec4899" strokeWidth={2} />
                <Line type="monotone" dataKey="MSFT" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="TSLA" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Expenses */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30">
            <h2 className="text-xl font-bold mb-4">Monthly Budget Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyExpenses} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis type="number" stroke="#ffffff60" />
                <YAxis dataKey="category" type="category" stroke="#ffffff60" width={100} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }} />
                <Bar dataKey="amount" fill="#10b981" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="mt-6 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-emerald-900/30">
          <h2 className="text-xl font-bold mb-4">Top Holdings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-900/30">
                  <th className="text-left py-3 text-gray-400 font-semibold">Symbol</th>
                  <th className="text-left py-3 text-gray-400 font-semibold">Name</th>
                  <th className="text-right py-3 text-gray-400 font-semibold">Price</th>
                  <th className="text-right py-3 text-gray-400 font-semibold">Change</th>
                  <th className="text-right py-3 text-gray-400 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {topStocks.map((stock, idx) => (
                  <tr key={idx} className="border-b border-emerald-900/20 hover:bg-white/5">
                    <td className="py-4 font-bold text-emerald-400">{stock.symbol}</td>
                    <td className="py-4 text-gray-300">{stock.name}</td>
                    <td className="py-4 text-right">${stock.price}</td>
                    <td className={`py-4 text-right font-semibold ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </td>
                    <td className="py-4 text-right font-semibold">${stock.value.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceDashboard;