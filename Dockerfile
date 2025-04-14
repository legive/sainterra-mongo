# Usa una imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Instala nodemon globalmente para desarrollo
RUN npm install -g nodemon

# Copia el resto de la aplicación al contenedor
COPY . .

# Expone el puerto que va a usar la aplicación (en este caso el puerto 3000)
EXPOSE 3000

# Define el comando para ejecutar la aplicación con nodemon
CMD ["nodemon", "app.js"]
