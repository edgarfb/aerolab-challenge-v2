import Image from "next/image";

function HistoryCard({ product }) {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={product.img.url}
          alt=""
          width="252px"
          height="182px"
          layout="responsive"
        />
      </div>
      <div className="card-info">
        <span className="category">{product.category}</span>
        <span className="name">{product.name}</span>
      </div>

      <style jsx>{`
        .card {
          max-width: 276px;
          width: 100%;
          padding: 1rem;
          box-shadow: 2px 3px 5px var(--gray-very-light);
        }
        img {
          width: 100%;
        }
        .category {
          display: block;
          color: var(--gray-light);
        }
        .name {
          display: block;
          color: var(--gray);
        }
      `}</style>
    </div>
  );
}

export default function ProductsUserHistory({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        return <HistoryCard key={product.id} product={product} />;
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
