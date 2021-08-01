import * as Joi from 'joi';

export default {
  create: {
    payload: {
      name: Joi.string().required(),
      hobbies: Joi.array().items(Joi.number()),
    },
  },
  updateById: {
    params: {
      USER_ID: Joi.string().required(),
    },
    payload: {
      name: Joi.string().required(),
      hobbies: Joi.array().items(Joi.string()),
    },
  },
  getById: {
    params: {
      USER_ID: Joi.string().required(),
    },
  },
  deleteById: {
    params: {
      USER_ID: Joi.string().required(),
    },
  },
};
