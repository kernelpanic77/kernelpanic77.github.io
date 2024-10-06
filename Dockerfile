FROM node:18.20-alpine

RUN apk add --no-cache g++ make py3-pip libc6-compat

# expose a port
EXPOSE 3000

# create a workdir
WORKDIR /app

# copy project contents
COPY yarn.lock* package*.json ./
COPY . . 

RUN npm install

CMD npm 
