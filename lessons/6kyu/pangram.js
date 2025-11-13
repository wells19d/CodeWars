console.log("loaded");

function isPangram(string) {
  // first, lets grab the first letter, make it lowercase, then push it into an array.
  let newString = string.toLowerCase().match(/[a-z]/g);

  // now lets count the number of letters that appear in the array.
  let counts = newString.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  // Now lets count the total number of keys in the object
  // since we are already making sure we have only a-z
  // we should have 26 keys.

  let total = Object.keys(counts).length;

  if (total === 26) {
    return true;
  } else {
    return false;
  }

}

// Broken down further
function isPangram(string) {
  const obj = string.toLowerCase().match(/[a-z]/g);
  if (!obj) return false; 
  const uni = new Set(obj);
  return uni.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log();
