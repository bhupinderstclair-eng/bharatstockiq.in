'use client';

import React, { useState } from 'react';

export default function BharatStockIQHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>BharatStock IQ</h1>
      <p>Smart stock analysis and insights</p>
      <form onSubmit={handleSearch} style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Search stocks..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </main>
  );
}
