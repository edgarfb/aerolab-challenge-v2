import { useState, useReducer } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import redeemProductHandler from "../lib/redeemProductHandler";
import { useUserDispatchContext } from "../context/UserContext";

export default function CardOverlay({ product }) {
  const [isEnable, setIsEnable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmRedeem, setConfirmRedeem] = useState(false);
  const router = useRouter();

  const dispatch = useUserDispatchContext();

  return (
    <div className="overlay-card">
      <div className="cost">
        {!showConfirm && (
          <>
            <span>{product.cost}</span>
            <Image
              className="top-5"
              src="/images/icons/coin.svg"
              alt=""
              width="20px"
              height="20px"
            />
          </>
        )}
        {showConfirm && <span>Redeem this product?</span>}
      </div>
      {!showConfirm && (
        <button
          className="btn-overlay-card"
          disabled={!isEnable}
          onClick={() => {
            setShowConfirm(true);
          }}
        >
          Redden now
        </button>
      )}

      {showConfirm && (
        <div className="confirm-btn">
          <button
            onClick={() => {
              setShowConfirm(false);
              setConfirmRedeem(true);
              redeemProductHandler(product._id);
              dispatch({ type: "DISCOUNT_POINTS", payload: product.cost });

              router.push("/redeem-history");
            }}
          >
            Si
          </button>
          <button
            onClick={() => {
              setConfirmRedeem(false);
              setShowConfirm(false);
            }}
          >
            No
          </button>
        </div>
      )}

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

        .confirm-btn {
          display: flex;
          justify-content: center;
          gap: 1rem;
          width: 60%;
          margin: 0 auto;
        }

        .confirm-btn button {
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
        }
        .confirm-btn button:hover {
          cursor: pointer;
          outline: 2px solid var(--gray-light);
          // continue here
        }
      `}</style>
    </div>
  );
}
