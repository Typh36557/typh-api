const FIREBASE_DB_URL = "https://x-chain-2-default-rtdb.firebaseio.com";

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/api/taux") {
    const reponse = await fetch(`${FIREBASE_DB_URL}/donnees/taux.json`);
    const donnees = await reponse.json();
    return new Response(JSON.stringify(donnees), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("✅ API TYPH OK", { status: 200 });
});
