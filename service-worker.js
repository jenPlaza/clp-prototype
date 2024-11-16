if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
};

// Core assets
let coreAssets = [
  '/',
  'index.html',
  'acontecimientos.html',
  'actividades.html',
  'equipo.html',
  'nosotros.html',
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
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin')
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
  if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
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
  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)){
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



