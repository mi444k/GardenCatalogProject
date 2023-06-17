FROM node:18-alpine AS development

WORKDIR /app

EXPOSE 3333

COPY ./app/package.json ./app/package-lock.json ./
RUN npm ci

CMD ["npm","run","dev"]