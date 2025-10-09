/*  function filter_list(l) {
  // Return a new array with the strings filtered out
 // Return only positive numbers
let newArray = []

for (let i = 0; i < l.length; i++) {
// console.log(l[i]);
let char = l[i];
// console.log('char',typeof char)

if (typeof char === 'number' && char >=0){
console.log('true');
 newArray.push(char)
}


}
console.log('New Array:', newArray)
}
*/

function filter_list(l) {
console.log('filter', l.filter(item => typeof item === 'number' && item >= 0))
  return l.filter(item => typeof item === 'number' && item >= 0);
}

filter_list([1,2,'a','b'])// == [1,2]
filter_list([1,'a','b',0,15])// == [1,0,15]
filter_list([1,2,'aasf','1','123',123])// == [1,2,123]
filter_list([1,-1,2,-2,'3','4',5,-6]) // == [1,2,5]
