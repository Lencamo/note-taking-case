# yum install git -y
# git clone https://gitee.com/y_project/RuoYi-Vue.git
# cd RuoYi-Vue/ruoyi-ui
# vim nginx.conf
# vim Dockerfile
# docker build -t ruoyi-ui:v1.0 .
# docker run -itd --name ruoyi-ui -p 81:80 ruoyi-ui:v1.0

# 项目打包
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