import Joi from "joi";
const BrandSchema = Joi.object({
  brandName: Joi.string().required(),
  categoryId: Joi.number().required(),
  logo: Joi.string().optional(),
  brandEmail: Joi.string().email().required(),
  websiteLink: Joi.string().optional(),
  photos: Joi.string().optional(),
  isActive: Joi.number().required(),
  subscription: Joi.string().required(),
  brandDetails: Joi.string().optional(),
});
export default  BrandSchema;