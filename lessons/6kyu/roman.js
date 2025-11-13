function solution(number) {
  let th = Math.floor(number / 1000);
  let hnd = Math.floor((number % 1000) / 100);
  let tens = Math.floor((number % 100) / 10);
  let ones = number % 10;

  const thR = ['', 'M', 'MM', 'MMM'];
  const hndR = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tensR = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const onesR = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  console.log(thR[th] + hndR[hnd] + tensR[tens] + onesR[ones]);
  return thR[th] + hndR[hnd] + tensR[tens] + onesR[ones];
}

function solution(number) {
  return (
    ['', 'M', 'MM', 'MMM'][Math.floor(number / 1000)] +
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'][
      Math.floor((number % 1000) / 100)
    ] +
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][
      Math.floor((number % 100) / 10)
    ] +
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][number % 10]
  );
}

solution(1); // 'I', '1 should return "I"');
solution(2); // 'II', '2 should return "II"');
solution(3); // 'III', '3 should return "III"');
solution(4); // 'IV', '4 should return "IV"');
solution(5); // 'V', '5 should return "V"');
solution(6); // 'VI', '6 should return "VI"');
solution(7); // 'VII', '7 should return "VII"');
solution(8); // 'VIII', '8 should return "VIII"');
solution(9); // 'IX', '9 should return "IX"');
solution(10); // 'X', '10 should return "X"');
solution(11); // 'XI', '11 should return "XI"');
solution(19); // 'XIX', '19 should return "XIX"');
solution(22); // 'XXII', '22 should return "XXII"');
solution(15); // 'XV', '15 should return "XV"');
solution(1000); // 'M', '1000 should, "M"');
solution(1001); // 'MI', '1001 should, "MI"');
solution(1990); // 'MCMXC', '1990 should, "MCMXC"');
solution(2007); // 'MMVII', '2007 should, "MMVII"');
solution(2008); // 'MMVIII', '2008 should, "MMVIII"');
