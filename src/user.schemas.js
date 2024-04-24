import * as yup from 'yup';

const min_length =
{
  name: 2,
  city: 2,
  country: 3
};

const max_length =
{
  name: 30,
  city: 30,
  country: 30
}

//A schema to validate when we get an user
export const getUser = {
  schema: {
    params:
    {
      yupSchema: yup.object().shape(
        {
          id: yup.number().required(),
        }
      ),
    }
  },
}

//A schema to validate when we add an user
export const addUser = {
  schema: {
    body:
    {
      yupSchema: yup.object().shape(
        {
          name: yup.string().min(min_length.name).max(max_length.name),
          email: yup.string().email().required(),
          city: yup.string().min(min_length.city).max(max_length.city),
          country: yup.string().min(min_length.country).max(max_length.country),
        }
      ),
    }
  },
}

//A schema to validate when we update an user
export const updateUser = {
  schema: {
    params:
    {
      yupSchema: yup.object().shape(
        {
          id: yup.number().required(),
        }
      ),
    },
    body:
    {
      yupSchema: yup.object().shape(
        {
          name: yup.string().min(min_length.name).max(max_length.name),
          email: yup.string().email(),
          city: yup.string().min(min_length.city).max(max_length.city),
          country: yup.string().min(min_length.country).max(max_length.country),
        }
      ),
    }
  },
}

//A schema to validate when we remove an user
export const removeUser = {
  schema: {
    params:
    {
      yupSchema: yup.object().shape(
        {
          id: yup.number().required(),
        }
      ),
    }
  },
}