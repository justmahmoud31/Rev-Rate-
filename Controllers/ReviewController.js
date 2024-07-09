import Review from "../Models/Review.js";
import ReviewSchema from "../validators/reviewValidator.js";
const getBrandreviews = async (req, res) => {
  try {
    const { brandId } = req.params;
    if (!brandId) {
      return res
        .status(404)
        .json({ Status: "Not Found", Message: "Brand Not Found" });
    }
    const reviews = await Review.findAll({
      where: {
        brandId: brandId,
      },
    });
    if (reviews.length === 0) {
      return res.status(404).json({
        Status: "Not Found",
        Message: "No reviews found for this brand",
      });
    }
    res.status(200).json({
      Status: "Success",
      Data: reviews,
    });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};
const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res
        .status(404)
        .json({ Status: "Not Found", Message: "Product Not Found" });
    }
    const reviews = await Review.findAll({
      where: {
        productId: productId,
      },
    });
    if (reviews.length === 0) {
      return res.status(404).json({
        Status: "Not Found",
        Message: "No reviews found for this Product",
      });
    }
    res.status(200).json({
      Status: "Success",
      Data: reviews,
    });
  } catch (err) {
    res.status(500).json({ Status: "error", Message: err.message });
  }
};
const addBrandReview = async (req, res) => {
  try {
    const { brandId } = req.params;
    if (!brandId) {
      return res
        .status(404)
        .json({ Status: "Not Found", Message: "Brand Not Found" });
    }
    const { comments, photos, quality, service, reviewerId } = req.body;
    const { error } = ReviewSchema.validate(req.body);
    if (error) {
      return res
        .status(403)
        .json({ Status: "error", Message: error.details[0].message });
    }
    const review = await Review.create({
      comments,
      brandId,
      quality,
      service,
      photos,
      reviewerId,
    });
    res.status(200).json({
      Status: "Success",
      Message: "Review added Succesfully",
      data: review,
    });
  } catch (err) {
    res.status(500).json({ Status: "Error", Message: err.message });
  }
};
const addProductReview = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res
        .status(404)
        .json({ Status: "Not Found", Message: "Product Not Found" });
    }
    const { comments, photos, quality, service, reviewerId } = req.body;
    const { error } = ReviewSchema.validate(req.body);
    if (error) {
      return res
        .status(403)
        .json({ Status: "error", Message: error.details[0].message });
    }
    const review = await Review.create({
      comments,
      productId,
      quality,
      service,
      photos,
      reviewerId,
    });
    res.status(200).json({
      Status: "Success",
      Message: "Review added Succesfully",
      data: review,
    });
  } catch (err) {
    res.status(500).json({ Status: "Error", Message: err.message });
  }
};
export default {
  getBrandreviews,
  getProductReviews,
  addBrandReview,
  addProductReview,
};
