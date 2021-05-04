
export default class ParkingLot {

    code: string;
    capacity: number;
    openHour: number;
    closeHour: number
    occSpaces: number

    constructor(
        code: string, 
        capacity: number, 
        openHour: number, 
        closeHour: number,
        occSpaces: number) {
        this.code = code,
        this.capacity = capacity,
        this.openHour = openHour,
        this.closeHour = closeHour
        this.occSpaces = occSpaces
    }

    
    isOpen(date: Date){
        const hour = date.getHours();
        return (hour >= this.openHour && hour <= this.closeHour);
    }

    isFull () {
		return this.capacity === this.occSpaces;
	}
}
