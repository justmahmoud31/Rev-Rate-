import ReviewController from '../Controllers/ReviewController.js';
import verifyToken from "../Middlewares/verifytokenmiddleware.js";
import { Router } from 'express';
const router = Router();
router.post('/addbrandreview/:brandId',verifyToken,ReviewController.addBrandReview);
router.post('/addproductreview/:productId',verifyToken,ReviewController.addProductReview);
router.get('/brandReviews/:brandId',verifyToken,ReviewController.getBrandreviews);
router.get('/productreviews/:productId',verifyToken,ReviewController.getProductReviews);
export default router;