import test from 'ava';
import userService from '../user.service.js';

let sampleUser;

//npm test

test.beforeEach(() => {
  sampleUser = {
    "name": "John Doe",
    "email": "john@example.com",
    "city": "New York",
    "country": "USA"
  };
});

test.after(() => {
  if (userService.getUser(2)) {
    console.log("\nClean up: User 2 is being removed.");
    userService.removeUser(2);
    console.warn("\nInfo: You can uncomment the user.data.js file.")
  }
});

test('Must add a user', async (t) => {
  const expectedId = 1;
  const user = userService.addUser(sampleUser);
  t.is(user.id, expectedId);
  t.deepEqual(user, { id: expectedId, ...sampleUser })
});


test('Must retrieve a user', async (t) => {
  const expectedId = 1;
  const user = userService.getUser(expectedId);
  t.is(user.id, expectedId);
  t.deepEqual(user, { id: expectedId, ...sampleUser })
});

test('Must get all users', async (t) => {
  //We add a new user
  userService.addUser(sampleUser);

  const users = userService.getAllUsers();

  t.deepEqual(users, [{ id: 1, ...sampleUser }, { id: 2, ...sampleUser }])

});



test('Must update a user', async (t) => {
  const expectedId = 1;
  const updatedDetails = {
    name: "John David",
    email: "johndavid@example.com",
    city: "Petion-ville",
    country: "Haiti"
  }


  const user = userService.updateUser(expectedId, updatedDetails);

  //sampleUser = user;

  t.is(user.id, expectedId);
  t.deepEqual(user, { id: expectedId, ...updatedDetails })
}
);

test('Must delete a user by ID', async (t) => {
  const expectedId = 1;
  userService.removeUser(expectedId);

  //Trying to retreive a removed user, should return null
  const user = userService.getUser(expectedId);
  t.is(user, undefined);//user is null

});





