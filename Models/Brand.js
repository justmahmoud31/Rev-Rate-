import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
class Brand extends Model{}
Brand.init({
    brandId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryId:{
        type: DataTypes.INTEGER,
    },
    brandName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    logo:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    brandEmail:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    websiteLink:{
        type:DataTypes.STRING,
        allowNull:true
    },
    photos:{
        type:DataTypes.STRING,
        allowNull:true
    },
    isActive:{
        type:DataTypes.TINYINT,
        allowNull:false,
    },
    subscription:{
        type:DataTypes.STRING,
        allowNull:false  
    },
    brandDetails:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName:'Brand',
    tableName:'brand',
    timestamps: false
});
export default Brand;