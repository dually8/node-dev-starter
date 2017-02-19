import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';
import path from 'path';

describe('index.html', () => {
    it('should say Hello World!', (done) => {
        const index = fs.readFileSync(path.join(__dirname, './index.html'), 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1').item(0);
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        });
    });
});
