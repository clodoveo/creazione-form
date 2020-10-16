export async function getTables() {
  const res = await fetch("http://localhost:3000");

  const json = await res.json();

  console.log(json);
  const tables = json.map((j) => j.resource);
  return tables;
}
