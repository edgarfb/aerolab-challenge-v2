import Image from "next/image";
import { useState } from "react";
import CardOverlay from "./card-overlay";

const fakeData = {
  _id: "5a033f0f364bf301523e9b93",
  name: "iPhone 7 Case Sea-Blue",
  cost: 200,
  category: "Accesorios",
  img: {
    url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
    hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
  },
};

export default function Card({ product = fakeData }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <CardOverlay product={fakeData} />}
      <div className="buy-bag">
        <Image
          src="/images/icons/buy-blue.svg"
          alt=""
          width="30px"
          height="30px"
        />
      </div>
      <div className="card-image">
        {/* I need to figure out how to use Image/Next Component here */}
        <img src={product.img.url} alt="" />
      </div>
      <div className="card-info">
        <span className="category">{product.category}</span>
        <span className="name">{product.name}</span>
      </div>
      <style jsx>{`
        .card {
          max-width: calc((1176px / 4));
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
