import ParkingLot from "../core/entities/ParkingLot";
import ParkingLotRepo from "../core/repository/ParkingLotRepo";

export default class ParkingLotRepoMemory implements ParkingLotRepo {
    getParkingLotCode(code: string): Promise<ParkingLot> {
        return Promise.resolve(new ParkingLot(code, 5 , 10, 15))
    }
}