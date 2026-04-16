import React, { useState, useEffect, useRef } from "react";

// Παιχνιδιάρικη Παλέτα Χρωμάτων
const FUN_THEME = {
  primary: "#FF4DAD", // Hot Pink
  secondary: "#7000FF", // Electric Purple
  accent: "#00E5FF", // Neon Cyan
  bg: "#FFF0F7", // Soft Pink BG
  card: "#FFFFFF",
  text: "#2D005E"
};

export default function PlayfulWardrobe() {
  const [screen, setScreen] = useState("home");
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem("playful_wardrobe");
    return saved ? JSON.parse(saved) : [];
  });
  const [newItem, setNewItem] = useState({ photo: null, name: "" });
  const [isSpinning, setIsSpinning] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    localStorage.setItem("playful_wardrobe", JSON.stringify(clothes));
  }, [clothes]);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setNewItem({ ...newItem, photo: ev.target.result });
      reader.readAsDataURL(file);
    }
  };

  const saveItem = () => {
    if (newItem.photo) {
      setClothes([...clothes, { ...newItem, id: Date.now() }]);
      setNewItem({ photo: null, name: "" });
      setScreen("wardrobe");
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: FUN_THEME.bg, 
      fontFamily: "'Comic Sans MS', 'Chalkboard SE', sans-serif",
      color: FUN_THEME.text,
      paddingBottom: "100px"
    }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", padding: "30px 20px" }}>
        <h1 style={{ 
          fontSize: "32px", 
          margin: 0, 
          color: FUN_THEME.primary,
          textShadow: "2px 2px 0px #fff, 4px 4px 0px rgba(0,0,0,0.1)"
        }}>
          Closet Fun! ✨
        </h1>
      </header>

      <main style={{ maxWidth: "420px", margin: "0 auto", padding: "0 20px" }}>
        
        {screen === "home" && (
          <div style={{ textAlign: "center", animation: "bounce In 0.6s" }}>
            <div style={welcomeCard}>
              <div style={{ fontSize: "60px", marginBottom: "10px" }}>🦄</div>
              <h2 style={{ margin: 0 }}>Γεια σου, Style Star!</h2>
              <p>Έχεις {clothes.length} φανταστικά ρούχα!</p>
            </div>

            <button 
              onClick={() => {
                setIsSpinning(true);
                setTimeout(() => { setIsSpinning(false); setScreen("wardrobe"); }, 1000);
              }}
              style={{...bigBtn, background: FUN_THEME.secondary, transform: isSpinning ? "rotate(360deg)" : "none", transition: "1s"}}
            >
              🌈 ΔΕΣ ΤΗ ΝΤΟΥΛΑΠΑ
            </button>

            <button 
              onClick={() => setScreen("add")}
              style={{...bigBtn, background: FUN_THEME.primary, marginTop: "15px"}}
            >
              📸 ΠΡΟΣΘΕΣΕ ΡΟΥΧΟ
            </button>
          </div>
        )}

        {screen === "add" && (
          <div style={{ animation: "slideIn 0.4s" }}>
            <div 
              onClick={() => fileRef.current.click()}
              style={uploadCircle}
            >
              {newItem.photo ? 
                <img src={newItem.photo} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : 
                <span style={{ fontSize: "40px" }}>💖</span>
              }
            </div>
            <input ref={fileRef} type="file" onChange={handlePhoto} style={{ display: "none" }} />
            
            <input 
              placeholder="Πώς το λένε;" 
              style={funInput} 
              value={newItem.name}
              onChange={e => setNewItem({...newItem, name: e.target.value})}
            />
            
            <button onClick={saveItem} style={saveBtn}>ΕΤΟΙΜΟ! 🎉</button>
          </div>
        )}

        {screen === "wardrobe" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            {clothes.map(item => (
              <div key={item.id} style={funItemCard}>
                <img src={item.photo} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
                <div style={{ padding: "10px", fontWeight: "bold", fontSize: "14px" }}>{item.name || "Cute Item"}</div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* Floating Menu */}
      <nav style={floatingNav}>
        <div onClick={() => setScreen("home")} style={navIcon}>🏠</div>
        <div onClick={() => setScreen("wardrobe")} style={navIcon}>👗</div>
        <div onClick={() => setScreen("add")} style={navIcon}>➕</div>
      </nav>

      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

// Styles
const welcomeCard = {
  background: "#fff", padding: "30px", borderRadius: "30px",
  boxShadow: "0 15px 0px #FFD1E8", marginBottom: "30px", border: "3px solid #FF4DAD"
};

const bigBtn = {
  width: "100%", padding: "20px", border: "none", borderRadius: "25px",
  color: "#fff", fontSize: "18px", fontWeight: "bold", cursor: "pointer",
  boxShadow: "0 8px 0px rgba(0,0,0,0.1)"
};

const uploadCircle = {
  width: "200px", height: "200px", borderRadius: "100px", background: "#fff",
  margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center",
  border: "5px dashed #FF4DAD", cursor: "pointer", overflow: "hidden"
};

const funInput = {
  width: "100%", padding: "15px", borderRadius: "20px", border: "3px solid #7000FF",
  marginBottom: "20px", fontSize: "16px", textAlign: "center"
};

const saveBtn = {
  width: "100%", padding: "15px", background: "#00E5FF", color: "#2D005E",
  border: "none", borderRadius: "20px", fontWeight: "bold", cursor: "pointer"
};

const funItemCard = {
  background: "#fff", borderRadius: "20px", overflow: "hidden",
  border: "3px solid #FFD1E8", boxShadow: "0 5px 0px #FFD1E8"
};

const floatingNav = {
  position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)",
  background: "#1A1A1A", display: "flex", gap: "20px", padding: "15px 30px",
  borderRadius: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};

const navIcon = { fontSize: "24px", cursor: "pointer" };
