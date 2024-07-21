import { Router } from 'express';
import Reviewercontroller from '../Controllers/Reviewercontroller.js';
import verifyToken from "../Middlewares/verifytokenmiddleware.js";

const router = Router();
router.patch('/blockreviewer/:reviewerId',verifyToken,Reviewercontroller.BlockReviewer);
router.patch('/unblockreviewer/:reviewerId',verifyToken,Reviewercontroller.unblockReviewer);
router.get('/getreviewer/:reviewerId',verifyToken,Reviewercontroller.getReviewer);

export default router;