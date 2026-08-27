import commandecontroller from "../controller/commande.controller.js";
import { Router } from "express";
import commandeschema from "../validate/commande.validate.js";
import validationMiddleware from "../../commun/validator.js";
import verifyAccessToken from "../../commun/middleware/verifytoken.jwt.js";

const routecommande = Router()

routecommande.get("/",verifyAccessToken,commandecontroller.toutcommande)
routecommande.post("/creationcommande",verifyAccessToken,validationMiddleware(commandeschema),commandecontroller.creationcommande)
routecommande.get("/recuperationId/:id",commandecontroller.recuperationId)
routecommande.put("/update/:id",verifyAccessToken,validationMiddleware,commandecontroller.update)
routecommande.delete("/suppression/:id",verifyAccessToken,commandecontroller.suppression) 

export default routecommande;
