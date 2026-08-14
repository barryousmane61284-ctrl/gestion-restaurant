import platcontroller from "../controller/plat.controller.js";
import { Router} from "express";
import validationMiddleware from "../../commun/validator.js";
import platschema from "../validate/plat.validate.js";

const routeplat = Router();

routeplat.post("/creationplat",validationMiddleware(platschema),platcontroller.creationplat);
routeplat.get("/getallplat", platcontroller.getallplat);
routeplat.get("/getplatbyId/:id", platcontroller.getplatbyId);
routeplat.put("/updateplat/:id", platcontroller.updateplat);
routeplat.delete("/deleteplat/:id", platcontroller.deleteplat);

export default routeplat;
