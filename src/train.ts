console.log('======>TRAIN MODE<======');
// =========================================================================
/**
 * TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */
// masalani yechimi

function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj);
}

// Example
const example_input = { a: 10, b: 20 };
const result = objectToArray(example_input);
console.log('result: 👉 ', result);

// =========================================================================
/**
 * TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
 */

// masalani yechimi
/*
function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;

  for (const i of arr) {
    if (typeof i === 'number') {
      sum += i;
    }
  }

  return sum;
}

// Example
const example_input = [10, '10', { son: 10 }, true, 35];
const result = calculateSumOfNumbers(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================
/**
 * TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
 */

// masalani yechimi
/*
function palindromeCheck(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Examples
const example_input = 'dad'; // son
const result = palindromeCheck(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================
/**
 * TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
 */

// masalani yechimi
/*
function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
  return arr.map((num) => ({
    number: num,
    square: num * num,
  }));
}

// Example

const example_input = [1, 2, 3];
const result = getSquareNumbers(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================

/**
 *TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
 */

// masalani yechimi
/*
function reverseSentence(sentence: string): string {
  const words = sentence.split(' ');
  const reversedWords = words.map((word) => word.split('').reverse().join(''));
  const result = reversedWords.join(' ');
  return result;
}

// Example
const example_input = 'we like coding';
const result = reverseSentence(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================

/**
 * TASK K: 
Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
 */

// masalani yechimi
/*
function countVowels(str: string): number {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example
const example_input = 'string';
const result = countVowels(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================
/**
 * TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
 */

// masalani yechimi
/*
function findLongestWord(sentence: string): string {
  const words_arr = sentence.split(' ');
  let longest = '';

  for (const curr of words_arr) {
    if (curr.length > longest.length) {
      longest = curr;
    }
  }

  return longest;
}

// Example
const example_input = 'I came from Uzbekistan!';
const result = findLongestWord(example_input);
console.log('result: 👉 ', result);
*/
// =========================================================================
/**
 * TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
 */

// masalani yechimi ⬇️
/*
function majorityElement(arr: number[]): number | null {
  if (arr.length === 0) return null;

  const counts: { [key: number]: number } = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let majority_el = arr[0];
  let maxCount = 0;

  for (const num in counts) {
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      majority_el = Number(num);
    }
  }

  return majority_el;
}

// Example
const example_input = [1, 2, 3, 4, 5, 4, 3, 4];
const result = majorityElement(example_input);
console.log('result: ', result);
*/
// =========================================================================
/**
 * TASK H2: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

MASALAN: getDigits("m14i1t") return qiladi "141"
 */

// masalani yechimi
/*
function getDigits(str: string): string {
  let result = '';
  for (let char of str) {
    if (!isNaN(Number(char)) && char !== ' ') {
      result += char;
    }
  }
  return result;
}

// Example:
const example_data = 'm14i1t';
const result = getDigits(example_data);
console.log('result: ', result);
*/
// =========================================================================
/**
 TASK H: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"
 */

// masalani yechimi
/*
function getPositive(arr: number[]): string {
  const positives: number[] = arr.filter((num) => num > 0);
  return positives.join('');
}

const example_data = [1, -4, 2];
const result = getPositive(example_data);
console.log('result: ', result);
*/
