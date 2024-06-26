import Category from "../Models/Category.js";
import CategorySchema from "../validators/categoryvalidators.js";
const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.Category.findAll();
    res.status(200).json({
      Status: "Success",
      Message: "Categories Found Successfuly",
      data: allCategories,
    });
  } catch (err) {
    res.status(500).json({
      Status: "ERROR",
      Message: err,
    });
  }
};
const getOneGategory = async(req,res)=>{
  try{
    const {categoryId} = req.params;
    if(!categoryId){
      return res.status(400).json({ ERROR: "Category ID is required" });
    }
    const oneCategory = await Category.Category.findOne({where:{categoryId}});
    if(!oneCategory){
      return res.status(404).json({ ERROR: "Not Found" });
    }
    res.status(200).json({ Message: "Found", Data: oneCategory });

  }catch(err){
    res.status(500).json({ Status:"ERROR" , Message:err });
  }
}
const addCategory = async (req, res) => {
  try {
    const { error } = CategorySchema.CategorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        Status: "Error",
        Message: error,
      });
    }
    const { categoryName, categoryPic } = req.body;
    const existingCategory = await Category.Category.findOne({
      where: { categoryName },
    });
    if (existingCategory) {
      return res.status(400).json({ Message: "Category already exists" });
    }
    const category = await Category.Category.create({
      categoryName,
      categoryPic,
    });
    res.status(201).json({
      Status: "Success",
      Message: "Category created successfully",
      Data: category,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: `This is the error ${err}`,
    });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { error } = CategorySchema.CategorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        Status: "Error",
        Message: error.details[0].message,
      });
    }
    const existingCategory = await Category.Category.findOne({
      where: { categoryId },
    });
    if (!existingCategory) {
      return res.status(404).json({ Message: "Category not found" });
    }
    const { categoryName, categoryPic } = req.body;
    await Category.Category.update(
      {
        categoryName,
        categoryPic,
      },
      { where: { categoryId } }
    );
    const updatedCategory = await Category.Category.findOne({
      where: { categoryId },
    });
    res.status(200).json({
      Status: "Success",
      Message: "Brand updated successfully",
      Data: updatedCategory,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
};
const deleteCategory = async (req,res)=>{
  try{
    const {categoryId} = req.params;
    const existingCategory = await Category.Category.findOne({
      where: { categoryId },
    });
    if (!existingCategory) {
      return res.status(404).json({ Message: "Category not found" });
    }
    await Category.Category.destroy({ where: { categoryId } });
    res.status(200).json({
      Status: "Success",
      Message: "Category deleted successfully",
    });
  }catch(err){
    res.status(500).json({
      Status: "Error",
      Message: err,
    });
  }
}
export default { getAllCategories, addCategory,updateCategory,deleteCategory,getOneGategory};
