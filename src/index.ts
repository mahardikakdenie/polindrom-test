import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes'
import connectDB from './database';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Jika klien mengirim data URL-encoded, tambahkan ini juga
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/polindrom', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
