// src/main.ts
import express from 'express';
import * as dotenv from 'dotenv';
import { getConfig } from './utils/config';
import charactersRouter from './routes/characters';
//import comicsRouter from './routes/comics';
//import seriesRouter from './routes/series';
//import creatorsRouter from './routes/creators';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/v1/public/characters', charactersRouter);
//app.use('/v1/public/comics', comicsRouter);
//app.use('/v1/public/series', seriesRouter);
//app.use('/v1/public/creators', creatorsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} en el entorno ${process.env.NODE_ENV}`);
});
