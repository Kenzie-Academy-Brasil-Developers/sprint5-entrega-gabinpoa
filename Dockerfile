FROM node:18.3.0

USER root

RUN apt-get update

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]