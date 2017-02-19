import chai from 'chai';
import chaiHttp from 'chai-http';
import jsdom from 'jsdom';

import { Application } from './app';

const app = new Application().app;
const expext = chai.expect;
chai.use(chaiHttp);

describe('Application', () => {
    it('should get a status of 200', () => {
        return chai.request(app).get('/').then(res => {
            expext(res.status).to.equal(200);
        });
    });

    it('should be html', () => {
        return chai.request(app).get('/').then(res => {
            expext(res.type).to.equal('text/html');
        });
    });

    it('should have an h1 header in the body that says "Hello World!"', () => {
        return chai.request(app).get('/').then(res => {
            jsdom.env(res.text, (err, window) => {
                const h1 = window.document.body.getElementsByTagName('h1').item(0);
                done();
                expext(h1.innerHTML).to.equal('Hello World!');
            });
        });
    });
});
