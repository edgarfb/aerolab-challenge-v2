import { useState, useContext } from "react";
import Card from "./card";
import { useProductsContext } from "../context/productsContext";

export default function Products({ products }) {
  const { initPage, endPage, setInitPage, setEndPage, productsLength } =
    useProductsContext();
  return (
    <section>
      <div className="products-container">
        {products
          .map((item) => <Card key={item.name} product={item} />)
          .slice(initPage, endPage)}
      </div>
      <style jsx>{`
        .products-container {
          display: flex;
          gap: 1em;
          flex-wrap: wrap;
          max-width: 1176px;

          margin: 2rem auto;
        }
      `}</style>
    </section>
  );
}
