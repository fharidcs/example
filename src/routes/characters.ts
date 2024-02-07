import express, { Request, Response } from 'express';
import axios from 'axios';
import { isValidApiKey } from '../utils/auth';
import { getConfig } from '../utils/config';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const apiUrl = `${getConfig().apiUrl}/characters`;

    const params = {
      apikey: process.env.MARVEL_API_KEY,
    };

    const response = await axios.get(apiUrl, { params });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error al obtener personajes de Marvel:', error.message);
    console.error('Error detallado:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;