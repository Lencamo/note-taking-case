FROM maven:3.8.6-amazoncorretto-19
COPY ./ /ruoyi
WORKDIR /ruoyi
RUN mvn clean install -pl com.ruoyi:ruoyi-admin -am

FROM openjdk:8
RUN mkdir -p /app/ruoyi-admin
COPY --from=0 /ruoyi/ruoyi-admin/target/ruoyi-admin.jar /app/ruoyi-admin
WORKDIR /app/ruoyi-admin

CMD ["java","-jar","ruoyi-admin.jar"]
# ENTRYPOINT [ "java","-jar","ruoyi-admin.jar","--spring.profiles.active=prod" ]

EXPOSE 8080
