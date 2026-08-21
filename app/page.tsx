'use client';

import React, { useState } from 'react';

export default function BharatStockIQHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    setLoading(true);
    setTimeout(() => {
      setSelectedStock({
        symbol: searchQuery.toUpperCase(),
        companyName: `${searchQuery.toUpperCase()} Industries Ltd`,
        score: 82,
        recommendation: 'Strong Buy',
        financialStrength: 85,
        growth: 78,
        valuation: 80,
        momentum: 84,
        risk: 'Low-Medium',
        insights: [
          'Consistent quarterly revenue growth over the last 4 quarters.',
          'Strong institutional holding increase reported recently.',
          'Valuation is attractive relative to sector peers.'
        ]
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800 bg-[#07090e]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-orange-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              BHARATSTOCK <span className="text-white">IQ</span>
            </div>
            <span className="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-800 px-2 py-0.5 rounded font-medium tracking-wide">
              NSE / BSE ANALYTICS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#analyzer" className="hover:text-indigo-400 transition">Stock Analyzer</a>
            <a href="#hotstocks" className="hover:text-indigo-400 transition">Hot Stocks</a>
            <a href="#ipowatch" className="hover:text-indigo-400 transition">IPO Watch</a>
            <button onClick={() => setShowAdminModal(true)} className="hover:text-indigo-400 transition">Contact Owner</button>
          </div>

          <div>
            <button 
              onClick={() => setShowAdminModal(true)}
              className="bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition shadow-sm flex items-center space-x-2"
            >
              <span>🔒 Owner Login & Access</span>
            </button>
          </div>

        </div>
      </header>

      {/* Owner Access Modal Popup */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-indigo-500/50 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setShowAdminModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            <div className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-1">Restricted Area</div>
            <h3 className="text-2xl font-bold text-white mb-4">Owner Control Panel</h3>
            <p className="text-slate-300 text-sm mb-6">
              This area is strictly restricted to the platform owner. For administrative support, database updates, or partnership inquiries, reach out directly:
            </p>
            
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 mb-6">
              <div>
                <div className="text-xs text-slate-500 font-medium">Official Admin Email</div>
                <div className="text-white font-semibold text-sm">support@bharatstockiq.in</div>
              </div>
              <div className="pt-2 border-t border-slate-900">
                <div className="text-xs text-slate-500 font-medium">Owner Helpline / WhatsApp</div>
                <div className="text-emerald-400 font-semibold text-sm">+91 98765 43210</div>
              </div>
            </div>

            <button 
              onClick={() => setShowAdminModal(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition text-sm"
            >
              Close Panel
            </button>
          </div>
        </div>
      )}

      {/* Hero Section & Search Engine */}
      <section id="analyzer" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Indian Markets Scoring Engine Active</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Decode Indian Stocks & IPOs <br/>
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              With a Single Score.
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Institutional-grade automated valuation, financial strength, and momentum metrics built specifically for serious Indian retail investors.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter stock name or symbol (e.g., RELIANCE, DLF, TCS)..." 
                className="w-full bg-slate-900/90 border border-slate-700 focus:border-indigo-500 rounded-2xl px-5 py-4 text-white placeholder-slate-500 outline-none shadow-lg text-sm transition"
              />
            </div>
            <button 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition shadow-lg shadow-indigo-600/30 text-sm tracking-wide"
            >
              {loading ? 'Analyzing...' : 'Get Score'}
            </button>
          </form>

        </div>
      </section>

      {/* Dynamic Stock Result Modal/Card */}
      {selectedStock && (
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="bg-slate-900/80 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{selectedStock.symbol}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedStock.companyName}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-3xl font-black text-emerald-400">{selectedStock.score}/100</div>
                  <div className="text-xs text-slate-400 font-medium">Overall Score</div>
                </div>
                <div className="bg-emerald-950 border border-emerald-800 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-bold">
                  {selectedStock.recommendation}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Financial Strength</div>
                <div className="text-xl font-bold text-white">{selectedStock.financialStrength}%</div>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Growth Score</div>
                <div className="text-xl font-bold text-white">{selectedStock.growth}%</div>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Valuation Health</div>
                <div className="text-xl font-bold text-white">{selectedStock.valuation}%</div>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Momentum</div>
                <div className="text-xl font-bold text-white">{selectedStock.momentum}%</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3">BharatStock AI Key Insights:</h4>
              <ul className="space-y-2">
                {selectedStock.insights.map((insight: string, idx: number) => (
                  <li key={idx} className="flex items-start text-sm text-slate-400">
                    <span className="text-indigo-400 mr-2 font-bold">✓</span> {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Hot Trending Stocks Section */}
      <section id="hotstocks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Hot Trending Stocks</h2>
            <p className="text-slate-400 text-sm mt-1">Top auto-scored Indian equities showing strong momentum.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'DLF Limited', symbol: 'DLF', score: 84, rec: 'Strong Buy', change: '+4.2%' },
            { name: 'PG Electroplast', symbol: 'PGEL', score: 81, rec: 'Strong Buy', change: '+5.6%' },
            { name: 'Sansera Engineering', symbol: 'SANSERA', score: 79, rec: 'Positive', change: '+3.1%' },
            { name: 'Poonawalla Fincorp', symbol: 'POONAWALLA', score: 76, rec: 'Positive', change: '+2.8%' }
          ].map((stock, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400">{stock.symbol}</span>
                  <h3 className="font-bold text-white text-lg">{stock.name}</h3>
                </div>
                <span className="text-emerald-400 text-xs font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-lg">
                  {stock.change}
                </span>
              </div>
              <div className="flex justify-between items-end mt-6 pt-4 border-t border-slate-800/80">
                <div>
                  <div className="text-xs text-slate-500">Score</div>
                  <div className="text-2xl font-black text-white">{stock.score}<span className="text-xs text-slate-500 font-normal">/100</span></div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium bg-indigo-950 text-indigo-300 px-2 py-1 rounded-lg border border-indigo-900">
                    {stock.rec}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-slate-300 font-bold tracking-wider mb-2">BHARATSTOCK IQ</div>
          <p className="max-w-xl mx-auto mb-4">
            Disclaimer: BharatStock IQ analysis is for informational and educational purposes only and does not constitute financial advice. Markets are subject to risks.
          </p>
          <div className="text-slate-400 mb-6 font-medium">
            Official Support: support@bharatstockiq.in | Helpline: +91 98765 43210
          </div>
          <p>© 2026 BharatStock IQ. Secured Owner Access Enabled.</p>
        </div>
      </footer>

    </div>
  );
}
