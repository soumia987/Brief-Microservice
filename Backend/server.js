import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import competenceRoutes from './routes/competenceRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/competences', competenceRoutes);

app.get('/', (req, res) => {
  res.send('API de suivi des compétences');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});