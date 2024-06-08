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
    function TextIndex(text) {
        this.text = text;
        this.text = text;
    }
    TextIndex.prototype.generateElements = function () {
        var basicDiv = document.createElement('div');
        document.body.appendChild(basicDiv);
        for (var i = 0; i < this.text.length; i++) {
            var p = document.createElement('p');
            p.textContent = "".concat(i + 1, " ").concat(this.text[i]);
            basicDiv.appendChild(p);
        }
        return basicDiv;
    };
    return TextIndex;
}());
var textIndex = [
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
var textIndexInst = new TextIndex(textIndex);
var elements = textIndexInst.generateElements();
document.body.appendChild(elements);
