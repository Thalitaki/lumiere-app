import React, { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories'];

  const handleCapture = (e, category) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newItem = { url: imageUrl, category: category, id: Date.now() };
      setItems([newItem, ...items]);
      setScreen('wardrobe');
    }
  };

  const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

  return (
    <div style={{ backgroundColor: '#fdfbfb', minHeight: '100vh', fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fff', borderBottom: '1px solid #eee', sticky: 'top', zIndex: 100 }}>
        <h1 style={{ margin: 0, color: '#FF4DAD', letterSpacing: '2px', fontWeight: '800' }}>LUMIÈRE</h1>
        <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Digital Wardrobe</p>
      </header>

      {/* NAVIGATION / FILTERS */}
      <div style={{ display: 'flex', overflowX: 'auto', padding: '15px', gap: '10px', backgroundColor: '#fff' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => { setFilter(cat); setScreen('wardrobe'); }}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: filter === cat ? '#7000FF' : '#f0f0f0',
              color: filter === cat ? '#fff' : '#555',
              whiteSpace: 'nowrap',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <main style={{ padding: '15px' }}>
        {screen === 'home' && items.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <div style={{ fontSize: '50px' }}>✨</div>
            <h2 style={{ color: '#333' }}>Η ντουλάπα σου είναι άδεια</h2>
            <p style={{ color: '#777' }}>Ξεκίνα να φωτογραφίζεις τα αγαπημένα σου κομμάτια</p>
          </div>
        ) : (
          /* PINTEREST GRID */
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '15px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {filteredItems.map((item) => (
              <div key={item.id} style={{ 
                backgroundColor: '#fff', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
              }}>
                <img src={item.url} alt="clothing" style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '10px', fontSize: '12px', color: '#7000FF', fontWeight: 'bold' }}>
                  #{item.category}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FLOATING ACTION BUTTON (ADD) */}
      <div style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <label style={{ 
          backgroundColor: '#000', 
          color: '#fff', 
          padding: '15px 30px', 
          borderRadius: '50px', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          <span style={{ fontSize: '20px' }}>+</span> ΠΡΟΣΘΗΚΗ ΡΟΥΧΟΥ
          <select 
            onChange={(e) => {
              const cat = e.target.value;
              const input = document.getElementById('cameraInput');
              input.setAttribute('data-category', cat);
              input.click();
            }}
            style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          >
            <option value="">Επίλεξε κατηγορία...</option>
            {categories.slice(1).map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>
        <input 
          id="cameraInput"
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={(e) => handleCapture(e, e.target.getAttribute('data-category'))} 
          style={{ display: 'none' }} 
        />
      </div>
    </div>
  );
}
