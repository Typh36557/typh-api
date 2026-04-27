// API pour TYPH X-CHAIN
Deno.serve(async (req) => {
  const url = new URL(req.url);
  
  // Route: Récupérer les taux
  if (url.pathname === "/api/taux") {
    const reponse = await fetch("https://typhxchain-default-rtdb.firebaseio.com/donnees/taux.json");
    const donnees = await reponse.json();
    return new Response(JSON.stringify(donnees), {
      headers: { "Content-Type": "application/json" }
    });
  }
  
  // Page d'accueil
  return new Response("✅ API TYPH X-CHAIN - Appelle /api/taux", { status: 200 });
});
