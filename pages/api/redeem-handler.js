export default async function redeemHandler(req, res) {
  const url = `${process.env.API_BASE_URL}/redeem`;
  const data = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({
      product_id: req.body.product_id,
    }),
  });
  res.status(200).json(await data.json());
}
