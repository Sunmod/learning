let hater = {
    firstName: 'Bill',
    lastName: 'Geyts',
    getName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(hater.getName())

let hater2 = {
    firstName: 'Donald',
    lastName: 'Duck',
    getName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(hater2.getName())