// Ancienne adresse de l'appli : ce service se retire et efface les anciennes copies (l'appli est à …/briquotheque/)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(noms => Promise.all(noms.filter(n => !n.startsWith("briquotheque")).map(n => caches.delete(n))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll())
    .then(pages => pages.forEach(p => p.navigate(p.url.replace("/etiquettes_figurines", "/briquotheque"))))));
