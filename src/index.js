module.exports = function toReadable (number) {

  let strNumber = String(number);
  let numLength = strNumber.length;
  let oneDigit;
  let twoDigit;
  let threeDigit;

  function digitCalc(i) {
    if (+strNumber[i] === 0) {
      oneDigit = '';
    } else if (+strNumber[i] === 1) {
      oneDigit = 'one';
    } else if (+strNumber[i] === 2) {
      oneDigit = 'two';
    } else if (+strNumber[i] === 3) {
      oneDigit = 'three';
    } else if (+strNumber[i] === 4) {
      oneDigit = 'four';
    } else if (+strNumber[i] === 5) {
      oneDigit = 'five';
     }else if (+strNumber[i] === 6) {
      oneDigit = 'six';
    } else if (+strNumber[i] === 7) {
      oneDigit = 'seven';
    } else if (+strNumber[i] === 8) {
      oneDigit = 'eight';
    } else if (+strNumber[i] === 9) {
      oneDigit = 'nine';
    }
  }

  function digitCalc2(j, i) {
    if (+strNumber[j] === 0) {
      twoDigit = '';
      digitCalc(i);
    } else if (+strNumber[j] === 1) {
        oneDigit = '';
        threeDigit = '';
        if (+strNumber[j+1] === 0) {
          twoDigit = 'ten';
        } else if (+strNumber[j+1] === 1) {
          twoDigit = 'eleven';
        } else if (+strNumber[j+1] === 2) {
          twoDigit = 'twelve';
        } else if (+strNumber[j+1] === 3) {
          twoDigit = 'thirteen';
        } else if (+strNumber[j+1] === 4) {
          twoDigit = 'fourteen';
        } else if (+strNumber[j+1] === 5) {
          twoDigit = 'fifteen';
        } else if (+strNumber[j+1] === 6) {
          twoDigit = 'sixteen';
        } else if (+strNumber[j+1] === 7) {
          twoDigit = 'seventeen';
        } else if (+strNumber[j+1] === 8) {
          twoDigit = 'eighteen';
        } else if (+strNumber[j+1] === 9) {
          twoDigit = 'nineteen';
        }
    } else if (+strNumber[j] === 2) {
      twoDigit = 'twenty ';
      digitCalc(i);
    } else if (+strNumber[j] === 3) {
      twoDigit = 'thirty ';
      digitCalc(i);
    } else if (+strNumber[j] === 4) {
      twoDigit = 'forty ';
      digitCalc(i);
    } else if (+strNumber[j] === 5) {
      twoDigit = 'fifty ';
      digitCalc(i);
    } else if (+strNumber[j] === 6) {
      twoDigit = 'sixty ';
      digitCalc(i);
    } else if (+strNumber[j] === 7) {
      twoDigit = 'seventy ';
      digitCalc(i);
    } else if (+strNumber[j] === 8) {
      twoDigit = 'eighty ';
      digitCalc(i);
    } else if (+strNumber[j] === 9) {
      twoDigit = 'ninety ';
      digitCalc(i);
    }
  }

  if (numLength === 1) {
    twoDigit = '';
    threeDigit ='';
    digitCalc(0);

  } else if (numLength === 2) {
     threeDigit ='';
     digitCalc2(0, 1);

  } else if (numLength === 3) {
    if (+strNumber[0] === 1) {
      digitCalc2(1, 2)
      threeDigit = 'one hundred ';
    } else if (+strNumber[0] === 2) {
      digitCalc2(1, 2)
      threeDigit = 'two hundred ';
    } else if (+strNumber[0] === 3) {
      digitCalc2(1, 2)
      threeDigit = 'three hundred ';
    } else if (+strNumber[0] === 4) {
      digitCalc2(1, 2)
      threeDigit = 'four hundred ';
    } else if (+strNumber[0] === 5) {
      digitCalc2(1, 2)
      threeDigit = 'five hundred ';
    } else if (+strNumber[0] === 6) {
      digitCalc2(1, 2)
      threeDigit = 'six hundred ';
    } else if (+strNumber[0] === 7) {
      digitCalc2(1, 2)
      threeDigit = 'seven hundred ';
    } else if (+strNumber[0] === 8) {
      digitCalc2(1, 2)
      threeDigit = 'eight hundred ';
    } else if (+strNumber[0] === 9) {
      digitCalc2(1, 2)
      threeDigit = 'nine hundred ';
    }
  }

  if (+strNumber[0] === 0 && numLength === 1) {
    return 'zero';

  } else {
    return `${threeDigit}${twoDigit}${oneDigit}`.trim();
  }
}
