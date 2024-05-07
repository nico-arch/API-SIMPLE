import express from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/user.service.js';
import { expressYupMiddleware } from 'express-yup-middleware';
import { addUser, updateUser, getUser, removeUser } from '../schemas/user.schemas.js';

import userController from '../controllers/user.controller.js';


const rooter = express.Router();


rooter.use(express.json());


rooter.get('/ping', (req, res) => {
  res.status(StatusCodes.OK);

  res.send('OK !');
});


rooter.get('/all',
  userController.getAllUsers);

rooter.get('/get/:id',
  expressYupMiddleware({
    schemaValidator: getUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }),
  userController.getUser);


rooter.post(
  '/add',
  expressYupMiddleware({
    schemaValidator: addUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }), userController.addUser);

rooter.put('/update/:id',
  expressYupMiddleware({
    schemaValidator: updateUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }), userController.updateUser);

rooter.delete('/delete/:id',
  expressYupMiddleware({
    schemaValidator: removeUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  })
  , userController.removeUser);

export default rooter;