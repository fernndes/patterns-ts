import { Vehicle } from '../interfaces/vehicle';
import { VehicleFactory } from './vehicle-factory'
import { Bicycle } from '../classes/bicycle'

export class BicycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName)
    }
}