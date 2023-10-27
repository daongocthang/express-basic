import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import models from './models';

dotenv.config();

const PORT = process.env.NODE_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

models.sequelize.sync();

routes(app);

// Main
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
