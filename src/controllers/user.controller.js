import pino from 'pino';
import { StatusCodes } from "http-status-codes";
import userService from "../services/user.service.js";

const logger = pino();


const STATUS = {
  success: true,
  failure: false
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id, 10);//decimal base
  const user = userService.getUser(id);

  //If we have at least 1 element
  if (user) {
    //console.log('User is found');
    logger.info(`Getting user ${id}`);
    return res.status(StatusCodes.OK).send(
      {
        status: STATUS.success,
        user
      });
  }
  else {
    logger.info(`User ${id} is not found`);

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: `user ${id} is not found`
      });
  }
}

const getAllUsers = (req, res) => {

  const users = userService.getAllUsers();
  //console.log('User lenght: ', users.length);

  //If we have at least 1 element
  if (users.length > 0) {
    logger.info(`Getting all users`);
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

}

const updateUser = (req, res) => {
  const { body: user } = req; // Making an alias (user) with body

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);


  if (updatedUser) {
    logger.info(`Updating user ${id}`);
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user: updatedUser
    });
  }
  else {
    logger.info(`User ${id} is not found for updating`);
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} is not found`
    });
  };

}

const addUser = (req, res) => {
  const { body: user } = req; // Making an alias (user) with body

  const addedUser = userService.addUser(user);
  logger.info('Creating a new user');

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
    user: addedUser
  });
}

const removeUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const user = userService.getUser(id);
  if (user) {
    userService.removeUser(id);
    logger.info(`Removing user ${id}`);
    return res.status(StatusCodes.OK).send(
      {
        status: STATUS.success,
        message: `User ${id} has been deleted`
      });
  }
  else {
    logger.info(`User ${id} is not found for remove`);
    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: `User ${id} is not found`
      });
  }

}

export default {
  addUser,
  getUser,
  getAllUsers,
  updateUser,
  removeUser
}