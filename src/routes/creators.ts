// src/routes/creators.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import { generateMarvelHash } from '../utils/auth';
import { getConfig } from '../utils/config';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = 10;

    const apiUrl = `${getConfig().apiUrl}/creators`;

    const params = {
      apikey: process.env.MARVEL_API_PUBLIC_KEY,
      ts: process.env.MARVEL_TS,
      hash: generateMarvelHash(),
      offset: (page - 1) * pageSize,
      limit: pageSize,
    };

    const response = await axios.get(apiUrl, { params });

    // Enviar el JSON formateado directamente como respuesta
    res.json(response.data);
  } catch (error: any) {
    console.error('Error al obtener creadores de Marvel:', error.message);
    console.error('Error detallado:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
