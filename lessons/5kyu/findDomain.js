  console.log('hello world');

/* function domainName(url){
  console.log('url:',url)
let parse1 = url.replace('http://', "")
let parse2 = parse1.replace('https://', "")
let parse3 = parse2.replace('www.', "")
// console.log('?:', JSON.stringify(parse3))
let index = parse3.indexOf(".");
// console.log(index)
let final = parse3.slice(0, index)
console.log('final', final)
} 

 Cleaned up

function domainName(url){
let parsed = url.replace('http://', '').replace('https://', '').replace('www.', '');

or 

let parsed = url.replace(/^(https?:\/\/)?(www\.)?/, '');

let index = parsed.indexOf(".");
// console.log(index)
let final = parsed.slice(0, index)
console.log('final', final)
}




function domainName(url) {
  const parsed = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  const index = parsed.indexOf('.');
  const final = parsed.slice(0, index);
  return final;
}

*/

// broken down further

function domainName(url) {
  return url
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .split('.')[0];
}

domainName("http://google.com") // should return google
domainName("http://google.co.jp") // should return google
domainName("www.xakep.ru") // should return xakep
domainName("https://youtube.com") // should return youtube

/*
(domainName("http://google.com"), "google")
(domainName("http://google.co.jp"), "google")
(domainName("www.xakep.ru"), "xakep")
(domainName("https://youtube.com"), "youtube")
*/