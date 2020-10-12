if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../../sw.js', {scope: 'mainpage.html'}).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

self.addEventListener('push', event => {
  const options = {
    body: 'This notification was generated from a push!',
    icon: 'a1.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Go to the site',
        icon: 'a1.png'},
      {action: 'close', title: 'Close the notification',
        icon: 'a1.png'},
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('notificationclose', function(event) {
  var notification = event.notification;
  var primaryKey = notification.data.primaryKey;
  console.log('Closed notification: ' + primaryKey);
});
self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;
  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.youtube.com');
  }
});
/*
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(sub) {
    if (sub == undefined) {
      // ask user to register for Push
    } else {
      // You have subscription, update the database on your server
    }
  });
});
navigator.serviceWorker.getRegistration()
.then(function(reg) {
  reg.pushManager.subscribe({
    userVisibleOnly: true
  }).then(function(sub) {
    // send sub.toJSON() to server
  });
});
{
    "endpoint": "https://fcm.googleapis.com/fcm/send/f1LsxkKp...",
    "keys": {
        "p256dh": "BLc4xRzKlKORKWlbdgFaB1oEKgPpWC5cW8OCzVrOQRv-1n ...",
        "auth": "5I2Bu2oKdyy9CwL8QVF0NQ=="
    }
}
*/

/*
function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
    .then(function(reg){
      reg.showNotification('Subscribe to our news letter');
    });
  }
}
var options = {
  body: 'First notification!',
  actions: [
    {action: 'explore', title: 'Go to the site', icon: 'img/check.png'},
    {action: 'close', title: 'No thank you', icon: 'img/x.png'},
  ]
};
reg.showNotification('Hello world!', options);
*/
