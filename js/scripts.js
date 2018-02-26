//scripts.js

var a = prompt('enter first value');
var b = prompt('enter second value');
var value = (a * a) - (2 * a * b) - (b * b);

console.log('The result is:', value);

if(value < 0) {
    console.log('negative result');
} else if (value == 0) {
    console.log('restult zero!');
} else {
    console.log('positive result');
}

alert(value);