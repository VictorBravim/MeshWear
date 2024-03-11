import React from "react";
import HomeInfo from "./HomeInfo";
import HomeFoto from "./HomeFoto"
import "./HomeMain.css";
import backgroundImage from "/src/assets/img/bg.png";

function HomeMain() {
  return (
    <main className="home-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <HomeInfo />
      <HomeFoto />
    </main>
  );
}

export default HomeMain;
