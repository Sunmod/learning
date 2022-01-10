let car = {
    drivers: ['Stepan', 'Matvei', 'Ivan'],
    getDriver(driver) {
        console.log('Текущий водитель - ' + this.drivers[driver])
    },
}
car.getDriver(0)