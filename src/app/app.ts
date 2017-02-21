import bodyParser       from 'body-parser';
import cookieParser     from 'cookie-parser';
import express          from 'express';
import logger           from 'morgan';

import { IndexRouter }  from '../routes/index/index.route';

export class App {
    private _instance = express();

    constructor() {
        this._instance.use(logger('dev'));
        this._instance.use(bodyParser.json());
        this._instance.use(bodyParser.urlencoded({ extended: false }));
        this._instance.use(cookieParser());

        this._instance.use('/', new IndexRouter().router);
    }

    get instance() { return this._instance; }
}
