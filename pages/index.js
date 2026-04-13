import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, Briefcase, Bell } from 'lucide-react';

export default function App() {
  const stats = [
    { label: 'Celkové odmeny', value: '45 280 €', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Aktívni zamestnanci', value: '24', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Projekty', value: '12', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Nárast výkonu', value: '+14%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Vitajte späť, Administrátor 👋</h2>
            <p className="text-slate-500">Tu je dnešný prehľad vašej firmy.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl w-fit mb-4`}>
                <stat.icon size={24} />
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
