FROM node:22-bookworm-slim

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código (incluyendo la carpeta prisma)
COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run start:dev"]