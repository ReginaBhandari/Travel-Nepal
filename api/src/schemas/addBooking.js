import Joi from "joi";

const schema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  destinationId: Joi.number().integer().required(),
});

export default schema;
