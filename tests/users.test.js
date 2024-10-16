const request = require('supertest');
const express = require('express');
const { fetchUsers, createUser } = require('../controllers/users.js');

const app = express();
app.use(express.json());

// Routes
app.get('/api/users', fetchUsers);
app.post('/api/users', createUser);

describe('Users API', () => {

  // Array to store users for testing
  const userDB = []

  // GET /users test
  describe('GET /api/users', () => {
    it('should return an empty array when no users exist', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([])
    });
  });

  // POST /users tests
  describe('POST /api/users', () => {
    it('should create a user and return 201 status', async () => {
      const newUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        location: 'New York',
      };

      const res = await request(app).post('/api/users').send(newUser);
      expect(res.statusCode).toEqual(201);
      expect(res.body.message).toEqual('User successfully created!');
    });

    it('should return a 400 status when one of the required fields are missing', async () => {
      const incompleteUser = {
        firstName: 'Jane',
        email: 'jane.doe@example.com',
      };

      const res = await request(app).post('/api/users').send(incompleteUser);
      expect(res.statusCode).toEqual(400);
      expect(res.body.error).toContain(
        'Missing one of the following required fields: firstName, lastName, or email'
      );
    });
  });
});
