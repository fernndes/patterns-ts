import { Vehicle } from "../interfaces/vehicle";

export abstract class VehicleFactory {
    // Factory Method
    abstract getVehicle(vehicleName: string): Vehicle;
    // Irei deixar para as subclasses decidirem qual veiculo instanciar

    pickUp(customerName: string, vehicleName: string): Vehicle {
        const vehicle = this.getVehicle(vehicleName);
        vehicle.pickup(customerName);
        return vehicle;
    }
}