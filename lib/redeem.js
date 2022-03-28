export async function redeemProduct(product_id) {
  const req = await fetch("/api/redeem-handler", {
    product_id,
  });
  const res = await req.json();
}
