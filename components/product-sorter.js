import { useState } from "react";
const btnLabels = ["Most recent", "Lower price", "Highest price"];

function BtnSortBy({ children, isActive, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          background: ${isActive
            ? "var(--lightblue)"
            : "var(--gray-very-light)"};
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 1rem;
          color: ${isActive ? "var(--white)" : "var(--gray-light)"};
          cursor: pointer;
        }
      `}</style>
    </button>
  );
}

export default function ProductSorterBar() {
  const [actualIndex, setActualIndex] = useState(0);
  return (
    <div className="product-sorter-container">
      <div style={{ color: "var(--gray)" }}>16 of 32 products</div>
      <div className="sort-box">
        <div style={{ color: "var(--gray-light)" }}>sort by:</div>
        {btnLabels.map((label, index) => (
          <BtnSortBy
            key={index}
            isActive={actualIndex === index}
            onClick={() => setActualIndex(index)}
          >
            {label}
          </BtnSortBy>
        ))}
      </div>
      <style jsx>{`
        .product-sorter-container {
          display: flex;
          gap: 1rem;
          align-items: center;
          max-width: 1176px;
          margin: auto;
          padding: 1rem 0;
          padding-top: 3.25rem;
          border-bottom: 1px solid var(--gray-very-light);
        }
        .sort-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
