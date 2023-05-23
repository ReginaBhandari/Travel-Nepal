import Joi from 'joi';

const schema = Joi.object({
  price: Joi.number(),
  destinationName: Joi.string()
});

export default schema;
