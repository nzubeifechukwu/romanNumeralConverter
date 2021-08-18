/**
 * Convert the given number into a roman numeral.
 * All roman numeral answers should be provided in upper-case. 
 */
function convertToRoman(num) {
    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let romNum = "";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            return romanNumerals[i];
        }
    }
    if (num < 4) {
        for (let i = 1; i <= num; i++) {
            romNum = romNum + 'I';
        }
    } else if (num < 9) {
        romNum = 'V';
        for (let i = 6; i <= num; i++) {
            romNum = romNum + romanNumerals[0];
        }
    } else if (num < 40) {
        let tensPart = Math.floor(num / 10);
        let remainder = num % 10;
        for (let i = 0; i < tensPart; i++) {
            romNum = romNum + 'X';
        }
        return romNum + convertToRoman(remainder); 
    } else if (num < 50) {
        let remainder = num % 10;
        return 'XL' + convertToRoman(remainder);
    } else if (num < 90) {
        romNum = 'L';
        let tensPart = Math.floor(num / 10);
        let remainder = num % 10;
        for (let i = 5; i < tensPart; i++) {
            romNum = romNum + 'X';
        }
        return romNum + convertToRoman(remainder);
    } else if (num < 1000) {
        let hundredPart = Math.floor(num / 100) * 100;
        let remainder = num % 100;
        return convertToRoman(hundredPart) + convertToRoman(remainder);
    }
    return romNum;
}
   
console.log(convertToRoman(36));