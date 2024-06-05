// // - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
let a:string = 'hello';
let b:string = 'owu';
let c:string = 'com';
let d:string = 'ua';
let e:number = 1;
let f:number = 10;
let g:number = -999;
let i:number = 123;
const j:number = 3.14;
let k:number = 2.7;
let l:number = 16;
let m:boolean = true;
let n:boolean  = false;
console.log(a,b,c,d,e,f,g,i,j,k,l,m,n);
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName:string = 'Nadia';
let middleName:string = 'Antonivna';
let lastName:string = 'Prosyanyk';
let person:string = `${lastName} ${firstName} ${middleName}`;
console.log(person);
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
let a1:number = 100;
let b1:string = '100';
let c1:boolean = true;
console.log(typeof a1,typeof b1,typeof c1);
// // Додаткове для тих хто цікавився prompt`oм
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName1:string = prompt('what is your name?');
let middleName1:string= prompt('what is your patronymic?');
let age1:string= prompt('how old are you?');
console.log(firstName1,middleName1,age1);
