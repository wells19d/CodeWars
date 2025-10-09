function getCount (str){
console.log('count:', (str.match(/[aeiou]/gi) || [].length)
return (str.match(/[aeiou]/gi) || []).length;
}

getCount('abracadabra') // 5
getCount('pneumonoultramicroscopicsilicovolcanoconiosis') //20