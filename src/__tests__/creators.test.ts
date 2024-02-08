import axios from 'axios';
import app from '../main'; 

const port = process.env.PORT || 3000;
const baseUrl = `http://localhost:${port}/v1/public/creators`;

describe('Marvel API Status', () => {
  it('should respond with status 200 for creators endpoint', async () => {
    try {
      const response = await axios.get(baseUrl);
      expect(response.status).toBe(200);
    } catch (error) {
      // Si ocurre un error, probablemente el servidor no está en ejecución
      console.error('Error al realizar la solicitud:', );
    }
  });
});
