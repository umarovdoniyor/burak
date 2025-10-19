console.log('======>TRAIN MODE<======');
// =========================================================================
/**
 * TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
 */

// masalani yechimi ⬇️

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
