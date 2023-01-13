module.exports = function toReadable (number) {

  let strNum = String(number);
  let strNumLength = strNum.length;
  let oneDigit;
  let twoDigit;
  let threeDigit;

  let arr = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['', ' ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

  function digitCalc(i) {
    if (+strNum[i] === 0) {
      oneDigit = arr[+strNum[i+1]];
      twoDigit = '';

    } else if (+strNum[i] === 1) {
        oneDigit = '';
        twoDigit = arr2[+strNum[i+1]];
        threeDigit = '';

    } else if ((+strNum[i] >= 2 && +strNum[i] <= 9)) {
      oneDigit = arr[+strNum[i+1]];
      twoDigit = arr3[+strNum[i]];
    }
  }

  if (strNumLength === 1) {
    twoDigit = '';
    threeDigit ='';
    oneDigit = arr[+strNum[0]];

  } else if (strNumLength === 2) {
     threeDigit ='';
     digitCalc(0);

  } else if (strNumLength === 3) {
    digitCalc(1)
    threeDigit = `${arr[+strNum[0]]} hundred `;
  }

  if (+strNum[0] === 0 && strNumLength === 1) {
    return 'zero';
  } else {
    return `${threeDigit}${twoDigit}${oneDigit}`.trim();
  }
}
