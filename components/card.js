import Image from "next/image";
import { useState } from "react";
import CardOverlay from "./card-overlay";

export default function Card({ product }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <CardOverlay product={product} />}
      <div className="buy-bag">
        <Image
          src="/images/icons/buy-blue.svg"
          alt=""
          width="30px"
          height="30px"
        />
      </div>
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
          position: relative;
        }
        .card:hover {
          cursor: pointer;
        }

        .buy-bag {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        img {
          width: 100%;
        }
        card-info {
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
