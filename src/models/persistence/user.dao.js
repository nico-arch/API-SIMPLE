import users from '../data/user.data.js'

const insert = (details) => {
  const newUser = {
    id: users.length + 1,
    ...details
  };
  users.push(newUser);

  return newUser;
};

const get = (userID) => {
  const findUser = users.find((user) => {
    if (user.id === userID) {
      return user;
    }
    return null;
  });

  return findUser;
};

const getAll = () => {
  return users;
};

const update = (userID, newDetails) => {
  let existingUser = null;
  let userIndex;
  users.map(((user, index) => {
    if (user.id === userID) {
      existingUser = user;
      userIndex = index;
    };
  }));

  if (!existingUser) {
    return false;
  }

  
  const updatedUser = { ...existingUser, ...newDetails }
  users.splice(userIndex, 1, updatedUser);

  return updatedUser;

};

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      users.splice(index, 1);//delete 1 user, which had that id, at that index (in other words, delete the array element found)
      return true;
    }
    return false;
  };
  return users.find(deleteUser);
}

export default {
  insert,
  get,
  getAll,
  update,
  remove
}