console.log("======>TRAIN MODE<======");
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
/**
 * TASK ZS:

Shunday function yozing, bu function parametrdagi array ichida
bir marotaba takrorlangan element'ni qaytarsin

MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;
 */
// solution

function singleNumber(arr: number[]): number | null {
  const counts: Record<number, number> = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const num in counts) {
    if (counts[num] === 1) {
      return Number(num);
    }
  }

  return null; // Agar bunday element topilmasa
}

// Example
const example_input = [4, 2, 1, 2, 1];
const result = singleNumber(example_input);
console.log("result: 👉 ", result);

// =========================================================================
/**
 * TASK-ZR:

Shunday function yozing, u 2 ta array parametr qabul qilsin.
Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
(ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

MASALAN:
areArraysEqual([1, 2, 3], [3, 1, 2]) // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
areArraysEqual([1, 2, 3], [4, 1, 2]) // false
 */
// solution
/*
function areArraysEqual(arr1: number[], arr2: number[]): boolean {
  for (const num of arr1) {
    if (!arr2.includes(num)) {
      return false;
    }
  }
  return true;
}
// Example
const example_input_1 = areArraysEqual([1, 2, 3], [3, 1, 2]);
const example_input_2 = areArraysEqual([1, 2, 3], [3, 1, 2, 1]);
const example_input_3 = areArraysEqual([1, 2, 3], [4, 1, 2]);

console.log("result: 👉 ", example_input_1, example_input_2, example_input_3);
*/
// =========================================================================
/**
 * TASK ZQ:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]
 */
// solution
/*
function findDuplicates(nums: number[]): number[] {
  const counts: Record<number, number> = {};
  const result: number[] = [];

  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const num of nums) {
    if (counts[num] > 1 && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example
console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
*/
// =========================================================================

/**
 *TASK-ZP:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}
 */
// solution
/*
function countNumberAndLetters(str: string): {
  number: number;
  letter: number;
} {
  let number = 0;
  let letter = 0;

  for (const char of str) {
    if (/[0-9]/.test(char)) {
      number++;
    } else if (/[a-zA-Z]/.test(char)) {
      letter++;
    }
  }

  return { number, letter };
}

console.log(countNumberAndLetters("string152%¥"));
*/
// =========================================================================

/**
 *TASK-ZO:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.

MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true
 */
// solution
/*
function areParenthesesBalanced(str: string): boolean {
  let count = 0;

  for (const char of str) {
    if (char === "(") count++;
    if (char === ")") count--;

    if (count < 0) return false;
  }

  return count === 0;
}

// Example
console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
*/
// =========================================================================
/**
 * TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda.
 */
// solution
/*
function reverseInteger(input_num: number): number {
  let reversed_num = 0;

  while (input_num > 0) {
    reversed_num = reversed_num * 10 + (input_num % 10);
    input_num = Math.floor(input_num / 10);
  }

  return reversed_num;
}

// Example
const example_input = 123456789;
const result = reverseInteger(example_input);
console.log("result: 👉 ", result);
*/
// =========================================================================
/**
 *TASK-ZL:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
 */
// solution
/*
function stringToKebab(input_str: string): string {
  return input_str.toLowerCase().trim().replace(/\s+/g, "-");
}

// Example
console.log(stringToKebab("I love Kebab"));
*/
// =========================================================================
/**
 * TASK-ZK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()
 */
// solution
/*
function printNumbers(): void {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log(count);
    if (count === 5) {
      clearInterval(intervalId);
    }
    count++;
  }, 1000);
}

// Example
printNumbers();
*/
// =========================================================================
/**
 * TASK ZJ:

Shunday function yozing, u berilgan array ichidagi
raqamlarni qiymatini hisoblab qaytarsin.

MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

Yuqoridagi misolda, array nested bo'lgan holdatda ham,
bizning function ularning yig'indisini hisoblab qaytarmoqda.
 */
// solution
/*
function reduceNestedArray(arr: any[]): number {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += reduceNestedArray(item);
    } else if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
}

// Example
const example_input = [1, [1, 2, [4]]];
const result = reduceNestedArray(example_input);
console.log("result: 👉 ", result);
*/
// =========================================================================

/**
 * TASK-ZH:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
 */
// solution

/*
function findDisappearedNumbers(arr: number[]): number[] {
  const maxNum = Math.max(...arr);
  const result: number[] = [];
  const numSet = new Set(arr);

  for (let i = 1; i < maxNum; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}

// Example
const example_input = [1, 3, 4, 7];
const result = findDisappearedNumbers(example_input);
console.log("result: 👉 ", result);
*/
// =========================================================================
/**
 * TASK-ZG:

Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'
 */
// solution
/*
function toSnakeCase(str: string): string {
  return str.split(" ").join("_").toLowerCase();
}

// Example
console.log(toSnakeCase("name should be a string"));
*/
// =========================================================================

/**
 *TASK-ZF:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
 */
// solution
/*
function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      if (word.length < 3) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Example
console.log(capitalizeWords("name should be a string"));
*/
// =========================================================================

