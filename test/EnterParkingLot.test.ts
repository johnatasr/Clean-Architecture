import EnterParkingLot from "../src/core/useCases/EnterParkingLot";
import ParkingLotRepoMemory from "../src/infra/ParkingLotRepoMemory"

test("Shoud enter parking lot", async function() {
    const parkingLotRepoMemory = new ParkingLotRepoMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepoMemory);
    const parkingLot = await enterParkingLot.execute(
        "shopping",
        "PPP-4578",
        new Date("2021-04-30T12:21:50")
        );
    expect(parkingLot.code).toBe("shopping")

})