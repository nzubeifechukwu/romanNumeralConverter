/**
 * Convert the given number into a Roman numeral. Number is less than 4000
 * All Roman numeral answers should be provided in upper-case. 
 */
function convertToRoman(num) {
    // romanNumerals is an array of special Roman numerals. numbers is an array of their equivalent Arabic numerals
    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let romNum = ""; // empty string to hold Roman numerals not in romanNumerals array

    // When num is in numbers array above
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            return romanNumerals[i];
        }
    }
    // When num is less than 4 but not in numbers array
    if (num < 4) {
        for (let i = 1; i <= num; i++) {
            romNum = romNum + 'I';
        }
    }
    // When num is between 4 and 9 but not in numbers array 
    else if (num < 9) {
        romNum = 'V';
        for (let i = 6; i <= num; i++) {
            romNum = romNum + 'I';
        }
    }
    // When num is between 9 and 40 but not in numbers array 
    else if (num < 40) {
        let tensPart = Math.floor(num / 10);
        let remainder = num % 10;
        for (let i = 0; i < tensPart; i++) {
            romNum = romNum + 'X';
        }
        romNum = romNum + convertToRoman(remainder); 
    }
    // When num is between 40 and 50 but not in numbers array
    else if (num < 50) {
        let remainder = num % 10;
        romNum = 'XL' + convertToRoman(remainder);
    }
    // When num is between 50 and 90 but not in numbers array
    else if (num < 90) {
        romNum = 'L';
        let tensPart = Math.floor(num / 10);
        let remainder = num % 10;
        for (let i = 5; i < tensPart; i++) {
            romNum = romNum + 'X';
        }
        romNum = romNum + convertToRoman(remainder);
    }
    // When num is between 90 and 100 but not in numbers array
    else if (num < 100) {
        let remainder = num % 10;
        romNum = 'XC' + convertToRoman(remainder);
    }
    // When num is between 100 and 400 but not in numbers array
    else if (num < 400) {
        let hundredPart = Math.floor(num / 100);
        let remainder = num % 100;
        for (let i = 0; i < hundredPart; i++) {
            romNum = romNum + 'C';
        }
        romNum = romNum + convertToRoman(remainder);
    }
    // When num is between 400 and 500 but not in numbers array
    else if (num < 500) {
        let remainder = num % 100;
        romNum = 'CD' + convertToRoman(remainder);
    }
    // When num is between 500 and 900 but not in numbers array
    else if (num < 900) {
        romNum = 'D';
        let hundredPart = Math.floor(num / 100);
        let remainder = num % 100;
        for (let i = 5; i < hundredPart; i++) {
            romNum = romNum + 'C';
        }
        romNum = romNum + convertToRoman(remainder);
    }
    // When num is between 900 and 1000 but not in numbers array
    else if (num < 1000) {
        let remainder = num % 100;
        romNum = 'CM' + convertToRoman(remainder);
    }
    // When num is between 1000 and 4000 but not in numbers array
    else {
        let thousandPart = Math.floor(num / 1000);
        let remainder = num % 1000;
        for (let i = 0; i < thousandPart; i++) {
            romNum = romNum + 'M';
        }
        romNum = romNum + convertToRoman(remainder);
    }
    return romNum;
}

console.log(convertToRoman(7));