/**
 *TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.
 */
// solution
/*
function changeNumberInArray(
  index: number,
  arr: number[],
  newValue: number
): number[] {
  const new_arr = [...arr]; // avoid mutating original
  new_arr[index] = newValue; // change the value
  return new_arr;
}

// Example
console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
*/
// =========================================================================

/**
 * TASK ZC

Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
 */
// solution
/*
function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

// Example
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
*/
// =========================================================================
/**
 *TASK-ZB:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin

MASALAN: randomBetween(30, 50) return 45
 */
// solution
/*
function randomBetween(a: number, b: number): number {
  let min = Math.ceil(Math.min(a, b));
  let max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = randomBetween(30, 50);

// Example
console.log("result: 👉", result);
*/
// =========================================================================
/**
 * TASK Z

Shunday function yozing. Bu function sonlardan iborat array
qabul qilsin. Function'ning vazifasi array tarkibidagi juft
sonlarni topib ularni yig'disini qaytarsin.

MASALAN:
sumEvens([1, 2, 3]); return 2;
sumEvens([1, 2, 3, 2]); return 4;

Yuqoridagi misolda, bizning funktsiya
berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.
 */
// solution
/*
function sumEvens(arr: number[]): number {
  let sum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

// Examples:
console.log("result: 👉", sumEvens([1, 2, 3]));
console.log("result: 👉", sumEvens([1, 2, 3, 2]));
*/
// =========================================================================
/**
 * TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.
 */
// solution
/*
function findIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (const num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example
const example_input1 = [1, 2, 3],
  example_input2 = [3, 2, 0],
  result = findIntersection(example_input1, example_input2);
console.log("result: 👉 ", result);
*/
// =========================================================================

/**
 * TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
 */

// solution
/*
function countOccurrences(input_obj: any, targetKey: string): number {
  let count = 0;

  if (input_obj && typeof input_obj === "object") {
    if (Array.isArray(input_obj)) {
      for (const el of input_obj) {
        count += countOccurrences(el, targetKey);
      }
    } else {
      for (const k of Object.keys(input_obj)) {
        if (k === targetKey) count++;
        count += countOccurrences(input_obj[k], targetKey);
      }
    }
  }

  return count;
}

// Example

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model"
  )
);
*/
// =========================================================================

/**
 *TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
 */
// solution

/*
function chunkArray(arr: number[], chunkSize: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

// Example
const example_input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = chunkArray(example_input, 3);
console.log("result: 👉 ", result);
*/
// =========================================================================
/**
 * TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.
 */
// solution
/*
function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

// Example
const example_input = "hello";
const result = countChars(example_input);
console.log("result: 👉 ", result);
*/
// =========================================================================

/**
 * TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.
 */

// solution
/*
function sumOdds(n: number): number {
  return Math.floor(n / 2);
}

const result = sumOdds(11);
console.log("result: 👉 ", result);
*/
// =========================================================================

/**
 * TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
 */

// solution
/*
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

const arr1 = [0, 3, 4, 31],
  arr2 = [4, 6, 30];

const result = mergeSortedArrays(arr1, arr2);
console.log("result: 👉 ", result);
*/
// =========================================================================
/**
 *TASK-S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
 */

// masalani yechimi
/*
function missingNumber(num_arr: number[]): number | null {
  if (num_arr.length === 0) return null;

  const min = Math.min(...num_arr);
  const max = Math.max(...num_arr);
  const expectedSum = ((max - min + 1) * (min + max)) / 2;
  const actualSum = num_arr.reduce((acc, num) => acc + num, 0);
  const missing = expectedSum - actualSum;

  return missing === 0 ? null : missing;
}

// Examples
console.log(missingNumber([3, 0, 1]));
*/
// =========================================================================
/**
 *TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
 */

// masalani yechimi
/*
function calculate(expression: string): number | null {
  const parts = expression.split(' ').filter(Boolean);
  if (parts.length !== 3) return null;

  const [aStr, operator, bStr] = parts;
  const a = Number(aStr);
  const b = Number(bStr);

  if (isNaN(a) || isNaN(b)) return null;

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : null;
    default:
      return null;
  }
}

// Examples
console.log(calculate('1 + 3'));
console.log(calculate('10 - 2'));
console.log(calculate('5 * 6'));
console.log(calculate('8 / 2'));
*/
// =========================================================================
/**
 *TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.
 */
// masalani yechimi

/*
function hasProperty(obj: Record<string, any>, key: string): boolean {
  for (const prop in obj) {
    if (prop === key) {
      return true;
    }
  }
  return false;
}
*/
// Examples
//console.log(hasProperty({ name: 'BMW', model: 'M3' }, 'model')); // ➜ true
//console.log(hasProperty({ name: 'BMW', model: 'M3' }, 'year')); // ➜ false

// =========================================================================
/**
 * TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */
// masalani yechimi
/*
function objectToArray(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj);
}

// Example
const example_input = { a: 10, b: 20 };
const result = objectToArray(example_input);
console.log('result: 👉 ', result);
*/
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
