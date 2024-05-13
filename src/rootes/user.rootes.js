import express from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/user.service.js';
import { expressYupMiddleware } from 'express-yup-middleware';
import { addUser, updateUser, getUser, removeUser } from '../schemas/user.schemas.js';

import userController from '../controllers/user.controller.js';
import pino from 'pino';

const rooter = express.Router();


rooter.use(express.json());


rooter.get('/ping', (req, res) => {

  const logger = pino();
  const pingMessage = {
    status: StatusCodes.OK,
    message: `Success pinged the API`,
    //request: `${req}`,
  };
  logger.info("Pinging the API");

  return res.status(StatusCodes.OK).send(pingMessage);
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