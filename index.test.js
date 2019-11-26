const server = require('./index');
const request = require('supertest');

describe('Test the root path', () => {
    test('It should response the GET method', async (done) => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        done();
    });
})
