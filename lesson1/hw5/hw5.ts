// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.
interface Obj {
    id:number;
    name:string
    age:number
}

let objectItems:Obj[] = [
    {
        id:1,
        name:'Sergey',
        age: 34
    },
    {
        id:2,
        name: 'Nadia',
        age: 33
    },
    {
        id:3,
        name:'Nick',
        age: 35
    }
];
function iterator (objectValue:Obj[]) {
    let divBasic:HTMLElement = document.createElement('div');
    for (let i:number=0; i<objectValue.length;i++){
        for (const loop in objectValue[i]){
            let div:HTMLElement = document.createElement('div');
            div.innerHTML=`${loop}: ${objectValue[i][loop]}`;
            divBasic.appendChild(div);
        }
    }
    document.body.appendChild(divBasic);
}
iterator(objectItems);
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
type Sum = number

let sumArr:Sum[] = [1,2,10,13,5];
let sum = (valueSum:Sum[])=> {
    let sumResult:number = 0;
    for(let i:number=0;i<valueSum.length;i++){
        sumResult += valueSum[i];
    }
    return console.log (sumResult);
}
sum (sumArr);