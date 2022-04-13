export default async function handler(req, res) {
  const url = `${process.env.API_BASE_URL}/redeem`;
  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: req.body,
  });
  await res.unstable_revalidate("/user");
  const response = await request.json();
  res.status(200).json(response);
}
