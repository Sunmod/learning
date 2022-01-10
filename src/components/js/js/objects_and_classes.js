class  Hater {
    constructor(firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName() {
        console.log(`${this.firstName} ${this.lastName }`)
    }
}

let hater1 = new Hater('Ronald', 'Tomskiy');
hater1.sayName()

class Bloger {
    constructor(channelName, firstName, lastName) {
        this.channelName = channelName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    isBloger () {
        console.log(`Канал ${this.channelName}` + ' [ автор канала: ' + `${this.firstName} ${this.lastName}` + ' ]')
    }
}

let bloger1 = new Bloger('Trent Channel', 'Stepan', 'Turbasov')
bloger1.isBloger()