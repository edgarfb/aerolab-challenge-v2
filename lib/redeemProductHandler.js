export default async function redeemProductHandler(productId) {
  try {
    await fetch("/api/redeemProduct", {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
    });
  } catch (err) {
    console.error(err);
  }
}
