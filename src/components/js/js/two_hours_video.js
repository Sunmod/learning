class Car {
    constructor(speed) {
        this.speed = speed;
    }

    viewSpeed() {
        return `${'Моя скорость ' + this.speed + " км/ч"}`;
    }
}

let audi = new Car(200)
document.querySelector('[id="car1"]').innerText = audi.speed
audi.speed = 300
document.querySelector('[id="car2"]').innerText = audi.speed