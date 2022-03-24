import { useState } from "react";
import Card from "./card";
import { useProductsContext } from "../context/ProductsContext";

export default function Products({ products }) {
  const [initPage, setInitPage] = useState(0);
  const [endPage, setEndPage] = useState(16);
  // const products = useProductsContext();
  return (
    <section>
      <div className="btn-pagination">
        <button
          onClick={() => {
            if (initPage === 0) return;

            setInitPage(initPage - 16);
            setEndPage(endPage - 16);
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            if (endPage === products.length) return;

            setInitPage(initPage + 16);
            setEndPage(endPage + 16);
          }}
        >
          &gt;
        </button>
      </div>
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
        .btn-pagination {
          max-width: 1176px;
          margin: 2rem auto;
          display: flex;
          justify-content: flex-end;
          gap: 1em;
        }
      `}</style>
    </section>
  );
}
