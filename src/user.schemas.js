import * as yup from 'yup';


//Add a schema to validate when we add user
const addUser = {
  schema: {
    body: {
      name: yup.string(),
      email: yup.string().email().required(),
      city: yup.string(),
      country: yup.string(),
    },
  },
}

export default {
  addUser
};