
export default class ParkingLot {

    code: string;
    capacity: number;
    openHour: number;
    closeHour: number


    constructor(code: string, capacity: number, openHour: number, closeHour: number) {
        this.code = code,
        this. capacity = capacity,
        this.openHour = openHour,
        this.closeHour = closeHour
    }

    
    idOpen(date: Date){
        const hour = date.getHours();
        return (hour >= this.openHour && hour <= this.closeHour);
    }
}