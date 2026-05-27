export async function onRequestGet({ request, env }) {
  /*const origin = request.headers.get("Origin");
  const referer = request.headers.get("Referer");

  const allowedOrigin = env.CF_PAGES_URL;
  const allowedHost = allowedOrigin.split("//")[-1];

  const refererOk = (() => {
    if (!referer) return false;
    try {
      return new URL(referer).host === allowedHost;
    } catch {
      return false;
    }
  })();

  if (origin !== allowedOrigin && !refererOk) {
    if (env.WORKER_ENV != "local") {
      return new Response("[Moon-Pack] Forbidden", { status: 403, statusText: "[Moon-Pack] Forbidden" });
    }
  }*/
  const url = new URL(request.url);
  const query = url.searchParams.get("ids");

  if (!query) {
    return new Response("Missing ids", { status: 400 });
  }

  const upstream = await fetch(`https://api.curseforge.com/v1/mods`, {
    method: 'POST',
    body: JSON.stringify({
      modIds: JSON.parse(decodeURIComponent(query))
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