import React, { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [items, setItems] = useState([]);

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setItems([...items, imageUrl]);
      setScreen('wardrobe');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', background: '#FFF0F7', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#FF4DAD' }}>LUMIÈRE ✨</h1>

      {screen === 'home' && (
        <div style={{ marginTop: '50px' }}>
          <p style={{ color: '#7000FF', fontWeight: 'bold' }}>Η ψηφιακή σου ντουλάπα!</p>
          <label style={{ background: '#7000FF', color: 'white', padding: '20px 40px', borderRadius: '30px', cursor: 'pointer', display: 'inline-block', fontSize: '18px', fontWeight: 'bold', marginTop: '30px' }}>
            📸 ΤΡΑΒΑ ΦΩΤΟ ΡΟΥΧΟ
            <input type="file" accept="image/*" capture="environment" onChange={handleCapture} style={{ display: 'none' }} />
          </label>
          <br />
          <button onClick={() => setScreen('wardrobe')} style={{ marginTop: '20px', background: 'none', border: '2px solid #7000FF', color: '#7000FF', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
            👗 ΔΕΣ ΤΑ ΡΟΥΧΑ ΜΟΥ ({items.length})
          </button>
        </div>
      )}

      {screen === 'wardrobe' && (
        <div>
          <button onClick={() => setScreen('home')} style={{ float: 'left', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>←</button>
          <h2 style={{ color: '#7000FF' }}>Η Ντουλάπα μου</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
            {items.map((img, index) => (
              <img key={index} src={img} alt="clothing" style={{ width: '100%', borderRadius: '15px', border: '3px solid white' }} />
            ))}
          </div>
          {items.length === 0 && <p>Δεν έχεις προσθέσει ρούχα ακόμα!</p>}
        </div>
      )}
    </div>
  );
}
