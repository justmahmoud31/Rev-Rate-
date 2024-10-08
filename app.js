import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/authRoutes.js';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import brandRoutes from './Routes/brandRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js';
import offerRoutes from './Routes/offerRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import ReviewerRoute from './Routes/ReviewerRoute.js';
import reviewRoute from './Routes/reviewRoutes.js';
import brandAuthRoute from './Routes/brandAuthRoute.js';
import BrandLocationRoute from './Routes/BrandLocationRoute.js';
import ReviewersBrandroutes from './Routes/ReviewersBrandroute.js';
import ReviewersProductRoute from './Routes/ReviewersProductRoute.js';
import ReviewersOffersRoutes from './Routes/ReviewersOffersRoutes.js';
import SubCategoryRoutes from './Routes/SubCategoryRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/brands',brandRoutes);
app.use('/api/Categories',categoryRoutes);
app.use('/api/offers',offerRoutes);
app.use('/api/products',productRoutes);
app.use('/api/reviewer',ReviewerRoute);
app.use('/api/reviews',reviewRoute);
app.use('/api/brand', brandAuthRoute);
app.use('/api/brandLocation',BrandLocationRoute);
app.use('/api/reviewerBrand',ReviewersBrandroutes);
app.use('/api/reviewerProduct',ReviewersProductRoute);
app.use('/api/reviewerOffers',ReviewersOffersRoutes);
app.use('/api/category',SubCategoryRoutes);
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
