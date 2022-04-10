import { useState, useReducer } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import redeemProductHandler from "../lib/redeemProductHandler";
import { useUserDispatchContext } from "../context/UserContext";
import styles from "./card-overlay.module.css";

import { motion } from "framer-motion";

export default function CardOverlay({ product }) {
  const [isEnable, setIsEnable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmRedeem, setConfirmRedeem] = useState(false);
  const router = useRouter();
  const dispatch = useUserDispatchContext();

  return (
    <motion.div
      initial={{ backgroundColor: "rgba(21, 219, 255, 0.6)" }}
      animate={{ backgroundColor: "rgba(21, 219, 255, 0.8)" }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className={styles.overlayCard}
    >
      <div className={styles.cost}>
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
          className={styles.btnOverlayCard}
          disabled={!isEnable}
          onClick={() => {
            setShowConfirm(true);
          }}
        >
          Redden now
        </button>
      )}

      {showConfirm && (
        <div className={styles.confirmBtn}>
          <button
            onClick={() => {
              setShowConfirm(false);
              setConfirmRedeem(true);
              redeemProductHandler(product._id);
              dispatch({ type: "DISCOUNT_POINTS", payload: product.cost });

              router.push("/user");
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

      <div className={styles.buyBagWhite}>
        <Image
          className="top-2 left4"
          src="/images/icons/buy-white.svg"
          alt=""
          width="35px"
          height="35px"
        />
      </div>
    </motion.div>
  );
}
