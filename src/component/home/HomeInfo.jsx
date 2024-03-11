import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2>
        Experimente 
        <br />
        o auge da moda.
        </h2>
        <p>
        Onde estilo, sofisticação, exclusividade.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Conheça nossos produtos</Link>
      </button>
    </article>
  );
}

export default HomeInfo;
