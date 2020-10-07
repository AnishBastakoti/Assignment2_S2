const cacheTitle = 'bookbankcache';
const cacheVersion = 'v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  'build/views/index.html',
  'build/views/views/mainpage.html',
  'build/views/views/book.html',
  'build/views/views/cancel.html',
  'build/views/views/checkout.html',
  'build/views/views/confirm.html',
  'build/views/views/userinfo.html',
  'build/styles/style.css',
  'build/styles/book.css',
  'build/styles/cancel.css',
  'build/styles/checkout.css',
  'build/styles/checkout1.css',
  'build/styles/mainpage.css',
  'build/styles/menu.css',
  'build/styles/user.css',
  'build/js/book.js',
  'build/js/cancel.js',
  'build/js/card.js',
  'build/js/checkout.js',
  'build/js/contact_me.js',
  'build/js/login.js',
  'build/js/popup.js',
  'build/js/mainpage.js',
  'build/js/index.js',
  'build/img/aero.png',
  'build/img/civil.png',
  'build/img/book.png',
  'build/img/comic.png',
  'build/img/cyber.png',
  'build/img/doctor.png',
  'build/img/harrypotter.png',
  'build/img/harrypotter1.png',
  'build/img/harrypotter3.png',
  'build/img/icon.png',
  'build/img/icon1.png',
  'build/img/icon2.jpg',
  'build/img/img3.png',
  'build/img/img5.png',
  'build/img/img1.png',
  'build/img/jk.jpg',
  'build/img/law.png',
  'build/img/martin.jpg',
  'build/img/maya.jpg',
  'build/img/ML.png',
  'build/img/novel.png',
  'build/img/novel1.png',
  'build/img/search.png',
  'build/img/toni.jpg',
  'build/img/spider.png',
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

self.addEventListener('push', event => {
  const options = {
    body: 'This notification was generated from a push!',
    icon: 'images/notification-flat.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Go to the site',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close the notification',
        icon: 'images/xmark.png'},
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
