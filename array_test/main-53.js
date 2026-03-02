// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// function getUserAverageAge(array) {
//   if (array.length === 0) {
//     return "в массиве нет пользователей";
//   }
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i].age;
//   }
//   const sumAges = sum / array.length;
//   return sumAges;
// }

// console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// function getAllAdmins(array) {
//   let allAdmins = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].isAdmin === true) {
//       allAdmins.push(array[i].name);
//     }
//   }
//   return allAdmins;
// }

// console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(array, n) {
  let envyArray = [];
  if (n == 0) {
    return envyArray;
  } else if (n == undefined) {
    envyArray.push(array.at(0));
    return envyArray;
  } else if (n > array.length) {
    console.error("n элементы превышают кол-во элементов в массиве");
    return;
  } else {
    for (let i = 0; i < n; i++) {
      envyArray.push(array[i]);
    }
    return envyArray;
  }
}

console.log(first(users, 99));
