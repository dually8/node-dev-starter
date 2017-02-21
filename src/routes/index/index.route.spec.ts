import * as chai        from 'chai';
import express          from 'express';

import { IndexRouter }  from './index.route';

const expect = chai.expect;

describe('Index Router', () => {
    const router = new IndexRouter().router;
    it('router should be defined', () => {
        expect(router).to.not.equal(null || undefined);
    });
});
