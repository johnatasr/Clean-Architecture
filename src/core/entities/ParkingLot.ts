
export default class ParkingLot {

    code: string;
    capacity: number;
    openHour: number;
    closeHour: number


    constructor(code, capacity, openHour, closeHour) {
        this.code = code,
        this. capacity = capacity,
        this.openHour = openHour,
        this.closeHour = closeHour
    }
}