import { Router } from 'express';
import Reviewercontroller from '../Controllers/Reviewercontroller.js';
import verifyToken from "../Middlewares/verifytokenmiddleware.js";

const router = Router();
router.patch('/blockreviewer/:reviewerId',verifyToken,Reviewercontroller.BlockReviewer);
router.patch('/unblockreviewer/:reviewerId',verifyToken,Reviewercontroller.unblockReviewer);

export default router;