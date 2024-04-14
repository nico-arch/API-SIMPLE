import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js';


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
  res.status(StatusCodes.OK);

  //console.log('Hello World!');
  res.send('OK !');
});


rooter.post('/add', (req, res) => {
  const { body: user } = req; // Making an alias (user) with body

  const addedUser = userService.addUser(user);

  /* To use later
  if (!user.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.failure,
      message: 'Name is required'
    });
  };  
  */

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    message: addedUser
  });
});

rooter.put('/update/:id', (req, res) => {
  const { body: user } = req; // Making an alias (user) with body

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: updatedUser
    });
  }
  else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} is not found`
    });
  };

});


export default rooter;