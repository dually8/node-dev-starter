import * as express from 'express';

import { IUserService } from '../../libs/services/user-service';

export class UserRouter {
    private _router = express.Router();

    constructor(private userService: IUserService) {
        this.router.route('/users/:userId').get((req, res) => {
            this.getUser.call(this, req, res);
        });
    }

    get router() { return this._router; }

    private getUser(req: express.Request, res: express.Response): void {
        const id = req.params.userId as string;
        this.userService.get().then(result => {
            res.json(result);
        }, err => {
            res.status(500);
            res.send(err);
        });
    }
}
