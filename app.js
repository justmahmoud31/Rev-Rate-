import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/authRoutes.js';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import brandRoutes from './Routes/brandRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js';
import offerRoutes from './Routes/offerRoutes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/brands',brandRoutes);
app.use('/api/Categories',categoryRoutes);
app.use('/api/offers',offerRoutes);
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
