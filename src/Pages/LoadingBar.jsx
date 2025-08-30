import React, { useEffect, useState } from "react";
import logo from "../assets/SPECULAR_LOGO.png";

const LoadingBar = ({ progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Animate progress smoothly up to 100 over 10s
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // ~1% every 100ms
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Ensure we never fall behind actual preload progress
  useEffect(() => {
    if (progress > displayProgress) {
      setDisplayProgress(progress);
    }
  }, [progress, displayProgress]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // fancier background
        flexDirection: "column",
      }}
    >
      <img
        src={logo}
        alt="Welcome"
        className="shadow-lg"
        style={{
          borderRadius: "20px",
          maxWidth: "150px",
          backgroundColor:"white",
          animation: "pulse 1.5s infinite", // glowing effect
        }}
      />

      {/* Progress bar */}
      <div
        style={{
          marginTop: "20px",
          width: "50%",
          height: "8px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${displayProgress}%`,
            height: "100%",
            backgroundColor: "black",
            transition: "width 0.2s ease-in-out",
          }}
        />
      </div>

      {/* Percentage text */}
      <p
        style={{
          marginTop: "10px",
          color: "black",
          fontWeight: "bold",
          fontSize: "18px",
          letterSpacing: "2px",
        }}
      >
        {displayProgress}%
      </p>
    </div>
  );
};

export default LoadingBar;
