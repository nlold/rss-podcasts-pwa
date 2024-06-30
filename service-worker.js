self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  // Cache static assets
  // event.waitUntil(
  //   caches.open("static-v1").then((cache) => {
  //     return cache.addAll([
  //       "/",
  //       "/manifest.json",
  //       "/icons/icon_x512.png",
  //       "/screenshots/desktop.png",
  //       "/screenshots/mobile.png",
  //     ]);
  //   })
  // );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  // event.respondWith(
  //   caches.match(event.request).then((response) => {
  //     return response || fetch(event.request);
  //   })
  // );
});
