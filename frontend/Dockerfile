FROM node:20-alpine

WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files including .env.local
COPY . .
COPY .env.local .env.local

# Build Next.js app (env vars must be present here)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]