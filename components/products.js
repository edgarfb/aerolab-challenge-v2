import Card from "./card";
import { useProductsContext } from "../context/productsContext";

export default function Products() {
  const { initPage, endPage, products } = useProductsContext();
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
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          max-width: 1176px;

          margin: 2rem auto;
        }

        @media (min-width: 768px) {
          .products-container {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
