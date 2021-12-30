let ford = {
    color: 'blue',
    maxSpeed: 250,
    audio: {
        brand: 'Yamaha',
        speakers: 12,
    },
    cost: 4000000,
};
let bmw = {
    color: 'yellow',
};


// /*
// дз изменить значение макс скорости через функцию
console.log('Первоначальная макс скорость: ' + ford.maxSpeed)
speedChange(ford)
function speedChange(theCar) {
    theCar.maxSpeed = 300
    console.log('Измененная макс скорость:' + ford.maxSpeed)
}
// */

/*
знакомство с функциями
colorChange(ford)
colorChange(bmw)
function colorChange(theCar) {
    theCar.color = 'red';
}
console.log(ford.color)
console.log(bmw.color)
 */

/*
дз if
ford.cost > 1000000  ? console.log('Дорогой'):console.log('Не дорогой');
*/

/*
переменные
let a = 2;
let b = `test`;
let c = `Ел сегодня ${a} раза`;
let d = `Ел сегодня ` + a + ` раза`;
let e = true;
let f = null;
let g = undefined;
console.log(a, b, e, f, g);
console.log(typeof(a, b, e, f, g));
console.log(c);
console.log(d);
*/