import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes';
import connectDB from './database';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi CORS
app.use(cors({
    origin: '*', // Atur asal yang diizinkan, bisa berupa string atau array. Gunakan '*' untuk mengizinkan semua.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/polindrom', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
