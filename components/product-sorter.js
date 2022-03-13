function BtnSortBy({ children, isActive }) {
  return (
    <button type="button">
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
        }
      `}</style>
    </button>
  );
}

export default function ProductSorterBar() {
  return (
    <div className="product-sorter-container">
      <div style={{ color: "var(--gray)" }}>16 of 32 products</div>
      <div className="sort-box">
        <div style={{ color: "var(--gray-light)" }}>sort by:</div>
        <BtnSortBy isActive={true}>Most recent</BtnSortBy>
        <BtnSortBy isActive={false}>Lower price</BtnSortBy>
        <BtnSortBy isActive={false}>Highest price</BtnSortBy>
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
