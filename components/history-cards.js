import Image from "next/image";

export default function HistoryCard({ product, priority = false }) {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          priority={priority}
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
        {product.amount > 1 && (
          <span className="amount-items">x{product.amount}</span>
        )}
      </div>

      <style jsx>{`
        .card {
          max-width: 276px;
          width: 100%;
          padding: 1rem;
          box-shadow: 2px 3px 5px var(--gray-very-light);
          position: relative;
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
        .amount-items {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--orange);
        }
      `}</style>
    </div>
  );
}
