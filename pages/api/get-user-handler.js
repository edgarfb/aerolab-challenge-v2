export default async function getUserHandler(req, res) {
  const data = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  // Get data from your database
  res.status(200).json(await data.json());
}
