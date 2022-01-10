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