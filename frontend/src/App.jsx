
import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <div style={appStyle}>
      {/* Background blobs */}
      <div style={blob1Style} />
      <div style={blob2Style} />

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>
          ✦ My <span style={{ color: "#c084fc" }}>Blog</span> App
        </h1>
        
      </div>

      {/* Layout */}
      <div style={layoutStyle}>
        <div style={glassCard}>
          <PostForm />
        </div>

        <div style={{ ...glassCard, flex: 2 }}>
          <PostList />
        </div>
      </div>
    </div>
  );
}

const appStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  padding: "40px 20px",
  fontFamily: "'DM Sans', sans-serif",
  position: "relative",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // center content
};

const blob1Style = {
  position: "absolute",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "#a78bfa",
  filter: "blur(100px)",
  opacity: 0.25,
  top: "-120px",
  left: "-120px",
  zIndex: 0,
};

const blob2Style = {
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: "#f472b6",
  filter: "blur(100px)",
  opacity: 0.25,
  bottom: "-80px",
  right: "-80px",
  zIndex: 0,
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "30px",
  zIndex: 1,
};

const titleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "32px",
  color: "#fff",
  margin: 0,
};

const badgeStyle = {
  background: "rgba(192, 132, 252, 0.2)",
  border: "1px solid rgba(192, 132, 252, 0.4)",
  color: "#e9d5ff",
  fontSize: "11px",
  padding: "4px 12px",
  borderRadius: "20px",
};

const layoutStyle = {
  display: "flex",
  gap: "25px",
  width: "100%",
  maxWidth: "1100px", //  control width
  zIndex: 1,
  flexWrap: "wrap", //  responsive
};

const glassCard = {
  flex: 1,
  minWidth: "300px", //  mobile fix
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "20px",
  padding: "25px",
  backdropFilter: "blur(15px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  transition: "0.3s",
};

export default App;
