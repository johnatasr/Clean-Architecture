import ParkingLotRepo from '../repository/ParkingLotRepo'

export default class EnterParkingLot {

    parkingLotRepo: ParkingLotRepo

    constructor(parkinglotRepo: ParkingLotRepo) {
        this.parkingLotRepo = parkinglotRepo;
    }

    async execute(code: string): Promise<any> {
        const parkingLot = await this.parkingLotRepo.getParkingLotCode(code=code)
        return parkingLot
    }
}