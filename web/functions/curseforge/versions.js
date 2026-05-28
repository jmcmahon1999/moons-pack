export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("ids");

  if (!query) {
    return new Response("Missing ids", { status: 400 });
  }

  const upstream = await fetch(`https://api.curseforge.com/v1/mods/files`, {
    method: 'POST',
    body: JSON.stringify({
      fileIds: JSON.parse(decodeURIComponent(query))
    }),
    headers: {
        'x-api-key': env.CURSEFORGE_API_KEY,
        'Content-Type': 'application/json',
        "Accept": "application/json"
    }
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}