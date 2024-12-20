if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// Core assets
let coreAssets = [
  '/',
  './index.html',
  './eventos.html',
  './actividades.html',
  './equipo.html',
  './nosotros.html',
  './contacto.html',
  './equipo.html',
  './escalerillas.html',
  './assets/js/clpMain.js',
  './assets/js/clpGrids.js',
  './assets/js/clpData.js',
  './assets/js/clpActividades.js',
  './assets/css/clpReusable.css',
  './assets/css/clpNosotros.css',
  './assets/css/clpIndex.css',
  './assets/css/clpEvents.css',
  './assets/css/clpEquipo.css',
  './assets/css/clpActivity.css',
  './assets/images/lampa.png',
  './assets/images/red-grey-wave.png',
  './assets/images/red-wave-footer-195px.png',
  './assets/images/actividades/outdoor_yoga-bk.jpeg',
  './assets/images/actividades/paddeling_bk.png',
  './assets/images/actividades/tennis_2_bk.png',
  './assets/images/actividades/tournaments_bk.png',
  './assets/images/tour/bano.jpeg',
  './assets/images/tour/bano_2.jpeg',
  './assets/images/tour/flores.jpeg',
  './assets/images/tour/flores_2.jpeg',
  './assets/images/tour/macetero.jpeg',
  './assets/images/tour/picina.jpeg',
  './assets/images/tour/picina_2.jpeg',
  './assets/images/galleria/home/quicncho_1_bk.png',
  './assets/images/galleria/home/quicncho_2_bk.png',
  './assets/images/galleria/home/quicncho_3_bk.png',
  './assets/images/galleria/eventos/blackAndWhite/yoga_cover-bk.jpeg',
  './assets/images/galleria/eventos/color/yoga_2.jpeg',
  './assets/images/galleria/eventos/blackAndWhite/evento2b_bk.jpeg',
  './assets/images/galleria/eventos/color/evento2b.jpeg',
  './assets/images/galleria/eventos/blackAndWhite/Event3_bk.png',
  './assets/images/galleria/eventos/color/Event3.png',
  './assets/images/galleria/tenis/tenisLospaltos-bk.png',
  './assets/images/galleria/tenis/unDiaDeTenis-bk.png',
  './assets/images/galleria/tenis/unDiaDeTenis.png',
  './assets/images/galleria/tenis/juego-bk.jpg',
  './assets/images/galleria/tenis/juego.jpg',
  './assets/images/galleria/tenis/visitasCanchasTenis-bk.jpg',
  './assets/images/galleria/tenis/visitasCanchasTenis.jpg',
  './assets/images/galleria/tenis/canchita-bk.jpg',
  './assets/images/galleria/tenis/canchita.jpg',
  './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos-bk.jpg',
  './assets/images/galleria/tenis/club-Tenis-partido-entre-aigos.jpg',
  './assets/images/galleria/torneo/tenis-1_bk.png',
  './assets/images/galleria/tenis/tenis-bk.png',
  './assets/images/actividades/tennis_2_bk.png',
  './assets/images/galleria/padel/padelLosPaltos-bk.png',
  './assets/images/galleria/padel/padel-game-bk.jpeg',
  './assets/images/galleria/padel/padel-game.jpeg',
  './assets/images/galleria/padel/padelGame_bk.png',
  './assets/images/galleria/padel/padle-flyer-bk.png',
  './assets/images/galleria/padel/padle-flyer.png',
  './assets/images/galleria/padel/padelNocturnoDomingo-bk.jpeg',
  './assets/images/galleria/padel/padelNocturnoDomingo.jpeg',
  './assets/images/galleria/padel/americanoNocturno-bk.jpeg',
  './assets/images/galleria/padel/americanoNocturno.jpeg',
  './assets/images/galleria/padel/padelEntreAmigos-bk.png',
  './assets/images/galleria/padel/padel-3-bk.png',
  './assets/images/galleria/torneo/tournament_bk.jpeg',
  './assets/images/galleria/torneo/tournament.jpeg',
  './assets/images/galleria/torneo/categoria_C-bk.jpeg',
  './assets/images/galleria/torneo/categoria_C.jpeg',
  './assets/images/galleria/torneo/categoria_a-bk.jpeg',
  './assets/images/galleria/torneo/categoria_a.jpeg',
  './assets/images/galleria/torneo/categoria_a-paddeling-bk.jpeg',
  './assets/images/galleria/torneo/categoria_a-paddeling.jpeg',
  './assets/images/galleria/torneo/categoria_b_bk.jpeg',
  './assets/images/galleria/torneo/categoria_b.jpeg',
  './assets/images/galleria/torneo/fernandoGonzalez_bk.png',
  './assets/images/galleria/torneo/laRojaDeTenisJuvenil-bk.png',
  './assets/images/galleria/torneo/torneoPrimavera_bk.png',
  './assets/images/actividades/outdoor_yoga-bk.jpeg',
  './assets/images/team/Diego_Pina.png',
  './assets/images/team/Eduardo_Pina.png',
  './assets/images/team/Geraldine_Pina.png',
  './assets/images/team/headshot_bw.jpg',
  './assets/images/team/Julio_Pina.png',
];

// On install, cache core assets
self.addEventListener('install', function (event) {
  console.log('Service worker installed!');
  // Cache core assets
  event.waitUntil(
    caches.open('app').then(function (cache) {
      for (let asset of coreAssets) {
        cache.add(new Request(asset));
      }
      return cache;
    })
  );
});

// Listen for request events
self.addEventListener('fetch', function (event) {
  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  )
    return;

  // HTML files
  // Network-first
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          // Create a copy of the response and save it to the cache
          let copy = response.clone();
          event.waitUntil(
            caches.open('app').then(function (cache) {
              return cache.put(request, copy);
            })
          );

          // Return the response
          return response;
        })
        .catch(function (error) {
          // If there's no item in cache, respond with a fallback
          return caches.match(request).then(function (response) {
            return response || caches.match('/offline.html');
          });
        })
    );
  }

  // CSS & JavaScript
  // Offline-first
  if (
    request.headers.get('Accept').includes('text/css') ||
    request.headers.get('Accept').includes('text/javascript')
  ) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request).then(function (response) {
            // Return the response
            return response;
          })
        );
      })
    );
    return;
  }
  // Images
  // Offline-first
  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request).then(function (response) {
            // Save a copy of it in cache
            let copy = response.clone();
            event.waitUntil(
              caches.open('app').then(function (cache) {
                return cache.put(request, copy);
              })
            );

            // Return the response
            return response;
          })
        );
      })
    );
  }
});
