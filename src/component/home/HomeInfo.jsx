import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2>
        Experimente o auge da moda com nossas peças de design requintadas.
        </h2>
        <p>
        Onde estilo, sofisticação, exclusividade é a vanguarda do nosso
          coleção. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat quaerat nostrum quia nam earum, libero, expedita impedit
          delectus provident quo eveniet.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Conheça nossos produtos</Link>
      </button>
    </article>
  );
}

export default HomeInfo;
