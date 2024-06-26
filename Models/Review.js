import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Reviewer from "./Reviewer";
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

});
