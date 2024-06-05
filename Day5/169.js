// How do you make synchronous HTTP request

var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', false); // false makes it synchronous
xhr.send();

if (xhr.status === 200) {
  console.log(xhr.responseText);
} else {
  console.log('Error:', xhr.statusText);
}
