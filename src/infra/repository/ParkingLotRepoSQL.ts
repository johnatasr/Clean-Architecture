import ParkingLot from "../../domain/entities/ParkingLot";
import ParkingLotRepository from "../../domain/repository/ParkingLotRepo";
import ParkingLotAdapter from "../../adapters/ParkingLotAdapters";
import database from "../database/database";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
	
	async getParkingLotCode(code: string): Promise<ParkingLot> {
		const parkingLotData = await database.oneOrNone(
            "select *, (select count(*) from example.parked_car pc where pc.code = pl.code)::int as occupied_spaces from example.parking_lot pl where pl.code = $1", [code]);
		return ParkingLotAdapter.create(
            parkingLotData.code, 
            parkingLotData.capacity, 
            parkingLotData.open_hour, 
            parkingLotData.close_hour, 
            parkingLotData.occ_spaces);
	}

	async saveParkingCar(code: string, plate: string, date: Date): Promise<void> {
		await database.none("insert into example.parked_car (code, plate, date) values ($1, $2, $3)", [code, plate, date]);
	}

}