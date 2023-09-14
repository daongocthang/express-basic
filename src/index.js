import path from 'path';
import express from 'express';
import cors from 'cors';
import expressEjsLayouts from 'express-ejs-layouts';

import { Browser } from '~/routes';

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public/static'));

app.use(expressEjsLayouts);
app.set('layout', './layouts/default');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

Browser(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
