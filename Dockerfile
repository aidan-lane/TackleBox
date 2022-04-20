FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.jsons
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY website/package.json /usr/src/app/website/
COPY website/package-lock.json /usr/src/app/website/

# For Production:
# RUN npm ci --only=production
RUN npm install
RUN cd website && npm install

# Bundle app source
COPY . /usr/src/app

RUN cd website && npm run build

EXPOSE 8080
CMD [ "npm", "run", "start" ]
