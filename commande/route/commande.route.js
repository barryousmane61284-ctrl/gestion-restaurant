import commandecontroller from "../controller/commande.controller.js";
import { Router } from "express";
import commandeschema from "../validate/commande.validate.js";
import validationMiddleware from "../../commun/validator.js";

const routecommande = Router()

routecommande.get("/toutcommande",commandecontroller.toutcommande)
routecommande.post("/creationcommande",validationMiddleware(commandeschema),commandecontroller.creationcommande)
routecommande.get("/recuperationId/:id",commandecontroller.recuperationId)
routecommande.put("/update/:id",validationMiddleware,commandecontroller.update)
routecommande.delete("/suppression/:id",commandecontroller.suppression)

export default routecommande;
