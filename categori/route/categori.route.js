import categoricontroller from '../controller/categori.controller.js';
import express from 'express';
import validationMiddleware from '../../commun/validator.js';
import categorieschema from '../validate/categori.validate.js';

const routecategori = express.Router();

routecategori.post('/creationcategori',validationMiddleware(categorieschema),categoricontroller.creationcategori);
routecategori.get('/recuperationId/:id', categoricontroller.recuperationId);
routecategori.get('/toutcategori', categoricontroller.toutcategori);
routecategori.put('/update/:id', categoricontroller.update);
routecategori.delete('/suppression/:id', categoricontroller.suppression);

export default routecategori;