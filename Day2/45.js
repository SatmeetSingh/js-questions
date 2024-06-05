//   45 	What is a storage event and its event handler
// The storage event in JavaScript is triggered when changes are made to the localStorage or sessionStorage for a particular domain.

// Add an event listener for the storage event
window.addEventListener('storage', function (event) {
  console.log('Storage event detected:');
  console.log('Key:', event.key);
  console.log('Old Value:', event.oldValue);
  console.log('New Value:', event.newValue);
  console.log('URL:', event.url);
  console.log('Storage Area:', event.storageArea);

  if (event.key === 'theme') {
    document.body.className = event.newValue;
  }
});

function changeTheme(theme) {
  localStorage.setItem('theme', theme);
  document.body.className = theme;
}

changeTheme('dark-mode');
// changeTheme('light-mode');
