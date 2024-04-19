import * as yup from 'yup';


//Add a schema to validate when we add user
export const addUser = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string(),
        email: yup.string().email().required(),
        city: yup.string(),
        country: yup.string(),
      }),
    }
  },
}

/**
 *
 * export const addUser = {
  schema: {
    body: {
      name: yup.string(),
      email: yup.string().email().required(),
      city: yup.string(),
      country: yup.string(),
    }
  },
}
 */