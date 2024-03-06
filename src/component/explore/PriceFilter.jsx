import React from "react";
import "./PriceFilter.css";

function PriceFilter({ priceFlter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <label htmlFor="price-filter">Ordenar por:</label>
      <select id="price-filter" value={priceFlter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
        Selecione uma opção
        </option>
        <option value="high-to-low">(Preço) Do maior para o menor</option>
        <option value="low-to-high">(Preço) Do menor para o maior</option>
      </select>
    </div>
  );
}

export default PriceFilter;
