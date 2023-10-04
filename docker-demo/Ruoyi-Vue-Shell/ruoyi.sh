#! /bin/bash

buildImage()
{
  yum install git -y
  git clone https://gitee.com/Lencamo/RuoYi-Vue.git
  cd ./RuoYi-Vue/ruoyi-ui
  docker build -t ruoyi-ui:v1.0 .
  cd ..
  docker build -t ruoyi-admin:v1.0 .
  docker pull mysql:5.7.40
  docker pull redis:6.0.8
}

startDatabase() {
  docker run -p 3307:3306 --name mysql --privileged=true -e MYSQL_ROOT_PASSWORD=mysql666 -d mysql:5.7.40
  docker run -p 6380:6379 --name redis --privileged=true -d redis:6.0.8 --requirepass "redis666"
  # docker-compose up -d
}

startRuoyi()
{
  docker run -itd --name ruoyi-ui -p 81:80 ruoyi-ui:v1.0
  docker run -itd --name ruoyi-admin -p 5051:8080 ruoyi-admin:v1.0
  # docker-compose up -d
}

help()
{
  echo "步骤1（构建镜像）：sh ruoyi.sh buildImage"
  echo "步骤2（启动数据库）：sh ruoyi.sh startDatabase"
  echo "步骤3：连接mysql数据库并上传SQL文件"
  echo "步骤4（启动项目）：sh ruoyi.sh startRuoyi"
	exit 1
}

case $1 in
  "buildImage") buildImage
  ;;
  "startDatabase") startDatabase
  ;;
  "startRuoyi") startRuoyi
  ;;
  *) help
  ;;
esac