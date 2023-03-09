FROM node:19-alpine3.16

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app

EXPOSE 3000

ENTRYPOINT [ "sh","docker/entrypoint.sh" ]