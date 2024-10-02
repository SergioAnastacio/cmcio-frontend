# Etapa 1: Construcción
FROM node:alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servidor
FROM nginx:alpine

# Eliminar archivos residuales en el directorio de trabajo de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]