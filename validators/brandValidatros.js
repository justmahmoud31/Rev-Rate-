import Joi from 'joi';
const BrandSchema = Joi.object({
    brandName : Joi.string().required()
})