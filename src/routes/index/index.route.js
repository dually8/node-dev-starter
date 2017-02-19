import express from 'express';
import path from 'path';

const _router = express.Router();

export class IndexRouter {
    constructor() {
        _router.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../../client/index.html'));
        });
    }

    get router() { return _router; }
}
