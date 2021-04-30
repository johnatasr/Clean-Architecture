import ParkingLot from "../entities/ParkingLot";
import ParkingLotRepo from "../repository/ParkingLotRepo";

export default class GetParkingLot {

    parkingLotRepo: ParkingLotRepo

    constructor(parkingLotRepo: ParkingLotRepo){
        this.parkingLotRepo = parkingLotRepo
    }

    execute(code: string): Promise<ParkingLot> {
        return this.parkingLotRepo.getParkingLotCode(code)
    }
}