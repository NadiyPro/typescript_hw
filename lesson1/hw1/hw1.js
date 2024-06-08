// // - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let i = 123;
const j = 3.14;
let k = 2.7;
let l = 16;
let m = true;
let n = false;
console.log(a, b, c, d, e, f, g, i, j, k, l, m, n);
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Nadia';
let middleName = 'Antonivna';
let lastName = 'Prosyanyk';
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, typeof b1, typeof c1);
// // Додаткове для тих хто цікавився prompt`oм
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1 = prompt('what is your name?');
let middleName1 = prompt('what is your patronymic?');
let age1 = prompt('how old are you?');
console.log(firstName1, middleName1, age1);
