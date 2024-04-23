import userService from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";

export const updateUser = (req, res) => {
  const { body: user } = req; // Making an alias (user) with body

  const id = parseInt(req.params.id, 10);

  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user: updatedUser
    });
  }
  else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} is not found`
    });
  };

}

export const addUser = (req, res) => {
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
    user: addedUser
  });
}