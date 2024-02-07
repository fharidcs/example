// src/utils/auth.ts
export function isValidApiKey(apiKey: string): boolean {
    const validApiKeys = [getConfig().marvelApiKey];
    return validApiKeys.includes(apiKey);
  }
  