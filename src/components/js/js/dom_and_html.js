//
// let findElement1 = document.querySelector('[value="30"]')
// findElement1.value = 100
// console.log(findElement1)

let element = {
    class: 'someClass',
    value: 50
}
let findElement = document.querySelector('input')
findElement.className = element.class
findElement.value = element.value
console.log(findElement)
