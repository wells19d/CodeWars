console.log('Lesson: Double Char');

// describe('doubleChar', function () {
//   it('works for some examples', function () {
//     Test.assertEquals(doubleChar('abcd'), 'aabbccdd');
//     Test.assertEquals(doubleChar('Adidas'), 'AAddiiddaass');
//     Test.assertEquals(doubleChar('1337'), '11333377');
//     Test.assertEquals(doubleChar('illuminati'), 'iilllluummiinnaattii');
//     Test.assertEquals(doubleChar('123456'), '112233445566');
//     Test.assertEquals(doubleChar('%^&*('), '%%^^&&**((');
//   });
// });

//// Practice

// function doubleChar(str) {
//   //   console.log('str', str);
//   // first, lets cut each letter and put it into an array

//   let newArray = str.split('');

//   // what is our result?
//   //   console.log('?', newArray);

//   // now lets map over each letter and double it
//   let newArray2 = newArray?.map((letter) => letter + letter);

//   // what do we get?
//   //   console.log(newArray2);

//   // Now lets put it back into a string
//   let newString = newArray2.join('');
//   //   console.log(newString);

//   //  What is the result
//   return newString;
// }

function runTest(result, name) {
  if (result === name) {
    console.log(`Test ${name}: Passed`);
  } else if (result !== name) {
    console.log(`Test ${name}: Failed`);
  }
}

// lets check what we are passing first.
// doubleChar('abcd');
// doubleChar('Adidas');
// doubleChar('1337');
// doubleChar('illuminati');
// doubleChar('123456');
// doubleChar(`%^&*(`);

// //Now lets test if they pass or fail
// runTest(doubleChar('abcd'), 'aabbccdd');
// runTest(doubleChar('Adidas'), 'AAddiiddaass');
// runTest(doubleChar('1337'), '11333377');
// runTest(doubleChar('illuminati'), 'iilllluummiinnaattii');
// runTest(doubleChar('123456'), '112233445566');
// runTest(doubleChar('%^&*('), '%%^^&&**((');

// // lets get fancy
// // runTest(doubleChar('abcd' === 'aabbccdd'), 'abcd');
// // runTest(doubleChar('Adidas' === 'AAddiiddaass'), 'Adidas');
// // runTest(doubleChar('1337' === '11333377'), '1337');
// // runTest(doubleChar('illuminati' === 'iilllluummiinnaattii'), 'illuminati');
// // runTest(doubleChar('123456' === '112233445566'), '123456');
// // runTest(doubleChar(`%^&*(` === `%%^^&&**(('`), `%^&*(`);

// // comments removed
// function doubleChar(str) {
//   let newArray = str.split('');
//   let newArray2 = newArray?.map((letter) => letter + letter);
//   let newString = newArray2.join('');
//   return newString;
// }

// Let's make it smaller

// function doubleChar(str) {
//   let result = str
//     .split('')
//     .map((letter) => letter + letter)
//     .join('');
//   return result;
// }

// shorter still
// using a spread array, pass the str
// map over each, double the result and join it removing the spacers

// Solve Attempt 1:
const doubleChar = (str) => [...str].map((c) => c + c).join('');

runTest(doubleChar('abcd'), 'aabbccdd');
runTest(doubleChar('Adidas'), 'AAddiiddaass');
runTest(doubleChar('1337'), '11333377');
runTest(doubleChar('illuminati'), 'iilllluummiinnaattii');
runTest(doubleChar('123456'), '112233445566');
runTest(doubleChar('%^&*('), '%%^^&&**((');
