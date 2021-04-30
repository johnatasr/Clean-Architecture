import EnterParkingLot from "../src/core/useCases/EnterParkingLot";
import GetParkingLot from "../src/core/useCases/GetParkingLot";
import ParkingLotRepoMemory from "../src/infra/ParkingLotRepoMemory"

test("Shoud enter parking lot", async function() {
    const parkingLotRepoMemory = new ParkingLotRepoMemory();
    const enterParkingLotUseCase = new EnterParkingLot(parkingLotRepoMemory);
    const parkingLot = await enterParkingLotUseCase.execute(
        "shopping",
        "PPP-4578",
        new Date("2021-04-30T12:21:50")
        );
    const getParkingLotUseCase = new GetParkingLot(parkingLotRepoMemory);
    const parkingLotBeforEnter = getParkingLotUseCase.execute("shopping");
    
    expect(parkingLotBeforEnter.occSpaces).toBe(0)
    
    await enterParkingLotUseCase.execute(
        "supermarket",
        "MHH-1313",
        new Date("2021-04-30T15:54:20")
    )
    
    expect(parkingLot.code).toBe("shopping")

})