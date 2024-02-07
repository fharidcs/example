// src/main.ts
import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config(); // Carga variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Cargar la configuración desde el archivo config.json
const configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Decorador de autenticación
function authenticationDecorator(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.query.apikey as string;

  // Verificar si se proporciona una clave API válida
  if (!isValidApiKey(apiKey)) {
    return res.status(401).json({ error: 'Autenticación fallida: Clave API no válida' });
  }

  // Pasar al siguiente middleware o controlador
  next();
}

// Función para validar una clave API
function isValidApiKey(apiKey: string): boolean {
  const validApiKeys = [config.marvelApiKey];
  return validApiKeys.includes(apiKey);
}

// Endpoint para obtener cómics de Marvel con autenticación
app.get('/v1/public/comics', authenticationDecorator, async (req: Request, res: Response) => {
  try {
    const apiUrl = 'https://developer.marvel.com/v1/public/comics';

    const params = {
      apikey: process.env.MARVEL_API_KEY,
    };

    const response = await axios.get(apiUrl, { params });

    res.json(response.data);
  } catch (error: any) {
    console.error('Error al obtener cómics de Marvel:', error.message);
    console.error('Error detallado:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
