FROM node:lts
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run copy
RUN npm run build
CMD npm start