import React, { useState, useEffect, useRef } from "react";

const THEME = {
  primary: "#FF4DAD", 
  secondary: "#7000FF", 
  bg: "#FFF0F7", 
  card: "#FFFFFF",
  text: "#2D005E",
  gold: "#D4AF37"
};

export default function LumiereApp() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("home");
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem("lumiere_items");
    return saved ? JSON.parse(saved) : [];
  });
  const [newItem, setNewItem] = useState({ photo: null, name: "" });
  const fileRef = useRef();

  useEffect(() => {
    localStorage.setItem("lumiere_items", JSON.stringify(clothes));
  }, [clothes]);

  const bigBtn = { width: "100%", padding: "18px", background: THEME.primary, color: "#fff", border: "none", borderRadius: "20px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" };
  const welcomeCard = { background: "#fff", padding: "25px", borderRadius: "25px", marginBottom: "25px", border: `3px solid ${THEME.primary}`, textAlign: "center" };
  const uploadBox = { width: "100%", height: "300px", background: "#fff", borderRadius: "30px", border: `3px dashed ${THEME.primary}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", overflow: "hidden", color: THEME.primary, fontWeight: "bold" };
  const itemCard = { background: "#fff", borderRadius: "20px", overflow: "hidden", border: "2px solid #FFD1E8", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" };
  const navStyle = { position: "fixed", bottom: "25px", left: "50%", transform: "translateX(-50%)", background: "#1A1A1A", display: "flex", gap: "40px", padding: "15px 40px", borderRadius: "40px", color: "#fff", fontSize: "24px", zIndex: 1000 };
  const affiliateBox = { marginTop: "30px", padding: "20px", background: "rgba(212, 175, 55, 0.1)", borderRadius: "20px", border: `1px solid ${THEME.gold}`, textAlign: "center" };
  const shopBtn = { background: THEME.gold, color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" };

  if (!user) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: THEME.secondary, padding: "20px", fontFamily: "sans-serif" }}>
        <div style={{ background: "#fff", padding: "40px", borderRadius: "30px", textAlign: "center", width: "100%", maxWidth: "350px", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
          <h1 style={{ color: THEME.primary, fontSize: "32px", marginBottom: "10px" }}>LUMIÈRE ✨</h1>
          <p style={{ color: "#888", marginBottom: "30px" }}>Your AI Fashion Assistant</p>
          <button onClick={() => setUser(true)} style={bigBtn}>ΕΙΣΟΔΟΣ</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: THEME.bg, fontFamily: "sans-serif", paddingBottom: "100px" }}>
      <header style={{ textAlign: "center", padding: "30px" }}>
        <h1 style={{ color: THEME.primary, margin: 0, fontSize: "28px" }}>LUMIÈRE ✨</h1>
      </header>

      <main style={{ maxWidth: "400px", margin: "0 auto", padding: "0 20px" }}>
        {screen === "home" && (
          <div>
            <div style={welcomeCard}>
              <h2 style={{ margin: "0 0 10px 0" }}>Γεια σου, Style Star! 🦄</h2>
              <p>Έχεις <b>{clothes.length}</b> ρούχα στη ντουλάπα σου.</p>
            </div>
            <button onClick={() => setScreen("add")} style={bigBtn}>📸 ΠΡΟΣΘΕΣΕ ΡΟΥΧΟ</button>
            <button onClick={() => setScreen("wardrobe")} style={{ ...bigBtn, background: THEME.secondary, marginTop: "15px" }}>👗 ΔΕΣ ΤΗ ΝΤΟΥΛΑΠΑ</button>
            <div style={affiliateBox}>
              <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>Σου λείπει κάτι; Δες τις τάσεις!</p>
              <button onClick={() => window.open('https://linkwi.se', '_blank')} style={shopBtn}>SHOP THE TRENDS 🛍️</button>
            </div>
          </div>
        )}

        {screen === "add" && (
          <div style={{ textAlign: "center" }}>
            <div onClick={() => fileRef.current.click()} style={uploadBox}>
              {newItem.photo ? <img src={newItem.photo} alt="new" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "Πάτα για Φωτογραφία 📸"}
            </div>
            <input ref={fileRef} type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => setNewItem({ ...newItem, photo: ev.target.result });
                reader.readAsDataURL(file);
              }
            }} style={{ display: "none" }} />
            <button onClick={() => {
              if (newItem.photo) {
                setClothes([...clothes, { ...newItem, id: Date.now() }]);
                setNewItem({ photo: null, name: "" });
                setScreen("wardrobe");
              }
            }} style={bigBtn}>ΑΠΟΘΗΚΕΥΣΗ 🎉</button>
          </div>
        )}

        {screen === "wardrobe" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            {clothes.map(item => (
              <div key={item.id} style={itemCard}>
                <img src={item.photo} alt="item" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}
      </main>

      <nav style={navStyle}>
        <div onClick={() => setScreen("home")} style={{ cursor: "pointer" }}>🏠</div>
        <div onClick={() => setScreen("wardrobe")} style={{ cursor: "pointer" }}>👗</div>
        <div onClick={() => setScreen("add")} style={{ cursor: "pointer" }}>➕</div>
      </nav>
    </div>
  );
}
