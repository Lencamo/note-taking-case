FROM node:16.18.0
COPY ./ /ruoyi-ui
WORKDIR /ruoyi-ui
RUN npm install --registry=https://registry.npm.taobao.org/
RUN npm run build:prod

FROM nginx:1.17.10
RUN mkdir -p /app/ruoyi-ui
COPY --from=0 /ruoyi-ui/dist /app/ruoyi-ui
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
