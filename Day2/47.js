//   47 	How do you check web storage browser support

if (typeof Storage !== 'undefined') {
  // Web storage is supported
  console.log('Web storage is supported.');
} else {
  // Web storage is not supported
  console.log('Web storage is not supported.');
}
console.log(typeof Storage);

// checking web storage browser support
function isWebStorageSupported() {
  function isStorageSupported(storageType) {
    try {
      const data = 'test';
      window[storageType].setItem(data, 'this is test case');
      const getData = window[storageType].getItem(data);
      return [true, getData];
    } catch (e) {
      return false;
    }
  }
  return {
    localStorage: isStorageSupported('localStorage'),
    sessionStorage: isStorageSupported('sessionStorage'),
  };
}

const storageSupperted = isWebStorageSupported();
console.log(storageSupperted.localStorage);

// individual
function isLocalStorageSupported() {
  try {
    const data = 'test';
    localStorage.setItem(data, 'this is test case ');
    const getData = localStorage.getItem(data);
    console.log(getData);
    return true;
  } catch (e) {
    return false;
  }
}

if (!isLocalStorageSupported()) {
  console.log('Session Storage not supported');
} else {
  console.log('Session Storage supported');
}
