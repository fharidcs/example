// src/utils/auth.ts
import * as crypto from 'crypto';

export function generateMarvelHash(): string {
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY || '';
  const publicKey = process.env.MARVEL_API_PUBLIC_KEY || '';
  const timestamp = process.env.MARVEL_TS || '';

  const hash = crypto.createHash('md5').update(`${timestamp}${privateKey}${publicKey}`).digest('hex');

  console.log('Generated Marvel Hash:', hash);

  return hash;
}
