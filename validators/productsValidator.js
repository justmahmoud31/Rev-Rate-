import Joi from "joi";
const ProductSchema = Joi.object({
	brandId: Joi.number().required(),
    name  : Joi.string().required(),
    price : Joi.number().optional(),
    offerId: Joi.number().optional(),
    rate:Joi.number().optional(),
    photos : Joi.string().required(),
    likes: Joi.number().optional(),
    dislikes:Joi.number().optional(),
    productDetails : Joi.string().optional()  
})
export default ProductSchema;