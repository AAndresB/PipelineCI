# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto de la aplicación (ajusta el puerto si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
