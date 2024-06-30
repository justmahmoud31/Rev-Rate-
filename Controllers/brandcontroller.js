import Brand from "../Models/Brand.js";
import BrandSchema from "../validators/brandValidatros.js";

const getAllbrands = async (req, res) => {
  try {
    const allbrands = await Brand.findAll();
    res.status(200).json({
      Status: "Success",
      Message: "Brands retrieved successfully",
      Data: allbrands,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const addBrand = async (req, res) => {
  try {
    const { error } = BrandSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ Status: "Error", Message: error.details[0].message });
    
    const {
      brandName,
      logo,
      brandEmail,
      websiteLink,
      photos,
      active,
      subscription,
      categoryId,
      detail
    } = req.body;

    const existingBrand = await Brand.findOne({ where: { brandName } });
    if (existingBrand) {
      return res.status(400).json({ Message: "Brand already exists" });
    }
    const brand = await Brand.create({
      brandName,
      brandEmail,
      logo,
      websiteLink,
      photos,
      active,
      subscription,
      categoryId,
      detail
    });
    res.status(201).json({
      Status: "Success",
      Message: "Brand created successfully",
      Data: brand,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err.message,
    });
  }
};
const getOneBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    if (!brandId) {
      return res.status(400).json({ ERROR: "Brand ID is required" });
    }
    const oneBrand = await Brand.findOne({ where: { brandId } });
    if (!oneBrand) {
      return res.status(404).json({ ERROR: "Not Found" });
    }
    res.status(200).json({ Message: "Found", Data: oneBrand });
  } catch (err) {
    res.status(500).json({ ERROR: "An error occurred while fetching the brand" });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const { error } = BrandSchema.validate(req.body);
    if (error) return res.status(400).json({ Status: "Error", Message: error.details[0].message });

    const existingBrand = await Brand.findOne({ where: { brandId } });
    if (!existingBrand) return res.status(404).json({ Message: "Brand not found" });

    const {
      brandName,
      logo,
      brandEmail,
      websiteLink,
      photos,
      isActive,
      subscription,
      detail,
      categoryId
    } = req.body;

    await Brand.update(
      {
        brandName,
        brandEmail,
        logo,
        websiteLink,
        photos,
        isActive,
        subscription,
        detail,
        categoryId
      },
      { where: { brandId } }
    );

    const updatedBrand = await Brand.findOne({ where: { brandId } });

    res.status(200).json({
      Status: "Success",
      Message: "Brand updated successfully",
      Data: updatedBrand,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const deleteBrand = async (req, res) => {
    try {
      const { brandId } = req.params;
      const existingBrand = await Brand.findOne({ where: { brandId } });
      if (!existingBrand) return res.status(404).json({ Message: "Brand not found" });
  
      await Brand.destroy({ where: { brandId } });
  
      res.status(200).json({
        Status: "Success",
        Message: "Brand deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        Status: "Error",
        Message: err,
      });
    }
  };
export { addBrand, getAllbrands, getOneBrand, updateBrand,deleteBrand };
