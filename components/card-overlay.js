import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { redeemProduct } from "../lib/redeem";
import { useUserDispatchContext } from "../context/UserContext";

export default function CardOverlay({ product }) {
  const [isEnable, setIsEnable] = useState(true);
  const router = useRouter();

  const dispatch = useUserDispatchContext();
  return (
    <div className="overlay-card">
      <div className="cost">
        <span>{product.cost}</span>
        <Image
          className="top-5"
          src="/images/icons/coin.svg"
          alt=""
          width="20px"
          height="20px"
        />
      </div>
      <button
        className="btn-overlay-card"
        disabled={!isEnable}
        onClick={() => {
          redeemProduct(product._id);
          setIsEnable(false);
          dispatch({ type: "DISCOUNT_POINTS", payload: product.cost });
          // router.push("/redeem-history");
        }}
      >
        Redden now
      </button>

      <div className="buy-bag-white">
        <Image
          className="top-2 left4"
          src="/images/icons/buy-white.svg"
          alt=""
          width="35px"
          height="35px"
        />
      </div>

      <style jsx>{`
        .overlay-card {
          display: flex;
          gap: 0.5rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(21, 219, 255, 0.8);
          z-index: 100;
        }
        .cost {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          color: var(--white);
        }
        .btn-overlay-card {
          border: none;
          padding: 0.5rem 3rem;
          border-radius: 1rem;
          color: var(--gray);
          cursor: pointer;
        }
        .btn-overlay-card:hover {
          cursor: pointer;
        }
        .buy-bag-white {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      `}</style>
    </div>
  );
}
