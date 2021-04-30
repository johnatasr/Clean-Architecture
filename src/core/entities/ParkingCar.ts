export default class ParkingCar {
    
    plate: string
    code: string
    date: Date

    constructor(code: string, plate: string, date: Date){
        if (! /[A-Z]{3}-[0-9]{4}/.test(plate)) throw new Error('Invalid plate');
        this.plate = plate;
        this.code = code;
        this.date = date;
    }
}