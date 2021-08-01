import * as Joi from 'joi';
import { PassionLevel } from '../../model/hobby';

const hobbyJoiPayload = {
  name: Joi.string().required(),
  passionLevel: Joi.string()
    .valid(
      PassionLevel.LOW,
      PassionLevel.MEDIUM,
      PassionLevel.HIGH,
      PassionLevel.VERY_HIGH
    )
    .required(),
  year: Joi.number().min(1000).max(3000).required(),
};

export default {
  create: {
    payload: hobbyJoiPayload,
  },
  updateById: {
    params: {
      HOBBY_ID: Joi.string().required(),
    },
    payload: hobbyJoiPayload,
  },
  getById: {
    params: {
      HOBBY_ID: Joi.string().required(),
    },
  },
  deleteById: {
    params: {
      HOBBY_ID: Joi.string().required(),
    },
  },
};
