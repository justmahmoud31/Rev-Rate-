import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Product from './Product.js';
import Reviewer from "./Reviewer.js";
import Brand from "./Brand.js";

class Review extends Model {}

Review.init({
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Reviewer,
      key: 'reviewerId'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Product,
      key: 'productId'
    }
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Brand,
      key: 'brandId'
    }
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  photos: {
    type: DataTypes.JSON,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  quality: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  service: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  isPinned: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Review',
  tableName: 'Review',
  timestamps: false
});

export default Review;
