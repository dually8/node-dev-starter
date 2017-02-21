import * as express from 'express';

export class IndexRouter {
    private _router = express.Router();

    constructor() {
        this._router.get('/', this.getIndex);
    }

    get router() { return this._router; }

    private getIndex(req: express.Request, res: express.Response): void {
        res.send('Hello World');
    }
}
