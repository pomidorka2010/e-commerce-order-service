const request = require('supertest');
const app = require('../server');

describe('Orders API', () => {
  it('should create a new order', async () => {
    const res = await request(app)
      .post('/orders')
      .send({
        customerId: '12345',
        items: [{ productId: 'abc', quantity: 2 }],
        totalAmount: 100
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should get an order by id', async () => {
    const res = await request(app)
      .get('/orders/1');
    expect(res.statusCode).toEqual(404);
  });
});