import express from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from './services/user.service.js';
import { expressYupMiddleware } from 'express-yup-middleware';
import { addUser, updateUser } from './user.schemas.js';

import { addUser as addUserController, updateUser as updateUserController } from './controllers/user.controller.js';


const rooter = express.Router();

const STATUS = {
  success: 'OK',
  failure: 'NO'
};

rooter.use(express.json());


rooter.get('/ping', (req, res) => {
  res.status(StatusCodes.OK);

  //console.log('Hello World!');
  res.send('OK !');
});


rooter.get('/all', (req, res) => {

  const users = userService.getAllUsers();
  //console.log('User lenght: ', users.length);

  //If we have at least 1 element
  if (users.length > 0) {

    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      users
    });

  }

  else {

    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: 'No users found'
    });
  }

});

rooter.get('/get/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);//decimal base
  const user = userService.getUser(id);

  //If we have at least 1 element
  if (user) {
    //console.log('User is found');
    return res.status(StatusCodes.OK).send(
      {
        status: STATUS.success,
        user
      });
  }
  else {
    //console.log('user is not found');
    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: `user ${id} is not found`
      });
  }
});


rooter.post(
  '/add',
  expressYupMiddleware({
    schemaValidator: addUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }),
  addUserController);

rooter.put('/update/:id',
  expressYupMiddleware({
    schemaValidator: updateUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST
  }), updateUserController);

rooter.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const user = userService.getUser(id);
  if (user) {
    userService.removeUser(id);
    return res.status(StatusCodes.OK).send(
      {
        status: STATUS.success,
        message: `User ${id} has been deleted`
      });
  }
  else {
    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: `User ${id} is not found`
      });
  }

});

export default rooter;