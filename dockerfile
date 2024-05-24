FROM node:alpine
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "start:dev"]
