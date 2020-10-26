FROM node:12

COPY . /runtime/

ENTRYPOINT ["node", "/runtime/dist/index.js"]