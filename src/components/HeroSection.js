import React from "react";
import '../css/App.css'
import { Button } from "./Button";
import "../css/HeroSection.css";

function HeroSection() {
  return (
    // =======================================Home Page============================================
    <div className="hero-container">
      {/* ===================================VIDEO BACKGROUND================================= */}
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      {/* ===================================TEXT MAIN========================================= */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      {/* =====================================BUTTON=================================== */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WHAT TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
