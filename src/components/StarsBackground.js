import React, { useEffect, useRef } from "react";
import "./StarsBackground.css";

const StarsBackground = () => {
  const starsRef = useRef(null); // Reference for the container

  useEffect(() => {
    const numStars = 150;
    const container = starsRef.current;

    if (!container) return; // Stop if not loaded

    container.innerHTML = ""; // Clear previous stars (prevents duplication)

    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(star);
    }
  }, []);

  return <div ref={starsRef} className="stars-container"></div>;
};

export default StarsBackground;

