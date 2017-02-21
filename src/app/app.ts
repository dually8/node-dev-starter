import bodyParser       from 'body-parser';
import cookieParser     from 'cookie-parser';
import express          from 'express';
import logger           from 'morgan';

import { IndexRouter }  from '../routes/index/index.route';

export class App {
    private _appInstance = express();

    constructor() {
        this._appInstance.use(logger('dev'));
        this._appInstance.use(bodyParser.json());
        this._appInstance.use(bodyParser.urlencoded({ extended: false }));
        this._appInstance.use(cookieParser());

        this._appInstance.use('/', new IndexRouter().router);
    }

    get appInstance() { return this._appInstance; }
}
