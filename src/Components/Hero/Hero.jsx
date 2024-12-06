import React from "react";
import HeroImage from "../../images/Hero.png"; // Adjust the path based on your file structure

export default function Hero() {
  return (
    <div
      className="hero-sec"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh", // Full height of the viewport
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white", // Default text color
        padding: "0 20px", // Add some padding for responsiveness
      }}
    >
      <p className="hero-header">Welcome to Our QR Life</p>
      <p className="hero-info">
        We deliver the best in personalized customer service to patients via its
        HMO (Health Maintenance Organization) plans offer a wide range of
        healthcare services through a well-established network of providers
        covered everywhere in Egypt.
      </p>
      <button className="hero-button">Read More ...</button>
    </div>
  );
}
