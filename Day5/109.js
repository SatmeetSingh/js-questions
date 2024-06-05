// Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

form.addEventListener(
  'input',
  function (event) {
    console.log(event.target);
  },
  false
);
