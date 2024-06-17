// Задание 7.7.5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные числа, отсортированные в порядке возрастания.

const unUniqueArr = [1, 2, 3.2, 10.5, 3, 4, 2, 5, 3, 7, 2, 3.2, 3.7, 10, 5];

function uniqueArray(mass){
  const uniqueSet = new Set(mass); // [1, 2, 3, 4, 5]
  const uniqueArr = Array.from(uniqueSet);
  return uniqueArr;
}

function compareNumbers(a, b) {  //Нужна для сортировки чисел. Просто .sort() сортирует элементы, преобразовывая их в строки.
  return a - b;
}

const newMass = uniqueArray(unUniqueArr).sort(compareNumbers) ;
console.log(newMass);
