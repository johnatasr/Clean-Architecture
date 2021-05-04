import ParkingLotAdapter from "../../adapters/ParkingLotAdapters";
import ParkingLot from "../../domain/entities/ParkingLot";
import ParkingLotRepo from "../../domain/repository/ParkingLotRepo";

export default class ParkingLotRepoMemory implements ParkingLotRepo {
    
    parkingLots = [
        { 
			code: "shopping", 
			capacity: 5, 
			open_hour: 8, 
			close_hour: 22
		}
    ];
    
    parkedCars = [];

    
    getParkingLotCode(code: string): Promise<ParkingLot> {
        const pLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);
        const occSpaces = this.parkedCars.length;
        const parkingLot = ParkingLotAdapter.create(
            pLotData.code,
            pLotData.capacity,
            pLotData.open_hour,
            pLotData.close_hour,
            occSpaces
        )
        
        return Promise.resolve(parkingLot)
    }
    saveParkingCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({ code, plate, date })
    }
}