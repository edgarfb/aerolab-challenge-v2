export function addPoints(points) {
  fetch("https://coding-challenge-api.aerolab.co/user/points", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({
      amount: points,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
