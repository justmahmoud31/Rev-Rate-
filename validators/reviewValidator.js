import Joi from "joi";

const ReviewSchema = Joi.object({
  brandId: Joi.number().optional(),
  productId: Joi.number().optional(),
  reviewerId: Joi.number().required(),
  comments: Joi.string().required(),
  photos: Joi.array().items(Joi.string().uri()).optional(),
  quality: Joi.number().required(),
  service: Joi.number().required()
});

export default ReviewSchema;
