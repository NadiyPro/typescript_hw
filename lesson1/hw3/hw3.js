// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
var TextT = /** @class */ (function () {
    function TextT(text) {
        this.text = text;
    }
    TextT.prototype.textFunction = function () {
        var div = document.createElement('div');
        div.textContent = this.text;
        document.body.appendChild(div);
        return;
    };
    return TextT;
}());
var text = [
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
text.forEach(function (value) { value.textFunction(); });
// text.forEach(value=> {
//     let blocks:TextT=new TextT (value.text)
//     blocks.textFunction()
// });
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
var TextIndex = /** @class */ (function () {
    function TextIndex(textIndex) {
        this.textIndex = textIndex;
    }
    TextIndex.prototype.textIndexFunction = function () {
        var divIndex = document.createElement('div');
        // divIndex.innerHTML=this.textIndex;
        divIndex.textContent = this.textIndex;
        document.body.appendChild(divIndex);
        return;
    };
    return TextIndex;
}());
var textIndex = [
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.'),
    new TextIndex('Lorem ipsum dolor sit amet.')
];
for (var i = 0; i < 10; i++) {
    var finishText = new TextIndex("".concat(i + 1, " ").concat(textIndex[i]));
    finishText.textIndexFunction();
}
// for (let i:number=0;i<10;i++){
//     let finishText:TextIndex = new TextIndex(`${i+1} ${textIndex[i]}`)
//     finishText.textIndexFunction();
// }
