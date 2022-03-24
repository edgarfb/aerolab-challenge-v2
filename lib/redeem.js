export async function redeemProduct(product_id) {
  const req = await fetch(
    `https://private-anon-83320d2e6c-aerolabchallenge.apiary-mock.com/redeem`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      body: JSON.stringify({
        product_id,
      }),
    }
  );
  const res = await req.json();
  console.log(res);
}
