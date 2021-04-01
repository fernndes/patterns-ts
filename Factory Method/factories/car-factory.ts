import { Vehicle } from '../interfaces/vehicle';
import { VehicleFactory } from './vehicle-factory'
import { Car } from '../classes/vehicle'

export class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName)
    }
}