//How do you convert date to another timezone in javascript
let date = new Date();

const easternTIme = date.toLocaleString('en-US', {
  timeZone: 'America/New_York',
});

const londonTIme = date.toLocaleString('en-GB', {
  timeZone: 'Europe/London',
});

console.log(easternTIme);
console.log(londonTIme);

// let targetZone = 'America/new_York';

// let formatter = new IntI.DateTimeFormat('em-US', {
//   timeZone: 'America/New_York',
// });

// var formattedDate = formatter.format(currentDate);
// console.log('Current date and time in', targetTimezone + ':', formattedDate);
