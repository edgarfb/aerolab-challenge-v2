export default async function getUserHandler(req, res) {
  try {
    const url = `${process.env.API_BASE_URL}/user/me`;
    const data = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    res.status(200).json(await data.json());
  } catch (err) {
    console.error(err);
  }
}
