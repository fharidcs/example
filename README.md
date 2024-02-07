# API REST con Node.js, Express, TypeScript y Docker

Este es un proyecto de ejemplo para crear una API RESTful utilizando Node.js, Express, TypeScript y Docker. La aplicación se conecta a la API de Marvel para obtener información sobre cómics.

## Requisitos Previos

- [Node.js](https://nodejs.org/) instalado
- [Docker](https://www.docker.com/) instalado
- Clave de API de Marvel (obtén una en [https://developer.marvel.com/](https://developer.marvel.com/))

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto

2. Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de Marvel:
    MARVEL_API_KEY=TU_CLAVE_DE_API_DE_MARVEL

3. Instalación
    npm install

4. Ejecución Local
    npm start

La aplicación estará disponible en http://localhost:3000.

# Ejecución con Docker
 
Ejecuta los siguientes comandos: 

docker build -t apirest1 .

docker run -p 3000:3000 apirest1

La aplicación Dockerizada estará disponible en http://localhost:3000.

# Pruebas Unitarias
Este proyecto utiliza Jest para pruebas unitarias. 

Ejecuta las pruebas con el siguiente comando:

npm test


# Estructura del Proyecto

src/main.ts: Archivo principal de la aplicación.

jest.config.js: Configuración de Jest para pruebas.

Dockerfile: Configuración para construir la imagen Docker.

.dockerignore: Archivos y directorios excluidos al construir la imagen Docker.

config.json: Configuración de la aplicación.


# Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
