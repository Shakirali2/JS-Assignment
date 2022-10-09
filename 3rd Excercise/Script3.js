var _name = "Shakir";
var upperCase = _name.toUpperCase();
var lowerCase = _name.toLocaleLowerCase();

const titleCase = () => {
    var _split = lowerCase.split(' ');
    for (let i = 0; i < _split.length; i++) {
        _split[i] = _split[i].charAt(0).toUpperCase() + _split[i].slice(1);
    }
    return _split.join(" ")
}

console.log(upperCase)
console.log(lowerCase)
console.log(titleCase())