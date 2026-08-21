'use client';

import React, { useState } from 'react';

export default function BharatStockIQHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Sample live-style FII / DII institutional data
  const fiiDiiData = {
    date: "20-Aug-2026",
    fii: { buy: 11411.73, sell: 11995.09, net: -583.36 },
    dii: { buy: 16932.72, sell: 13395.01, net: 3537.71 }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <main style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ margin: 0, color: '#1a365d' }}>BharatStock IQ</h1>
        <p style={{ margin: '5px 0 0 0', color: '#666' }}>Smart stock analysis and institutional insights</p>
      </header>

      {/* Stock Search Section */}
      <section style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>Search Stocks</h2>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="e.g., RELAXO, TATA, ZOMATO..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            style={{ padding: '10px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {loading ? 'Analyzing...' : 'Search'}
          </button>
        </form>
      </section>

      {/* FII / DII Institutional Big Investor Data Section */}
      <section style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Big Investors (FII / DII) Activity</h2>
          <span style={{ fontSize: '0.85rem', color: '#64748b', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>
            Date: {fiiDiiData.date}
          </span>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '20px' }}>
          Track daily buying and selling figures of Foreign (FII) and Domestic (DII) Institutional Investors. Values in ₹ Crores.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* FII Card */}
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '15px', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>FII (Foreign Investors)</h3>
            <p style={{ margin: '5px 0' }}>Gross Buy: ₹{fiiDiiData.fii.buy} Cr</p>
            <p style={{ margin: '5px 0' }}>Gross Sell: ₹{fiiDiiData.fii.sell} Cr</p>
            <hr style={{ border: '0', borderTop: '1px solid #f87171', margin: '10px 0' }} />
            <p style={{ margin: '0', fontWeight: 'bold', color: fiiDiiData.fii.net < 0 ? '#dc2626' : '#16a34a' }}>
              Net: {fiiDiiData.fii.net} Cr ({fiiDiiData.fii.net < 0 ? 'Net Seller' : 'Net Buyer'})
            </p>
          </div>

          {/* DII Card */}
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '15px', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#166534' }}>DII (Domestic Investors)</h3>
            <p style={{ margin: '5px 0' }}>Gross Buy: ₹{fiiDiiData.dii.buy} Cr</p>
            <p style={{ margin: '5px 0' }}>Gross Sell: ₹{fiiDiiData.dii.sell} Cr</p>
            <hr style={{ border: '0', borderTop: '1px solid #4ade80', margin: '10px 0' }} />
            <p style={{ margin: '0', fontWeight: 'bold', color: fiiDiiData.dii.net < 0 ? '#dc2626' : '#16a34a' }}>
              Net: +{fiiDiiData.dii.net} Cr ({fiiDiiData.dii.net < 0 ? 'Net Seller' : 'Net Buyer'})
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
