import userController from './user.controller.js';
import express from 'express';

const router = express.Router();

router.post('/',userController.create)
router.get('/:id',userController.getById)
router.get('/',userController.getAll)
router.put('/:id',userController.update)
router.delete('/:id',userController.delete)
router.post('/login', userController.login);

export default router