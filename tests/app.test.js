const request = require('supertest');
const app = require('../app');  // Adjust path if needed

describe('Todo App Endpoints', () => {
  it('should load the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/') // Change from '/todos' to '/'
      .send({ title: 'Test Todo' });
    expect(res.statusCode).toEqual(302); // Redirect after create
  });
});