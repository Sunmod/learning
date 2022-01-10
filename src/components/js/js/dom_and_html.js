document.getElementById('header').innerText = 'Измененный заголовок'
console.log(document.getElementById('header'))
console.log(typeof  document.getElementById('header'))

let findElement = document.querySelector('[value="30"]')
findElement.value = 100
console.log(findElement)