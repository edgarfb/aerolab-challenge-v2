import ProductsUserHistory from "../../components/products-user-history";

export default function User({ redeemHistory }) {
  return (
    <div>
      {redeemHistory.length === 0 && (
        <div className="redeem-history-empty">
          <div className="redeem-history-empty-text">
            There is no redeem history yet.
          </div>
        </div>
      )}
      {redeemHistory.length > 0 && (
        <>
          <h1>Redeem History</h1>
          <ProductsUserHistory products={redeemHistory} />
        </>
      )}

      <style jsx>{`
        h1 {
          text-align: center;
        }
        .redeem-history-empty {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 4rem);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_BASE_URL}/user/history`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const products = await res.json();
  return {
    props: {
      redeemHistory: products,
    },
  };
}
