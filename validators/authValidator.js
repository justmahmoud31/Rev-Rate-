import Joi from 'joi';
const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  profilePic: Joi.string().optional(),
  phone: Joi.string().optional(),
  points: Joi.number().optional()
});
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
export { registerSchema, loginSchema };
