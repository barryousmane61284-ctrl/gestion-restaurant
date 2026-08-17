import clientcontroller from "../controller/client.controller.js";
import { Router } from "express";
import clientschema from "../validate/client.validate.js";
import validationMiddleware from "../../commun/validator.js";

const routeclient = Router()

routeclient.get("/",clientcontroller.toutclient)
routeclient.get("/plus-commandes",clientcontroller.meilleursClients)
routeclient.post("/creation",validationMiddleware(clientschema),clientcontroller.creationclient)
routeclient.get("/:id",clientcontroller.recuperationId)
routeclient.put("/:id",clientcontroller.update)
routeclient.delete("/:id",clientcontroller.suppression)

export default routeclient


