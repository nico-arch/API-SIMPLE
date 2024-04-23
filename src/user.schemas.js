import * as yup from 'yup';


//Add a schema to validate when we add a user
export const addUser = {
  schema: {
    body:
    {
      yupSchema: yup.object().shape(
        {
          name: yup.string(),
          email: yup.string().email().required(),
          city: yup.string(),
          country: yup.string(),
        }
      ),
    }
  },
}

//Add a schema to validate when we update a user
export const updateUser = {
  schema: {
    body:
    {
      yupSchema: yup.object().shape(
        {
          name: yup.string(),
          email: yup.string().email(),
          city: yup.string(),
          country: yup.string(),
        }
      ),
    }
  },
}
