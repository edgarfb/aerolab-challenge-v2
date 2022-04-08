import Image from "next/image";
import { useState } from "react";
import CardOverlay from "./card-overlay";
import { useUserContext } from "../context/UserContext";
import styles from "./card.module.css";
import { motion } from "framer-motion";

export default function Card({ product }) {
  const user = useUserContext();
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.card}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* The overlay card will be display only if the product cost is less or equal to users points */}
      {isHover && user.points >= product.cost && (
        <CardOverlay product={product} />
      )}
      {user.points >= product.cost && (
        <div className={styles.buyBag}>
          <Image
            src="/images/icons/buy-blue.svg"
            alt=""
            width="30px"
            height="30px"
          />
        </div>
      )}
      {user.points < product.cost && (
        <div className={styles.notEnoughPoints}>
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
      <div>
        <Image
          src={product.img.url}
          alt=""
          width="252px"
          height="182px"
          layout="responsive"
        />
      </div>
      <div className="card-info">
        <span className={styles.category}>{product.category}</span>
        <span className={styles.name}>{product.name}</span>
      </div>
    </motion.div>
  );
}
