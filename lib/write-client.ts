const STORAGE_KEY = "write-key";
const HEADER = "x-write-key";

function storedKey(): string {
  try { return localStorage.getItem(STORAGE_KEY) ?? ""; } catch { return ""; }
}

/** fetch for saving/deleting: sends the write key, asks for it once on 401 and retries */
export async function writeFetch(url: string, init: RequestInit): Promise<Response> {
  const send = (key: string) => fetch(url, { ...init, headers: { ...init.headers, [HEADER]: key } });

  let res = await send(storedKey());
  if (res.status !== 401) return res;

  const key = window.prompt("Clé d'écriture (à saisir une seule fois sur cet appareil) :")?.trim();
  if (!key) return res;
  res = await send(key);
  if (res.ok) {
    try { localStorage.setItem(STORAGE_KEY, key); } catch {}
  }
  return res;
}
