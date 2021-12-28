FROM node:latest

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g nodemon
RUN npm install --production

COPY . .

EXPOSE 5000

ENTRYPOINT ["npm", "run", "start"]

CMD ["node" , "index.js"]
