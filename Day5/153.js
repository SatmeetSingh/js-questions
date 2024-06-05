// Is it recommended to use eval

// Avoid using eval() for large or complex code: eval() is slow and can be difficult to debug, so it's generally recommended to avoid using it for large or complex code

// Terribly slow: the JavaScript language is designed to use the full gamut of JavaScript types (numbers, functions, objects, etc)… Not just strings! Using eval is orders of magnitude slower than normal JavaScript code.

// Malicious code: invoking eval can crash a computer. For example: if you use eval server-side and a mischievous user decides to use an infinite loop as their username.
