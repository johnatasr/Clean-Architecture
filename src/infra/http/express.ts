import Express from "express";
import ExpressAdapter from "../../adapters/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";

const app = new Express();

app.get("/parkingLots/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);