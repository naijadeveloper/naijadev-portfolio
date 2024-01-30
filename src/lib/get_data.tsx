async function getData<T>(url: string): Promise<T> {
  const raw = await fetch(url);
  const data = await raw.json();
  return data;
}

export default getData;
