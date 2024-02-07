// src/utils/config.ts
import * as fs from 'fs';

interface Config {
  apiUrl: string;
  marvelApiKey: string;
}

export function getConfig(): Config {
  const configPath = './config.json';
  const env = process.env.NODE_ENV || 'development';
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))[env];
  return config;
}
