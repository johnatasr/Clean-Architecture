import ParkingLot from "../core/entities/ParkingLot";
import ParkingLotRepo from "../core/repository/ParkingLotRepo";

export default class ParkingLotRepoMemory implements ParkingLotRepo {
    
    parkingLots = [
        new ParkingLot("shopping", 10, 8, 22)
    ];
    
    parkedCars = [];

    
    getParkingLotCode(code: string): Promise<ParkingLot> {
        return Promise.resolve(
            this.parkingLots.find(parkingLot => parkingLot.code === code)
        )
    }
    saveParkingCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({ code, plate, date })
    }
}