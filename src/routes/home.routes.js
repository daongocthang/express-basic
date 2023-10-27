import { Router } from 'express';

const router = Router();
export default (app) => {
    router.get('/', (req, res) => {
        res.send({ message: 'Welcome to ExpressJS' });
    });

    app.use('/', router);
};
