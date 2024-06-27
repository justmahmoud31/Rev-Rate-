import { Router } from "express";
import {
  getAllOffers,
  getOneOffer,
  addOffer,
  updateOffer,
  deleteOffer,
} from "../Controllers/offerscontroller.js";
import verifyToken from "../Middlewares/verifytokenmiddleware.js";
const router = Router();

router.get("/", verifyToken, getAllOffers);
router.get("/getoneoffer/:offerId", verifyToken, getOneOffer);
router.post("/addoffer", verifyToken, addOffer);
router.put("/updateoffer/:offerId", verifyToken, updateOffer);
router.delete("/deleteoffer/:offerId", verifyToken, deleteOffer);

export default router;
