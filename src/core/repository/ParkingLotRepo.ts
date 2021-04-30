import ParkingLot from "../entities/ParkingLot";


export default interface ParkingLotRepo {
    getParkingLotCode(code: string): Promise<ParkingLot>
}