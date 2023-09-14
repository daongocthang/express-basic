import { Router } from 'express';

const router = Router();
export const Browser = (app) => {
    router.get('/', (req, res) => {
        res.render('pages/index', { title: 'welcome' });
    });

    app.use('/', router);
};
