// // - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
var a = 'hello';
var b = 'owu';
var c = 'com';
var d = 'ua';
var e = 1;
var f = 10;
var g = -999;
var i = 123;
var j = 3.14;
var k = 2.7;
var l = 16;
var m = true;
var n = false;
console.log(a, b, c, d, e, f, g, i, j, k, l, m, n);
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Nadia';
var middleName = 'Antonivna';
var lastName = 'Prosyanyk';
var person = "".concat(lastName, " ").concat(firstName, " ").concat(middleName);
console.log(person);
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
var a1 = 100;
var b1 = '100';
var c1 = true;
console.log(typeof a1, typeof b1, typeof c1);
// // Додаткове для тих хто цікавився prompt`oм
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var firstName1 = prompt('what is your name?');
var middleName1 = prompt('what is your patronymic?');
var age1 = prompt('how old are you?');
console.log(firstName1, middleName1, age1);
