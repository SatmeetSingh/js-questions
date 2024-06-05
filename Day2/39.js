// 39 	What are the options in a cookie

// Strict
// Lax
// None

// Strict causes the browser to only send the cookie in response to requests originating from the cookie's origin site. This should be used when you have cookies relating to functionality that will always be behind an initial navigation, such as authentication or storing shopping cart information.
// Cookies that are used for sensitive information should also have a short lifetime.

// Lax is similar, except the browser also sends the cookie when the user navigates to the cookie's origin site (even if the user is coming from a different site). This is useful for cookies affecting the display of a site — for example you might have partner product information along with an affiliate link on your website. When that link is followed to the partner website, they might want to set a cookie stating that the affiliate link was followed, which displays a reward banner and provides a discount if the product is purchased.

// None specifies that cookies are sent on both originating and cross-site requests. This is useful if you want to send cookies along with requests made from third-party content embedded in other sites, for example, ad-tech or analytics providers. Note that if SameSite=None is set then the Secure attribute must also be set — SameSite=None requires a secure context.
