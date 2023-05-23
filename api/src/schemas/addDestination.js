import Joi from 'joi';

const schema = Joi.object({
  destinationName: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().integer().required().min(1000),
  images: Joi.array().items(Joi.string()),
  reviews: Joi.string().max(600),
});

export default schema;
