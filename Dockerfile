FROM node:16
WORKDIR /client
COPY ./package*.json /client/
RUN npm install --force
COPY . /client/
EXPOSE 3000
CMD ["npm", "run", "dev"]