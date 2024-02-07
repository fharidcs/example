# Usa una imagen de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de configuración de dependencias e instala las dependencias
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]
