import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, Briefcase, Bell, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('prehlad');

  // Simulované dáta pre komplexnosť
  const stats = [
    { label: 'Celkové odmeny', value: '45 280 €', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Aktívni zamestnanci', value: '24', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Projekty', value: '12', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Nárast výkonu', value: '+14%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Bočný panel (Sidebar) */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">A</div>
          <span className="text-xl font-bold tracking-tight">AdminCore</span>
        </div>
        
        <nav className="space-y-2">
          {['Prehľad', 'Zamestnanci', 'Reporty', 'Nastavenia'].map((item) => (
            <button 
              key={item}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${item.toLowerCase() === activeTab ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Hlavný obsah */}
      <main className="flex-1 p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Vitajte späť, Administrátor 👋</h2>
            <p className="text-slate-500">Tu je dnešný prehľad vašej firmy.</p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition shadow-sm">
              <Bell size={20} className="text-slate-600" />
            </button>
            <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
               <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500"></div>
            </div>
          </div>
        </header>

        {/* Štatistiky */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full border border-green-100">Live</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Tabuľka a Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Posledné aktivity odmien</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50">
                    <th className="pb-4 font-semibold text-slate-400 text-sm">Zamestnanec</th>
                    <th className="pb-4 font-semibold text-slate-400 text-sm">Pozícia</th>
                    <th className="pb-4 font-semibold text-slate-400 text-sm">Suma</th>
                    <th className="pb-4 font-semibold text-slate-400 text-sm text-right">Stav</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { name: 'Peter Malý', role: 'Vývojár', amount: '1 200 €', status: 'Schválené' },
                    { name: 'Anna Nováková', role: 'Dizajnér', amount: '950 €', status: 'Spracováva sa' },
                    { name: 'Milan Krátky', role: 'Manažér', amount: '2 100 €', status: 'Schválené' },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition">
                      <td className="py-4 font-medium text-slate-700">{row.name}</td>
                      <td className="py-4 text-slate-500 text-sm">{row.role}</td>
                      <td className="py-4 font-bold text-slate-800">{row.amount}</td>
                      <td className="py-4 text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === 'Schválené' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl shadow-blue-200">
            <div>
              <h3 className="text-xl font-bold mb-2">Mesačný cieľ</h3>
              <p className="text-blue-100 text-sm opacity-80">Dosiahli ste 85% z plánovaného obratu pre tento kvartál.</p>
            </div>
            <div className="my-8 flex justify-center">
              {/* Jednoduchý SVG graf */}
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-blue-500" />
                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="314" strokeDashoffset="47" className="text-white" />
              </svg>
            </div>
            <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition">
              Zobraziť detailný report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
