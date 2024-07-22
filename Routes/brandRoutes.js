import { Router } from "express";
import authBrand from '../Middlewares/verifybrandTokenMiddleware.js';

import { getAllbrands,addBrand, getOneBrand, updateBrand, deleteBrand } from '../Controllers/brandcontroller.js';
const router = Router();
router.get('/',getAllbrands);
router.post('/addbrand',authBrand,addBrand);
router.get('/getonebrand/:brandId',getOneBrand);
router.put('/updatebrand/:brandId',authBrand,updateBrand);
router.delete('/deletebrand/:brandId',authBrand,deleteBrand);
router.patch('/addbrandLike/:brandId',)
export default router;