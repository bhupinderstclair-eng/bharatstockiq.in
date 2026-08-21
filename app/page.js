'use client';

import React, { useState } from 'react';

export default function BharatStockIQMaster() {
  const [activeTab, setActiveTab] = useState('landing');
  const [userRole, setUserRole] = useState('guest'); // 'guest', 'user', 'admin'
  const [authModal, setAuthModal] = useState(null); // 'login' or 'signup'
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  // Stock Search State
  const [stockQuery, setStockQuery] = useState('');
  const [stockResult, setStockResult] = useState(null);

  // Mock Database for IPOs
  const upcomingIPOs = [
    { name: "Apex FinTech Ltd.", priceBand: "₹450 - ₹475", openDate: "25 Aug 2026", rating: "Strong Subscribe", view: "High growth potential in digital lending." },
    { name: "GreenEnergy Infra", priceBand: "₹180 - ₹195", openDate: "28 Aug 2026", rating: "Avoid / Risky", view: "High valuation, weak cash flows." },
    { name: "Bharat Retail Corp", priceBand: "₹820 - ₹850", openDate: "02 Sep 2026", rating: "Subscribe for Listing Gain", view: "Strong brand presence and DII backing." }
  ];

  // Stock Database with Ratings & Fundamentals
  const stockDatabase = {
    "RELIANCE": { name: "Reliance Industries", ltp: "₹2,940.50", change: "+1.8%", rating: "Strong Buy", pe: "28.4", fii: "22.5%", dii: "16.1%", public: "61.4%" },
    "TCS": { name: "Tata Consultancy Services", ltp: "₹4,120.00", change: "+0.6%", rating: "Buy / Accumulate", pe: "31.2", fii: "13.2%", dii: "9.5%", public: "77.3%" },
    "ZOMATO": { name: "Zomato Ltd.", ltp: "₹215.40", change: "-1.2%", rating: "Hold / Neutral", pe: "140.5", fii: "42.1%", dii: "18.4%", public: "39.5%" }
  };

  // Live Market News
  const marketNews = [
    { title: "RBI Keeps Repo Rate Unchanged at 6.5%, Focus Remains on Withdrawal of Accommodation", time: "2 hours ago", category: "India" },
    { title: "US Fed Signals Potential Rate Cut in Upcoming September FOMC Meeting", time: "4 hours ago", category: "Global" },
    { title: "FII Cash Outflows Moderate as Domestic Institutional Buying Hits Record High", time: "5 hours ago", category: "Institutional" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if(emailInput === "admin@bharatstockiq.in") {
      setUserRole('admin');
    } else {
      setUserRole('user');
    }
    setAuthModal(null);
  };

  const handleStockSearch = (e) => {
    e.preventDefault();
    const cleanQuery = stockQuery.toUpperCase().trim();
    if(stockDatabase[cleanQuery]) {
      setStockResult(stockDatabase[cleanQuery]);
    } else {
      setStockResult({ name: cleanQuery, ltp: "₹1,050.00", change: "+2.1%", rating: "Moderate Buy", pe: "22.1", fii: "20.0%", dii: "15.0%", public: "65.0%" });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#030712', color: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Top Navigation Bar */}
      <nav style={{ borderBottom: '1px solid #1f2937', background: '#0f172a', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('landing')}>
          <div style={{ width: '12px', height: '12px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 12px #38bdf8' }}></div>
          <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '900', letterSpacing: '0.5px', color: '#fff' }}>
            BHARAT<span style={{ color: '#38bdf8' }}>STOCK IQ</span>
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button onClick={() => setActiveTab('landing')} style={{ background: 'none', border: 'none', color: activeTab === 'landing' ? '#38bdf8' : '#9ca3af', cursor: 'pointer', fontWeight: '600' }}>Home</button>
          <button onClick={() => setActiveTab('dashboard')} style={{ background: 'none', border: 'none', color: activeTab === 'dashboard' ? '#38bdf8' : '#9ca3af', cursor: 'pointer', fontWeight: '600' }}>Markets & Analysis</button>
          <button onClick={() => setActiveTab('ipo')} style={{ background: 'none', border: 'none', color: activeTab === 'ipo' ? '#38bdf8' : '#9ca3af', cursor: 'pointer', fontWeight: '600' }}>IPO Radar</button>
          <button onClick={() => setActiveTab('premium')} style={{ background: 'none', border: 'none', color: activeTab === 'premium' ? '#38bdf8' : '#9ca3af', cursor: 'pointer', fontWeight: '600' }}>👑 Premium & Courses</button>
          {userRole === 'admin' && <button onClick={() => setActiveTab('admin')} style={{ background: '#7c3aed', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Admin Panel</button>}
        </div>

        <div>
          {userRole === 'guest' ? (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setAuthModal('login')} style={{ background: 'transparent', border: '1px solid #374151', color: '#fff', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Login</button>
              <button onClick={() => setAuthModal('signup')} style={{ background: '#0284c7', border: 'none', color: '#fff', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Get Started</button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.85rem', background: '#1e293b', padding: '6px 12px', borderRadius: '20px', color: '#38bdf8' }}>👤 {userRole === 'admin' ? 'Admin Access' : 'Pro Member'}</span>
              <button onClick={() => setUserRole('guest')} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Dynamic Container */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* 1. LANDING PAGE TAB */}
        {activeTab === 'landing' && (
          <div>
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(180deg, #0f172a 0%, #030712 100%)', borderRadius: '16px', border: '1px solid #1e293b', marginBottom: '40px' }}>
              <span style={{ background: '#0284c733', color: '#38bdf8', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #0284c755' }}>🚀 India's Advanced Institutional Analytics Platform</span>
              <h1 style={{ fontSize: '3rem', margin: '20px 0', fontWeight: '900', letterSpacing: '-1px' }}>Master the Market with <span style={{ color: '#38bdf8' }}>Smart Money Data</span></h1>
              <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 30px auto' }}>Track FII/DII net flows, high-conviction stock ratings, upcoming IPO ratings, and expert advisory plans designed for serious long-term investors.</p>
              <button onClick={() => setActiveTab('dashboard')} style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '14px 32px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 0 20px rgba(2,132,199,0.4)' }}>
                Explore Live Markets Now &rarr;
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#38bdf8', margin: '0 0 10px 0' }}>📊 Institutional Tracking</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>Deep breakdown of Foreign and Domestic institutional buying/selling trends across cash markets.</p>
              </div>
              <div style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#38bdf8', margin: '0 0 10px 0' }}>🚀 IPO Ratings & Analysis</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>Unbiased expert ratings on upcoming IPOs to help you separate listing gains from value traps.</p>
              </div>
              <div style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#38bdf8', margin: '0 0 10px 0' }}>💎 Premium Advisory & Courses</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>Join exclusive Telegram/WhatsApp advisory channels and learn professional asset analysis.</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. MARKETS & STOCK ANALYSIS TAB */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Stock & Institutional Intelligence Dashboard</h2>
            <p style={{ color: '#9ca3af', marginBottom: '30px' }}>Search any stock to analyze fundamental ratings, P/E ratios, and shareholding patterns (FII, DII, Public).</p>

            {/* Stock Search Box */}
            <div style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '30px' }}>
              <form onSubmit={handleStockSearch} style={{ display: 'flex', gap: '12px' }}>
                <input 
                  type="text" 
                  placeholder="Enter Ticker (e.g. RELIANCE, TCS, ZOMATO)..." 
                  value={stockQuery}
                  onChange={(e) => setStockQuery(e.target.value)}
                  style={{ flex: 1, background: '#030712', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: '#fff', fontSize: '1rem' }}
                />
                <button type="submit" style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '0 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Search Stock</button>
              </form>

              {stockResult && (
                <div style={{ marginTop: '20px', background: '#030712', padding: '20px', borderRadius: '8px', border: '1px solid #38bdf8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, color: '#38bdf8', fontSize: '1.3rem' }}>{stockResult.name}</h3>
                    <span style={{ background: '#064e3b', color: '#34d399', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold' }}>{stockResult.rating}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                    <div><span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Price</span><p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '1.1rem' }}>{stockResult.ltp} <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>{stockResult.change}</span></p></div>
                    <div><span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>P/E Ratio</span><p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '1.1rem' }}>{stockResult.pe}</p></div>
                    <div><span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>FII / DII Holding</span><p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '1.1rem', color: '#38bdf8' }}>{stockResult.fii} / {stockResult.dii}</p></div>
                    <div><span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Public Holding</span><p style={{ margin: '4px 0 0 0', fontWeight: 'bold', fontSize: '1.1rem' }}>{stockResult.public}</p></div>
                  </div>
                </div>
              )}
            </div>

            {/* Live Financial News Section (India & World) */}
            <div style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '30px' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '1.2rem', color: '#38bdf8' }}>📰 Live Market News (India & Global)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {marketNews.map((news, idx) => (
                  <div key={idx} style={{ paddingBottom: '12px', borderBottom: idx !== marketNews.length - 1 ? '1px solid #1f2937' : 'none' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ background: '#1e293b', color: '#38bdf8', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px' }}>{news.category}</span>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{news.time}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', color: '#f3f4f6' }}>{news.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. IPO RADAR TAB */}
        {activeTab === 'ipo' && (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Upcoming IPO Tracker & Expert Ratings</h2>
            <p style={{ color: '#9ca3af', marginBottom: '30px' }}>Check which upcoming public issues are worth subscribing to based on fundamental analysis and grey market trends.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {upcomingIPOs.map((ipo, idx) => (
                <div key={idx} style={{ background: '#0f172a', padding: '24px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{ipo.name}</h3>
                      <span style={{ background: ipo.rating.includes('Strong') ? '#064e3b' : '#7f1d1d', color: ipo.rating.includes('Strong') ? '#34d399' : '#f87171', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>{ipo.rating}</span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: '4px 0' }}>Price Band: <strong style={{ color: '#fff' }}>{ipo.priceBand}</strong></p>
                    <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: '4px 0 15px 0' }}>Opens On: <strong style={{ color: '#fff' }}>{ipo.openDate}</strong></p>
                    <p style={{ fontSize: '0.85rem', color: '#cbd5e1', background: '#1e293b', padding: '10px', borderRadius: '6px' }}>💡 <strong>Expert Verdict:</strong> {ipo.view}</p>
                  </div>
                  <button style={{ marginTop: '20px', background: '#2563eb', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>View Detailed RHP Analysis</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PREMIUM PLANS & COURSES TAB */}
        {activeTab === 'premium' && (
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Unlock BharatStock IQ Pro Membership</h2>
            <p style={{ color: '#9ca3af', marginBottom: '40px' }}>Get daily high-conviction swing trade setups, direct WhatsApp advisory access, and professional asset reconstruction & stock mastery courses.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', textAlign: 'left' }}>
              <div style={{ background: '#0f172a', padding: '30px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#38bdf8', margin: '0 0 10px 0' }}>👑 VIP Advisory Channel</h3>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0' }}>₹2,499 <span style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 'normal' }}>/ 6 Months</span></p>
                <ul style={{ color: '#9ca3af', paddingLeft: '20px', lineHeight: '1.8', margin: '20px 0' }}>
                  <li>Direct stock & swing suggestions</li>
                  <li>Real-time FII/DII alert broadcast</li>
                  <li>Exclusive Telegram / WhatsApp group access</li>
                </ul>
                <button onClick={() => alert("Redirecting to secure payment gateway...")} style={{ width: '100%', background: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe Now</button>
              </div>

              <div style={{ background: '#0f172a', padding: '30px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#38bdf8', margin: '0 0 10px 0' }}>📚 Stock & Distressed Asset Course</h3>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0' }}>₹4,999 <span style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 'normal' }}>/ Lifetime</span></p>
                <ul style={{ color: '#9ca3af', paddingLeft: '20px', lineHeight: '1.8', margin: '20px 0' }}>
                  <li>Complete fundamental & technical masterclass</li>
                  <li>Understanding bank liquidation & ARC assets</li>
                  <li>Live Q&A mentoring sessions</li>
                </ul>
                <button onClick={() => alert("Redirecting to secure payment gateway...")} style={{ width: '100%', background: '#7c3aed', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Enroll in Course</button>
              </div>
            </div>
          </div>
        )}

        {/* 5. ADMIN CONTROL PANEL TAB (Only for Admin) */}
        {activeTab === 'admin' && userRole === 'admin' && (
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '16px', border: '1px solid #7c3aed' }}>
            <h2 style={{ color: '#c084fc', marginTop: 0 }}>⚙️ Personal Admin Control Dashboard</h2>
            <p style={{ color: '#9ca3af' }}>Welcome back, Admin! Here you can manage client subscriptions, publish new IPO ratings, and broadcast daily market notes.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#030712', padding: '20px', borderRadius: '8px', border: '1px solid #1f2937' }}>
                <h4>Publish New IPO Rating</h4>
                <input type="text" placeholder="IPO Name" style={{ width: '100%', padding: '10px', background: '#0f172a', border: '1px solid #374151', color: '#fff', borderRadius: '6px', marginBottom: '10px' }} />
                <button style={{ background: '#7c3aed', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Publish Update</button>
              </div>
              <div style={{ background: '#030712', padding: '20px', borderRadius: '8px', border: '1px solid #1f2937' }}>
                <h4>Broadcast Subscriber Alert</h4>
                <textarea placeholder="Type urgent swing/market update..." style={{ width: '100%', height: '60px', padding: '10px', background: '#0f172a', border: '1px solid #374151', color: '#fff', borderRadius: '6px', marginBottom: '10px' }}></textarea>
                <button style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Send to All Members</button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* LOGIN / SIGNUP MODAL POPUP */}
      {authModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '12px', border: '1px solid #374151', width: '350px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#38bdf8' }}>{authModal === 'login' ? 'Member Login' : 'Create Account'}</h3>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="email" placeholder="Email (use admin@bharatstockiq.in for admin)" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} style={{ padding: '10px', background: '#030712', border: '1px solid #374151', color: '#fff', borderRadius: '6px' }} required />
              <input type="password" placeholder="Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} style={{ padding: '10px', background: '#030712', border: '1px solid #374151', color: '#fff', borderRadius: '6px' }} required />
              <button type="submit" style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Continue</button>
            </form>
            <button onClick={() => setAuthModal(null)} style={{ background: 'transparent', border: 'none', color: '#9ca3af', marginTop: '15px', cursor: 'pointer', width: '100%' }}>Cancel</button>
          </div>
        </div>
      )}

      {/* MANDATORY DISCLAIMER FOOTER */}
      <footer style={{ borderTop: '1px solid #1f2937', background: '#090d16', padding: '24px 32px', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>
          ⚠️ DISCLAIMER: Trade with your own risk. BharatStock IQ is an analytical platform and does not provide direct SEBI-registered investment advice. Past performance does not guarantee future results.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: 0 }}>
          &copy; 2026 BharatStock IQ. All rights reserved. Operating out of Chandigarh, India.
        </p>
      </footer>

    </div>
  );
}
