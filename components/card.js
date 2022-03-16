import Image from "next/image";
import { useState } from "react";
import CardOverlay from "./card-overlay";
import { useUserContext } from "../context/UserContext";

export default function Card({ product }) {
  const user = useUserContext();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* The overlay card will be display only if the product cost is less or equal to users points */}
      {isHover && user.points > product.cost && (
        <CardOverlay product={product} />
      )}
      {user.points > product.cost && (
        <div className="buy-bag">
          <Image
            src="/images/icons/buy-blue.svg"
            alt=""
            width="30px"
            height="30px"
          />
        </div>
      )}
      {user.points < product.cost && (
        <div className="not-enough-points">
          <div>You need {product.cost}</div>
          <div className="top-5" style={{ display: "flex" }}>
            <Image
              src="/images/icons/coin.svg"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
        </div>
      )}
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
          z-index: 10;
        }

        img {
          width: 100%;
        }
        .not-enough-points {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          color: var(--gray-very-light);
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          z-index: 10;
          background-color: var(--gray-light);
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
