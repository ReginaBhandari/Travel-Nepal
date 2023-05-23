import Joi from "joi";

const schema = Joi.object({
  destinationName: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().integer().optional().min(1000),
  images: Joi.object({
    added: Joi.array().items(Joi.string()).optional(),
    removed: Joi.array().items(Joi.string()).optional(),
  }).optional(),
  reviews: Joi.object({
    added: Joi.array().items(Joi.string()).optional(),
    removed: Joi.array().items(Joi.string()).optional(),
  }).optional(),
});

export default schema;
