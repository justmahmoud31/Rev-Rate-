import Brand from "../Models/Brand.js";
import { Offers } from "../Models/offers.js";
import { offersSchema } from "../validators/offersValidator.js";
const getAllOffers = async (req, res) => {
  try {
    const allOffers = await Offers.findAll();
    res.status(200).json({
      Status: "Success",
      Message: "Offers Found Successfully",
      data: allOffers,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: "There is An Error",
      ERROR: err,
    });
  }
};
const getOneOffer = async (req, res) => {
  try {
    const { offerId } = req.params;
    const oneOffer = await Offers.findOne({ where: { offerId } });
    if (!oneOffer) {
      return res.status(404).json({
        Status: "Error",
        Message: "Offer Not Found",
      });
    }
    res.status(200).json({
      Status: "Success",
      Message: "Offer has been Found",
      data: oneOffer,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const addOffer = async (req, res) => {
  try {
    const { error } = offersSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        Status: "Error",
        Message: error.details[0].message,
      });
    }
    const { details, photo, promoCode, brandId } = req.body;
    const brandExists = await Brand.findOne({ where: { brandId } });
    if (!brandExists) {
      return res.status(400).json({
        Status: "Error",
        Message: "Brand does not exist",
      });
    }

    const offer = await Offers.create({
      details,
      photo,
      promoCode,
      brandId,
    });

    res.status(201).json({
      Status: "Success",
      Message: "Offer added Successfully",
      data: offer,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err.message,
    });
  }
};
const updateOffer = async (req, res) => {
  try {
    const { offerId } = req.params;
    const { error } = offersSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        Status: "Error",
        Message: error.details[0].message,
      });
    }
    const { details, photo, promoCode, brandId } = req.body;
    const existingOffer = await Offers.findOne({
      where: { offerId },
    });
    if (!existingOffer) {
      return res.status(404).json({ Message: "Offer not found" });
    }
    await Offers.update(
      {
        details,
        photo,
        promoCode,
        brandId,
      },
      { where: { offerId } }
    );
    const updatedOffer = await Offers.findOne({
      where: { offerId },
    });
    res.status(200).json({
      Status: "Success",
      Message: "Offer updated successfully",
      Data: updatedOffer,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const deleteOffer = async (req, res) => {
  try {
    const { offerId } = req.params;
    const existingOffer = await Offers.findOne({
      where: { offerId },
    });
    if (!existingOffer) {
      return res.status(404).json({ Message: "Offer not found" });
    }
    await Offers.destroy({ where: { offerId } });
    res.status(200).json({
      Status: "Success",
      Message: "Offer Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
export { getAllOffers, getOneOffer, addOffer, updateOffer, deleteOffer };
