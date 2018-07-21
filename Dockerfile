FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 1234
CMD [ "yarn", "start" ]
