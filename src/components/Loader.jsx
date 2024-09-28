import React from "react";

const Loader = () => {
  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const spinnerStyle = {
    width: "60px",
    height: "60px",
    border: "8px solid rgba(0, 0, 0, 0.1)",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loader;
