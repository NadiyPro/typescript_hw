// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
class TextT {
    constructor(text) {
        this.text = text;
    }
    textFunction() {
        let div = document.createElement('div');
        div.textContent = this.text;
        document.body.appendChild(div);
        return;
    }
}
let text = [
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.')
];
text.forEach(value => { value.textFunction(); });
// text.forEach(value=> {
//     let blocks:TextT=new TextT (value.text)
//     blocks.textFunction()
// });
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
class TextIndex {
    constructor(text) {
        this.text = text;
        this.text = text;
    }
    generateElements() {
        const basicDiv = document.createElement('div');
        document.body.appendChild(basicDiv);
        for (let i = 0; i < this.text.length; i++) {
            const p = document.createElement('p');
            p.textContent = `${i + 1} ${this.text[i]}`;
            basicDiv.appendChild(p);
        }
        return basicDiv;
    }
}
const textIndex = [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.'
];
const textIndexInst = new TextIndex(textIndex);
const elements = textIndexInst.generateElements();
document.body.appendChild(elements);
