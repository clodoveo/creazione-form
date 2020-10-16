export async function getFields(table) {
  const res = await fetch("http://localhost:3000/api/" + table + "/describe");
  const json = await res.json();
  const fields = json.map((j) => j.Field);
  return fields;
}
