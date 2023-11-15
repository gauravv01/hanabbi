import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://<${process.env.username}>:<${process.env.paasword}>@cluster0.0jqcjhw.mongodb.net/?retryWrites=true&w=majority`
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
