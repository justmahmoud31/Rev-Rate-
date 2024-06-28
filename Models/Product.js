import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import  Brand  from "./Brand.js";
import {Offers} from './offers.js';
class Product extends Model {}
Product.init({
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brandId: {
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: "brandId",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type:DataTypes.DECIMAL,
    allowNull:false
  },
  offerId:{
    type:DataTypes.INTEGER,
    references:{
        model:Offers,
        key:"offerId"
    }
  },
  rate :{
    type:DataTypes.DECIMAL,
    allowNull:true
  },
  photos:{
    type:DataTypes.STRING,
    allowNull:true
  },
  likes :{
    type:DataTypes.INTEGER,
    defaultValue:0,
  },
  dislikes :{
    type:DataTypes.INTEGER,
    defaultValue:0
  },
  productDetails :{
    type:DataTypes.STRING,
  }
},{
    sequelize,
    modelName:'Product',
    tableName:'product',
    timestamps: false
});
export default Product;