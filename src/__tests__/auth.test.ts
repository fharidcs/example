// auth.test.ts
import { generateMarvelHash } from '../utils/auth';

describe('generateMarvelHash', () => {
  it('debería generar el hash esperado', () => {
    // Configurar variables de entorno de prueba
    process.env.MARVEL_TS = '1';
    process.env.MARVEL_API_PRIVATE_KEY = '0fcdd16b3a02b8de13d7b1d0792d2a6abf452cd4';
    process.env.MARVEL_API_PUBLIC_KEY = 'c97f253c9adab08558d4181ed12c2f0d';

    const expectedHash = 'c9fff6fc5d90da83f9cdf3858a7009e1';

    const actualHash = generateMarvelHash();

    expect(actualHash).toBe(expectedHash);
  });
});
