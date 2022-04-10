export default async function handler(req, res) {
  const url = `${process.env.API_BASE_URL}/user/points`;
  const addPoints = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: req.body,
  });
  const data = await addPoints.json();
  res.status(200).json(data);
}
