// src/routes/comics.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import { generateMarvelHash } from '../utils/auth';
import { getConfig } from '../utils/config';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const apiUrl = `${getConfig().apiUrl}/comics`;

    const params = {
      apikey: process.env.MARVEL_API_PUBLIC_KEY,
      ts: process.env.MARVEL_TS,
      hash: generateMarvelHash(),
    };

    const response = await axios.get(apiUrl, { params });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error al obtener cómics de Marvel:', error.message);
    console.error('Error detallado:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
