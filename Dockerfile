FROM node:10

WORKDIR /usr/src/app

# why the *
COPY package.json .
RUN npm install

COPY . .

COPY wait-for-it.sh /usr/wait-for-it.sh
# RUN chmod +x /usr/wait-for-it.sh

