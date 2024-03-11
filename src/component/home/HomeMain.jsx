import React from "react";
import HomeInfo from "./HomeInfo";
import HomePhotoShoot from "./HomePhotoShoot"
import "./HomeMain.css";
import backgroundImage from "/src/assets/img/bg.png";

function HomeMain() {
  return (
    <main className="home-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <HomeInfo />
      <HomePhotoShoot />
    </main>
  );
}

export default HomeMain;
