// src/__tests__/comics.test.ts
import request from 'supertest';
import app from '../main'; // Ajusta la ruta según la estructura de tu proyecto

describe('Unit Test - Comics Route', () => {
  it('should not allow empty parameters', async () => {
    const response = await request(app)
      .get('/v1/public/comics')
      .query({}); // Pasa un objeto vacío como parámetro

    // Verifica que la respuesta tenga un código 500 (error interno del servidor)
    expect(response.status).toBe(500);

    // Verifica que la respuesta sea un objeto JSON
    expect(response.type).toBe('application/json');

    // Verifica que la respuesta contenga un mensaje de error
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Error interno del servidor');
  });
});
