FROM node:21.5-bookworm-slim

WORKDIR /app
COPY . /app

RUN npm install 
RUN npm run build

CMD [ "npm","run", "start" ]  
