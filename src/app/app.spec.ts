import * as chai        from 'chai';
import chaiHttp         from 'chai-http';

import { App }          from './app';

const app = new App().appInstance;
const expext = chai.expect;
chai.use(chaiHttp);

describe('App', () => {
    it('should get a status of 200', () => {
        return chai.request(app).get('/').then((res) => {
            expext(res.status).to.equal(200);
        });
    });

    it('should be html', () => {
        return chai.request(app).get('/').then((res) => {
            expext(res.type).to.equal('text/html');
        });
    });
});
