import { Vehicle } from "../interfaces/vehicle";

export class Bicycle implements Vehicle {
    constructor(private name: string) {};
    pickup(customerName: string): void {
        console.log(`${this.name} está buscando o ${customerName}`)
    };
    stop(): void {
        console.log(`${this.name} parou`);
    };
}