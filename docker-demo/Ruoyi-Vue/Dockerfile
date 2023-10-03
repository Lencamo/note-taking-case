# docker pull mysql:5.7.40
# docker run -p 3307:3306 --name mysql --privileged=true -e MYSQL_ROOT_PASSWORD=mysql666 -d mysql:5.7.40

# docker pull redis:6.0.8
# docker run -p 6380:6379 --name redis --privileged=true -d redis:6.0.8 --requirepass "redis666"


# yum install git -y
# git clone https://gitee.com/y_project/RuoYi-Vue.git
# cd RuoYi-Vue
# vim Dockerfile
# docker build -t ruoyi-admin:v1.0 .
# docker run -itd --name ruoyi-admin -p 5051:8080 ruoyi-admin:v1.0


# 项目打包
FROM maven:3.8.6-amazoncorretto-19
COPY ./ /ruoyi
WORKDIR /ruoyi
RUN mvn clean install -pl com.ruoyi:ruoyi-admin -am

FROM openjdk:8
RUN mkdir -p /app/ruoyi-admin
COPY --from=0 /ruoyi/ruoyi-admin/target/ruoyi-admin.jar /app/ruoyi-admin
WORKDIR /app/ruoyi-admin
CMD ["java","-jar","ruoyi-admin.jar"]
EXPOSE 8080
