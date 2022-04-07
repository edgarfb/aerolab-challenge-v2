export default async function getUserHandler() {
  const req = await fetch("/api/getUser");
  const res = await req.json();

  return res;
}
