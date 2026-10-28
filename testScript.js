import * as KT from "./KataToolKit.js";

const defPadding = 70;
const inputPadding = 60;
const headerPadding = 120;
const startHeadPadding = 25;

// ------------------------------------------------------------------------------------------------------------------------------------
console.log("");
console.log("-----| Random Functions |".padEnd(headerPadding, "-"));

console.log("KT.getRandomInt(min, max)".padEnd(defPadding) + " | " + "KT.getRandomInt(1, 100)".padStart(inputPadding) + " : " + KT.getRandomInt(1, 100));
console.log("KT.getRandomIntInclusive(min, max)".padEnd(defPadding) + " | " + "KT.getRandomIntInclusive(1, 100)".padStart(inputPadding) + " : " + KT.getRandomIntInclusive(1, 100));
console.log("KT.getRandomIntInclusive(min, max)".padEnd(defPadding) + " | " + "KT.getRandomIntInclusive(1, 2)".padStart(inputPadding) + " : " + KT.getRandomIntInclusive(1, 2));
console.log("KT.getRandomIntSecure(type = 'UI32', amt = 1)".padEnd(defPadding) + " | " + "KT.getRandomIntSecure()".padStart(inputPadding) + " : " + KT.getRandomIntSecure());
console.log("KT.getRandomFloat(min, max)".padEnd(defPadding) + " | " + "KT.getRandomFloat(1, 100)".padStart(inputPadding) + " : " + KT.getRandomFloat(1, 100));
console.log("KT.getCoinFlip()".padEnd(defPadding) + " | " + "KT.getCoinFlip()".padStart(inputPadding) + " : " + KT.getCoinFlip());
console.log("KT.getRandomDirection()".padEnd(defPadding) + " | " + "KT.getRandomDirection()".padStart(inputPadding) + " : " + KT.getRandomDirection());
console.log("KT.fYScramble(arr)".padEnd(defPadding) + " | " + "KT.fYScramble([1, 2, 3, 4, 5])".padStart(inputPadding) + " : " + KT.fYScramble([1, 2, 3, 4, 5]));

console.log("".padEnd(headerPadding, "-"));
// ------------------------------------------------------------------------------------------------------------------------------------
console.log("");
console.log("-----| Math Functions |".padEnd(headerPadding, "-"));

console.log("KT.forceMod(number, mod)".padEnd(defPadding) + " | " + "KT.forceMod(17, 3)".padStart(inputPadding) + " : " + KT.forceMod(17, 3));
console.log("KT.clamp(number, min, max)".padEnd(defPadding) + " | " + "KT.clamp(100, 10, 50)".padStart(inputPadding) + " : " + KT.clamp(100, 10, 50));
console.log("KT.clamp(number, min, max)".padEnd(defPadding) + " | " + "KT.clamp(1, 10, 50)".padStart(inputPadding) + " : " + KT.clamp(1, 10, 50));
console.log("KT.absolute(number)".padEnd(defPadding) + " | " + "KT.absolute(123.4567)".padStart(inputPadding) + " : " + KT.absolute(123.4567));
console.log("KT.getDigit(number, digit)".padEnd(defPadding) + " | " + "KT.getDigit(1234567, 0)".padStart(inputPadding) + " : " + KT.getDigit(1234567, 0));
console.log("KT.getDigit(number, digit)".padEnd(defPadding) + " | " + "KT.getDigit(1234567, 3)".padStart(inputPadding) + " : " + KT.getDigit(1234567, 3));
console.log("KT.dotProduct(arrayOne, arrayTwo, strictSize = true)".padEnd(defPadding) + " | " + "KT.dotProduct([1,2], [32,52])".padStart(inputPadding) + " : " + KT.dotProduct([1, 2], [32, 52]));
const transposed = KT.matrixTranspose([[1, 2], [3, 4]]);
console.log("KT.matrixTranspose(matrix)".padEnd(defPadding) + " | " + "KT.matrixTranspose([[1,2],[3,4]])".padStart(inputPadding) + " : [[" + transposed[0] + "],[" + transposed[1] + "]]");
console.log("KT.matrixMultiplyRowVector(matrixOne, matrixTwo, strictSize = true)".padEnd(defPadding) + " | " + "KT.matrixMultiplyRowVector([[1, 2, 3]], [[1],[2],[3]])".padStart(inputPadding) + " : " + KT.matrixMultiplyRowVector([[1, 2, 3]], [[1], [2], [3]]));
console.log("KT.matrixMultiplyColumnVector(matrixOne, matrixTwo, strictSize = true)".padEnd(defPadding) + " | " + "KT.matrixMultiplyColumnVector([[1], [2], [3]], [[1, 2, 3]])".padStart(inputPadding) + " : " + KT.matrixMultiplyColumnVector([[1], [2], [3]], [[1, 2, 3]]));
console.log("KT.scalarMultiply(matrix, scalar)".padEnd(defPadding) + " | " + "KT.scalarMultiply([[1, 2, 3]], 2)".padStart(inputPadding) + " : " + KT.scalarMultiply([[1, 2, 3]], 2));
console.log("KT.numToLetter(num)".padEnd(defPadding) + " | " + "KT.numToLetter(10)".padStart(inputPadding) + " : " + KT.numToLetter(10));
console.log("KT.numToLetter(num)".padEnd(defPadding) + " | " + "KT.numToLetter(15)".padStart(inputPadding) + " : " + KT.numToLetter(15));
console.log("KT.toDecimal(inputNum, inputBase)".padEnd(defPadding) + " | " + "KT.toDecimal(0xa, 16)".padStart(inputPadding) + " : " + KT.toDecimal(0xa, 16));
console.log("KT.toDecimal(inputNum, inputBase)".padEnd(defPadding) + " | " + "KT.toDecimal(1100, 2)".padStart(inputPadding) + " : " + KT.toDecimal(1100, 2));
console.log("KT.convertTo(inputNum, outputBase, inputBase = 10)".padEnd(defPadding) + " | " + "KT.convertTo(128, 2)".padStart(inputPadding) + " : " + KT.convertTo(128, 2));
console.log("KT.convertTo(inputNum, outputBase, inputBase = 10)".padEnd(defPadding) + " | " + "KT.convertTo(256, 16)".padStart(inputPadding) + " : " + KT.convertTo(256, 16));
console.log("KT.convertTo(inputNum, outputBase, inputBase = 10)".padEnd(defPadding) + " | " + "KT.convertTo(10101010, 16, 2)".padStart(inputPadding) + " : " + KT.convertTo(10101010, 16, 2));

console.log("".padEnd(headerPadding, "-"));
// ------------------------------------------------------------------------------------------------------------------------------------
console.log("");
// console.log("-----| Testing |".padEnd(headerPadding, "-"));


// console.log("".padEnd(headerPadding, "-"));
// // ------------------------------------------------------------------------------------------------------------------------------------
// console.log("");