const express = require('express');
const passengerRouter = express.Router();
const passengerController = require('../controllers/passengerController');
const { jwtMiddleware }= require('../middlewares/jwt');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { passengerValidation, updatePassengerValidation } = require('../validation/passengerValidation');

passengerRouter.post('/register', validationMiddleware(passengerValidation), passengerController.registerPassenger);
passengerRouter.get('/',jwtMiddleware(['admin']), passengerController.getAllPassengers);
passengerRouter.get('/:id', jwtMiddleware(['passenger', 'driver', 'admin']), passengerController.getPassengerById);
passengerRouter.patch('/:id', jwtMiddleware(['passenger']), validationMiddleware(updatePassengerValidation), passengerController.updatePassenger);
passengerRouter.delete('/:id', jwtMiddleware(['passenger']), passengerController.deletePassenger);

module.exports = passengerRouter;
