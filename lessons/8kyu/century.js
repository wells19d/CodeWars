console.log('Lesson: Century.js');

//The first century spans from the year 1 up to and including
// the year 100, the second century - from the year 101 up to
// and including the year 200, etc.

// Given a year, return the century it is in.

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//lets just take the year and divide it, then round it up if it's more than .01

function century(year) {
  return Math.ceil(year / 100);
}

century(1705);
century(1900);
century(1601);
century(2000);
century(2742);
century('1985');
