# Usa una imagen oficial de Node.js como base
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala solo las dependencias de producción
RUN npm install --only=production

# Copia el resto de la aplicación al contenedor
COPY . .

# Exponer el puerto que usa la aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
