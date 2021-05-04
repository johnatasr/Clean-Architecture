import ParkingLot from "../domain/entities/ParkingLot";


export default class ParkingLotAdapter {
    static create(code: string, capacity: number, openHour: number, closeHour: number, occSapces: number) {
        return new ParkingLot(code, capacity, openHour, closeHour, occSapces)
    } 
}