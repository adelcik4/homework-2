// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// function calculateFinalPrice(num1, num2, num3) {
//   const sale = (num1 * num2) / 100;
//   const salePrice = num1 - sale;
//   const tax = salePrice * num3;
//   const finalPrice = salePrice + tax;
//   console.log(finalPrice);
//   return;
// }

// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// function checkAccess(name, password) {
//   if (name === "admin" && password === "12345") {
//     return "Доступ разрешен";
//   } else {
//     return "Доступ запрещен";
//   }
// }

// console.log(checkAccess("admin", "12345"));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// function getTimeOfDay(num) {
//   if (num >= 0 && num <= 5) {
//     return "Ночь";
//   } else if (num >= 6 && num <= 11) {
//     return "Утро";
//   } else if (num >= 12 && num <= 17) {
//     return "День";
//   } else if (num >= 18 && num <= 23) {
//     return "Вечер";
//   } else {
//     return `"Некорректное время"`;
//   }
// }

// console.log(getTimeOfDay(2));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(19, 19)); // 2
