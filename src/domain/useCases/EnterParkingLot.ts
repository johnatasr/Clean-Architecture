import ParkingCar from '../entities/ParkingCar';
import ParkingLot from '../entities/ParkingLot';
import ParkingLotRepo from '../repository/ParkingLotRepo'

export default class EnterParkingLot {

    parkingLotRepo: ParkingLotRepo

    constructor(parkinglotRepo: ParkingLotRepo) {
        this.parkingLotRepo = parkinglotRepo;
    }

    async execute(code: string, plate: string, date: Date): Promise<ParkingLot> {
        const parkingLot = await this.parkingLotRepo.getParkingLotCode(code);
        const parkedCar = new ParkingCar(code, plate, date);

        if (!parkingLot.isOpen(parkedCar.date)) {
            throw new Error('The parking lot is closed');
        }; 

        if (parkingLot.isFull()) {
            throw new Error("The parking lot is full");
        };
        
        await this.parkingLotRepo.saveParkingCar(parkedCar.code, parkedCar.plate, parkedCar.date);

        return parkingLot;
    }
}