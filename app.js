import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './Routes/authRoutes.js';
import sequelize from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
