// What are the ways to execute javascript after page load -

//DOMContentLoaded Event - The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
});

// Load Event
// The load event fires when the entire page has fully loaded, including all dependent resources such as stylesheets and images.

window.addEventListener('load', function () {
  console.log('Page fully loaded');
});

// defer - tells the browser to execute script after html code has been parsed
// <script src="your-script.js" defer></script>

// tells browser to execute code asyncronouslly as soonas its available without blocking the rest of the page.
// <script src="your-script.js" async></script>;
