console.log('======>TRAIN MODE<======');

/**
 TASK H: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"
 */

// masalani yechimi

function getPositive(arr: number[]): string {
  const positives: number[] = arr.filter((num) => num > 0);
  return positives.join('');
}

const example_data = [1, -4, 2];
const result = getPositive(example_data);
console.log('result: ', result);
