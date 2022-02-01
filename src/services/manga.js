export async function getMangaTitles() {
  const resp = await fetch(`https://api.mangadex.org/manga?limit=25`);
  const data = await resp.json();
  return data.data;
}
