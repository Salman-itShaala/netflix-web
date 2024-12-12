import React from "react";
import "./home.css";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-color"></div>
      <Header />
      <div className="home">
        <p className="home-first-para">Unlimited movies, TV shows and more</p>
        <p className="second-para">Starts at ₹149. Cancel at any time.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="subscribe-container">
          <input type="email" placeholder="Email address" />
          <button>Get Started {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
