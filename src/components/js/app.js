let ford = {
    color: 'red',
    maxSpeed: 250,
    audio: {
        brand: 'Yamaha',
        speakers: 12,
    },
    drivers: ['Степан', 'Матвей', 'Александр'],
};

//es 5
// open: function (message) {
//     console.log(message)
// }
// // // // // // // // // // //
// function getMessage() {
//     console.log('Я функция')
// };
// getMessage();
// let car = {
//     getMethod() {
//         console.log('Я метод');
//     }
// }
// car.getMethod();

/*
дз сделать стрелочную функцию
(function (){
    console.log('Я стрелочная функция');
}());

let stringFunc = () => 'Я дз по стрелочной функции';
console.log(stringFunc())

(() => console.log('Второй вариант'))()
 */

/*
анонимная стрелочная функция
let anonym = (message, count) => {
    return message + count;
};
console.log(anonym('this is => ', 4));
 */

/*
дз фунция и условие
let color = getColor;
color();
function getColor(currentColor = 'red') {
    currentColor = ford.color;
    if (currentColor == 'red') {
        return;
    }
    console.log(currentColor)
}
 */

/*
дз изменить значение макс скорости через функцию
console.log('Первоначальная макс скорость: ' + ford.maxSpeed)
speedChange(ford)
function speedChange(theCar) {
    theCar.maxSpeed = 300
    console.log('Измененная макс скорость:' + ford.maxSpeed)
}
*/

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