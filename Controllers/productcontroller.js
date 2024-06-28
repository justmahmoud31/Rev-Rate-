import Product from "../Models/Product.js";
import ProductSchema from "../validators/productsValidator.js";

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.status(200).json({
      Status: "Success",
      Message: "Products found successfully",
      data: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const getOneProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(403).json({
        Status: "Error",
        Message: "Product Id is Required",
      });
    }
    const existingProduct = await Product.findOne({ where: { productId } });
    if (!existingProduct) {
      return res.status(404).json({
        Status: "Error",
        Message: "Product Not Found",
      });
    }
    res.status(200).json({
      Status: "Success",
      Message: "Product found",
      data: existingProduct,
    });
  } catch (err) {
    res.status(500).josn({
      Status: "Error",
      Message: err,
    });
  }
};
const addProduct = async (req, res) => {
  try {
    const { error } = ProductSchema.validate(req.body);
    if (error) {
      return res.status(403).json({
        Status: "Error",
        Message: error.details[0].message,
      });
    }
    const { brandId, name, price, offerId, rate, photos, productDetails } =
      req.body;
    const product = await Product.create({
      brandId,
      name,
      price,
      offerId,
      rate,
      photos,
      productDetails,
    });
    res.status(201).json({
      Status: "Success",
      Message: "Product Added Succesfully",
      data: product,
    });
  } catch (err) {
    return res.status(500).josn({
      Status: "Error",
      Message: err,
    });
  }
};
const updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      if (!productId) {
        return res.status(403).json({
          Status: "Error",
          Message: "Product Id is Required",
        });
      }
  
      const existingProduct = await Product.findOne({ where: { productId } });
      if (!existingProduct) {
        return res.status(404).json({
          Status: "Error",
          Message: "Product Not Found",
        });
      }
  
      const { error } = ProductSchema.validate(req.body);
      if (error) {
        return res.status(403).json({
          Status: "Error",
          Message: error.message,
        });
      }
  
      const { brandId, name, price, offerId, rate, photos, productDetails } = req.body;
  
      const updatedProduct = await Product.update(
        {
          brandId,
          name,
          price,
          offerId,
          rate,
          photos,
          productDetails,
        },
        { where: { productId } }
      );
      const newProduct = await Product.findOne({where:{productId}})
      res.status(200).json({
        Status: "Success",
        Message: "Product updated Successfully",
        data: newProduct,
      });
    } catch (err) {
      res.status(500).json({
        Status: "Error",
        Message: err.message,
      });
    }
  };
  
const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(403).json({
        Status: "Error",
        Message: "Product Id is Required",
      });
    }
    const existingProduct = await Product.findOne({ where: { productId } });
    if (!existingProduct) {
      return res.status(404).json({
        Status: "Error",
        Message: "Product Not Found",
      });
    }
    await Product.destroy({ where: { productId } });
    res.status(200).json({
      Status: "Success",
      Message: "Product Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
export { getAllProducts, addProduct, getOneProduct, updateProduct,deleteProduct };
