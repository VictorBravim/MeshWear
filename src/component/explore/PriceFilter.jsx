import React from "react";
import "./PriceFilter.css";

function PriceFilter({ priceFlter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <label htmlFor="price-filter">Ordenar por:</label>
      <select id="price-filter" value={priceFlter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
        Preço
        </option>
        <option value="high-to-low">Maior</option>
        <option value="low-to-high">Menor</option>
      </select>
    </div>
  );
}

export default PriceFilter;
