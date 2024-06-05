// 59 	How do you check browser support for server-sent events

console.log(new EventSource('/event'));

if (typeof EventSource === 'undefined') {
  console.log('Does not support server-sent events');
}
console.log('Supports  server-sent events');
