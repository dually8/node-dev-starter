import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import { IndexRouter } from './routes/index/index.route';

const _app = express();

export class Application {
    constructor() {
        _app.use(logger('dev'));
        _app.use(bodyParser.json());
        _app.use(bodyParser.urlencoded({ extended: false }));
        _app.use(cookieParser());

        _app.use('/', new IndexRouter().router);
    }

    get app() { return _app; }
}
