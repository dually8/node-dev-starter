import * as chai        from 'chai';
import chaiHttp         from 'chai-http';

import { App }          from './app';

const expect = chai.expect;
chai.use(chaiHttp);

describe('App', () => {
    const app = new App().instance;

    it('should get a status of 200', () => {
        return chai.request(app).get('/').then((res) => {
            expect(res.status).to.equal(200);
        });
    });

    it('should be html', () => {
        return chai.request(app).get('/').then((res) => {
            expect(res.type).to.equal('text/html');
        });
    });
});
