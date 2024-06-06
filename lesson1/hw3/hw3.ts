// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
class TextT {
    constructor(public text:string) {
    }
    textFunction ():string{
            let div:HTMLElement = document.createElement('div');
            div.textContent=this.text;
            document.body.appendChild(div)
            return;
    }
}

let text:TextT[] = [
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.')
];
text.forEach(value=> {value.textFunction()});
// text.forEach(value=> {
//     let blocks:TextT=new TextT (value.text)
//     blocks.textFunction()
// });

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
class TextIndex {
    constructor(public textIndex:string) {
    }
    textIndexFunction():string{
        let divIndex:HTMLElement = document.createElement('div');
        // divIndex.innerHTML=this.textIndex;
        divIndex.textContent=this.textIndex;
        document.body.appendChild(divIndex)
        return;
    }
}

let textIndex: TextIndex[]= [
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.'),
    new TextIndex ('Lorem ipsum dolor sit amet.')
];
for (let i:number=0;i<10;i++){
    let finishText:TextIndex = new TextIndex(`${i+1} ${textIndex[i]}`)
    finishText.textIndexFunction();
}

// for (let i:number=0;i<10;i++){
//     let finishText:TextIndex = new TextIndex(`${i+1} ${textIndex[i]}`)
//     finishText.textIndexFunction();
// }
