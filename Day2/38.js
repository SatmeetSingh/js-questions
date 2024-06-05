// 38 	Why do you need a Cookie

// tracking / analysis
// cookies help us track user behavior and interactions on a website to gather analysis data
//eg google analytics uses cookies to collect data about how users interact with site, which helps website owner understart user behaviour
// for advertisment - uses cookies to display targated ads based on your browsing stylr

//Security
// CSRF - give security measures against Cross-Site Request Forgery attacks - Secure tokens stored in cookies that verify the legitimacy of requests sent to a server.

// Third-Party Services:

// Cookies allow third-party services to function correctly across different sites.
// Example: Social media sharing buttons that track usage across multiple websites to provide a cohesive experience.

// session Management
// Cookies store session IDs to keep users logged in as they navigate through different pages of a website.
// Example: When you log into an online banking site, a session cookie keeps you logged in as you move between different sections of the site.

// Setting a session cookie on login
function setSessionCookie(sessionId) {
  document.cookie = `sessionId=${sessionId}; path=/; Secure; HttpOnly`;
}

// Retrieving the session cookie
function getSessionCookie() {
  const name = 'sessionId=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
