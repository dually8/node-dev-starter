import bodyParser               from 'body-parser';
import cookieParser             from 'cookie-parser';
import express                  from 'express';
import logger                   from 'morgan';

import { RepositoryDirectory }  from '../libs/repository-directory';
import { ServiceDirectory }     from '../libs/service-directory';
import { IndexRouter }          from '../routes/index/index.route';
import { UserRouter }           from '../routes/user/user.route';

export class App {
    private _instance = express();
    private _repositoryDirectory: RepositoryDirectory;
    private _serviceDirectory: ServiceDirectory;

    constructor() {
        this._repositoryDirectory = new RepositoryDirectory();
        this._serviceDirectory = new ServiceDirectory(this._repositoryDirectory);

        this._instance.use(logger('dev'));
        this._instance.use(bodyParser.json());
        this._instance.use(bodyParser.urlencoded({ extended: false }));
        this._instance.use(cookieParser());

        this._instance.use('/', new IndexRouter().router);
        this._instance.use('/api', new UserRouter(this._serviceDirectory.userService).router);
    }

    get instance() { return this._instance; }
}
