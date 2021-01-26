FROM node:14

WORKDIR /usr/src/dashboard

COPY package.json /usr/src/dashboard

RUN npm install

ENV PORT=3000
ENV HOST=0.0.0.0
ENV NUXT_APP_API_URL=localhost:3001/api/v1

COPY . .
EXPOSE 3000
CMD npm run dev
