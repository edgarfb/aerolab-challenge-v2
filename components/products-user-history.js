import HistoryCard from "./history-cards";
import uniquesProdusts from "../lib/uniques-products";

export default function ProductsUserHistory({ products }) {
  const uniquesProducts = uniquesProdusts(products);

  return (
    <div className="products-container">
      {uniquesProducts.map((product) => {
        return (
          <HistoryCard priority key={product.createDate} product={product} />
        );
      })}
      <style jsx>{`
        .products-container {
          display: flex;
          gap: 1em;
          flex-wrap: wrap;
          max-width: 1176px;

          margin: 2rem auto;
        }
      `}</style>
    </div>
  );
}
