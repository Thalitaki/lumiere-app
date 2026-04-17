import React from 'react';

function App() {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'sans-serif',
    background: '#FFF0F7',
    minHeight: '100vh',
    padding: '20px'
  };

  const titleStyle = {
    color: '#FF4DAD',
    fontSize: '48px',
    marginBottom: '10px'
  };

  const buttonStyle = {
    background: '#7000FF',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    borderRadius: '30px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(112, 0, 255, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>LUMIÈRE ✨</h1>
      <p style={{ color: '#2D005E', fontSize: '18px', marginBottom: '40px' }}>
        Η fashion εφαρμογή σου είναι σχεδόν έτοιμη!
      </p>
      <button 
        onClick={() => alert('Καλώς ήρθες, Θάλεια!')}
        style={buttonStyle}
      >
        ΕΙΣΟΔΟΣ ΣΤΗ ΝΤΟΥΛΑΠΑ
      </button>
      <div style={{ marginTop: '50px', fontSize: '14px', color: '#888' }}>
        Status: <span style={{ color: '#00C853', fontWeight: 'bold' }}>Online ✅</span>
      </div>
    </div>
  );
}

export default App;
