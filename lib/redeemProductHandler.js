export default async function redeemProductHandler(product_id) {
  try {
    // const url = `${process.env.API_BASE_URL}/redeem`;
    const url =
      "https://private-anon-49ee737344-aerolabchallenge.apiary-mock.com/redeem";
    const request = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      body: JSON.stringify({
        product_id,
      }),
    });

    const res = await request.json();
    return res;
  } catch (err) {
    console.error(err);
  }
}
