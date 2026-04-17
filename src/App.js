import React, { useState } from 'react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('login'); // Ξεκινάει από το login
  const [userName, setUserName] = useState('');
  const [aiActive, setAiActive] = useState(false);
  const [aiShowResult, setAiShowResult] = useState(false);
  const [itemCount, setItemCount] = useState(24);

  const handleLogin = () => {
    if (userName.trim() !== "") {
      setActiveScreen('home');
    } else {
      alert("Παρακαλώ δώσε ένα όνομα για τη ντουλάπα σου! ✨");
    }
  };

  const startAI = () => {
    setAiActive(true);
    setAiShowResult(false);
    setTimeout(() => { setAiShowResult(true); }, 1500);
  };

  return (
    <div style={{ 
      margin: 0, padding: 0, boxSizing: 'border-box',
      fontFamily: "'Montserrat', sans-serif",
      background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 30%, #fce4ec 60%, #f9e8ef 100%)',
      minHeight: '100vh', color: '#1a1a1a'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;600&display=swap');
        
        .lumiere-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: 0.35em;
          background: linear-gradient(135deg, #8B6914 0%, #C9A84C 35%, #F0D080 55%, #C9A84C 75%, #8B6914 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(201,168,76,0.4));
        }

        .login-input {
          width: 80%;
          padding: 15px;
          border-radius: 20px;
          border: 1.5px solid rgba(201,168,76,0.3);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          outline: none;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(196,112,144,0.1);
        }

        .btn-3d-gold {
          padding: 18px 50px;
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 60%, #111 100%);
          color: #F0D080;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 0.2em;
          box-shadow: 0 6px 0 #000, 0 8px 20px rgba(0,0,0,0.4);
          cursor: pointer;
          text-transform: uppercase;
        }

        .btn-3d-gold:active { transform: translateY(4px); box-shadow: 0 2px 0 #000; }

        .stat-card {
          flex:1; background: rgba(255,255,255,0.55);
          backdrop-filter: blur(12px); border-radius: 20px;
          padding: 18px 14px; border: 1.5px solid rgba(255,255,255,0.7);
          text-align:center;
        }

        .bottom-nav {
          position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
          width:calc(100% - 40px); max-width:380px;
          background:rgba(26,26,26,0.9); backdrop-filter:blur(20px);
          border-radius:28px; padding:14px 30px; display:flex;
          justify-content:space-between; align-items:center; z-index:50;
        }
      `}</style>

      {/* ========== LOGIN SCREEN ========== */}
      {activeScreen === 'login' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
          <div className="lumiere-logo" style={{ marginBottom: '10px' }}>LUMIÈRE</div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#C47090', marginBottom: '50px', textTransform: 'uppercase' }}>Luxury Digital Wardrobe</div>
          
          <input 
            className="login-input" 
            type="text" 
            placeholder="Πληκτρολόγησε το όνομά σου"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          
          <button className="btn-3d-gold" onClick={handleLogin}>Δημιουργία Ντουλάπας</button>
          <div style={{ marginTop: '30px', fontSize: '0.6rem', color: '#C47090', opacity: 0.7 }}>✦ JOIN THE FASHION REVOLUTION ✦</div>
        </div>
      )}

      {/* ========== HOME SCREEN ========== */}
      {activeScreen === 'home' && (
        <div style={{ paddingBottom: '100px' }}>
          <div style={{ padding: '36px 20px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#C47090' }}>WELCOME BACK,</div>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.8rem', fontWeight: '600', color: '#1a1a1a' }}>{userName} ✨</div>
            </div>
            <div className="lumiere-logo" style={{ fontSize: '1.5rem', letterSpacing: '0.1em' }}>L</div>
          </div>

          <div style={{ margin: '18px 20px 0', borderRadius: '24px', overflow: 'hidden', height: '200px', position: 'relative', background: 'linear-gradient(135deg,#f8bbd9 0%,#ce93d8 40%,#f48fb1 70%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '5rem' }}>👗</div>
            <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(255,255,255,0.75)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.65rem', color: '#C47090' }}>✦ AI STYLIST READY</div>
          </div>

          <button className="btn-3d-gold" style={{ margin: '20px 20px 0', width: 'calc(100% - 40px)', borderRadius: '18px' }} onClick={startAI}>✨ ΠΡΟΤΑΣΗ OUTFIT</button>

          <div style={{ display: 'flex', gap: '12px', margin: '16px 20px 0' }}>
            <div className="stat-card">
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', fontWeight: '600' }}>{itemCount}</div>
              <div style={{ fontSize: '0.6rem', color: '#C47090', textTransform: 'uppercase' }}>Ρούχα</div>
            </div>
            <div className="stat-card">
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', fontWeight: '600' }}>8</div>
              <div style={{ fontSize: '0.6rem', color: '#C47090', textTransform: 'uppercase' }}>Outfits</div>
            </div>
          </div>

          <div style={{ margin: '24px 20px 10px', fontFamily: 'Cormorant Garamond', fontSize: '1.3rem' }}>Η <span>Συλλογή σου</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '0 20px' }}>
             {['👠', '🧥', '👒', '👗', '👜', '👚'].map((emoji, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '15px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', border: '1px solid rgba(255,255,255,0.6)' }}>{emoji}</div>
             ))}
          </div>
        </div>
      )}

      {/* BOTTOM NAV (Μόνο αν δεν είμαστε στο login) */}
      {activeScreen !== 'login' && (
        <nav className="bottom-nav">
          <div style={{ color: activeScreen === 'home' ? '#C9A84C' : '#fff', textAlign: 'center' }} onClick={() => setActiveScreen('home')}>
            <div style={{ fontSize: '1.2rem' }}>🏠</div>
            <div style={{ fontSize: '0.5rem' }}>Home</div>
          </div>
          <div style={{ color: activeScreen === 'wardrobe' ? '#C9A84C' : '#fff', textAlign: 'center' }} onClick={() => setActiveScreen('wardrobe')}>
            <div style={{ fontSize: '1.2rem' }}>👗</div>
            <div style={{ fontSize: '0.5rem' }}>Closet</div>
          </div>
          <div style={{ color: '#fff', textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem' }}>👯‍♀️</div>
            <div style={{ fontSize: '0.5rem' }}>Friends</div>
          </div>
        </nav>
      )}

      {/* AI OVERLAY */}
      {aiActive && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,10,18,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
           <div style={{ color: '#fff', letterSpacing: '0.3em', marginBottom: '40px', fontSize: '0.8rem' }}>{aiShowResult ? '✦ LUMIÈRE AI RECOMMENDATION' : 'SCANNING YOUR STYLE...'}</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '100px', height: '100px', border: '2px solid #C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', background: 'rgba(201,168,76,0.1)' }}>👚</div>
              <div style={{ color: '#C9A84C', fontSize: '2rem' }}>+</div>
              <div style={{ width: '100px', height: '100px', border: '2px solid #C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', background: 'rgba(201,168,76,0.1)' }}>👖</div>
           </div>
           {aiShowResult && (
             <div style={{ animation: 'fadeIn 1s', textAlign: 'center' }}>
               <div style={{ color: '#F0D080', marginTop: '40px', fontSize: '1.2rem', fontFamily: 'Cormorant Garamond', padding: '0 30px' }}>
                 "{userName}, αυτός ο συνδυασμός είναι η απόλυτη τάση για σήμερα!"
               </div>
               <button onClick={() => setAiActive(false)} style={{ marginTop: '50px', background: 'none', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 40px', borderRadius: '30px', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '0.7rem' }}>ΕΠΙΣΤΡΟΦΗ</button>
             </div>
           )}
        </div>
      )}
    </div>
  );
}
