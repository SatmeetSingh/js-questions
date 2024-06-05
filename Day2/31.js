// 31 	What is a service worker

// type of webworker that work in seperate thread
// jinkis file - example
// service worker is service that works differently/seperate from the main thread and we can use it for doing different tasks that don't take load on our server

// uses
// Offline optimized experience  - like on low network , onfine case
// Sending Push Notification - like latest updates
// Background Sync - data backups can be achived

// - it will not block ui (work in asyncronous way)
// so localstorage or synchronous XHR cannot br used in a service worker
// service worker only runs over https- to reduce the

// lifecycle  -
// 1)Registration - service worker to browser
// it's a promise
// to check whether browser is supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    this.navigator.serviceWorker.register('/31-service-worker.js').then(
      function (registation) {
        // registration failed
        console.log(
          'ServiceWorker registration successful with scope',
          registation.scope
        );
      },
      function (err) {
        // registion failed
        console.log('Service Worker registration failed:', err);
      }
    );
  });
}
