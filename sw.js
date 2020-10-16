const cacheTitle = 'bookbankcache';
const cacheVersion = 'v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  'index.html',
  '/views/mainpage.html',
  '/views/book.html',
  '/views/cancel.html',
  '/views/checkout.html',
  '/views/confirm.html',
  '/views/userinfo.html',
  '/styles/style.css',
  '/styles/book.css',
  '/styles/cancel.css',
  '/styles/checkout.css',
  '/styles/checkout1.css',
  '/styles/mainpage.css',
  '/styles/user.css',
  '/styles/menu.css',
  '/js/book.js',
  '/js/cancel.js',
  '/js/card.js',
  '/js/checkout.js',
  '/js/contact_me.js',
  '/js/login.js',
  '/js/popup.js',
  '/js/mainpage.js',
  '/js/index.js',
  '/img/aero.png',
  '/img/civil.png',
  '/img/book.png',
  '/img/comic.png',
  '/img/doctor.png',
  '/img/cyber.png',
  '/img/harrypotter.png',
  '/img/harrypotter1.png',
  '/img/harrypotter3.png',
  '/img/icon.png',
  '/img/icon1.png',
  '/img/icon2.jpg',
  '/img/img3.png',
  '/img/img5.png',
  '/img/img1.png',
  '/img/law.png',
  '/img/jk.jpg',
  '/img/martin.jpg',
  '/img/maya.jpg',
  '/img/ML.png',
  '/img/novel.png',
  '/img/search.png',
  '/img/novel1.png',
  '/img/toni.jpg',
  '/img/spider.png',
];
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
