// import { CarFactory } from "./factories/car-factory";

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Factory');
// fusca.pickup('Joana');
// fusca.stop();

import { randomCarAlg } from "./main/random-vehicle-algorithm";

const customerNames = ['Ana', 'Joana', 'Helena', 'João']

for (let i = 0; i < 10; i++) {
    const vehicle = randomCarAlg();
    const name = customerNames[Math.floor(Math.random() * (customerNames.length))];
    vehicle.pickup(name);
    vehicle.stop();
    console.log('------')
}