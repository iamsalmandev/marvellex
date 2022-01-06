FROM node:14.17.6

WORKDIR /marketplace

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

CMD yarn start
