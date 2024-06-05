// 78 	How do you detect caps lock key turned on or not

// window.addEventListener('keyup', (e) => {
//   return e.getModifierState('CapsLock')
//     ? console.log('caps lock is on')
//     : console.log('caps lock is off');
// });

function Caps(e) {
  if (e.code === 'CapsLock') {
    let val = e.getModifierState('CapsLock');
    if (val) return console.log('CapsLock Button is turned on');
    return console.log('CapsLock Button is turned off');
  }
}

window.addEventListener('keydown', Caps);
window.addEventListener('keyup', Caps);
