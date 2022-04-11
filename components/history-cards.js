import Image from "next/image";

export default function HistoryCard({ product }) {
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
        {product.amount > 1 && (
          <span className="name">{product.amount} Items</span>
        )}
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
