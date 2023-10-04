## 注意事项

mysql、redis 不要进行端口映射，不然连不上！

## 1、部署流程

```sh
# 下载
yum install git -y
git clone https://gitee.com/Lencamo/RuoYi-Vue.git
cd ./RuoYi-Vue

# 部署
docker compose -f docker-compose.env.yml up -d
docker compose -f docker-compose.service.yml up -d

# 查看
docker stats
```

### 2、接口说明

&emsp;&emsp;启动容器时：

```sh
# 后端接口 5051:8080
http://43.138.42.251:5051/

# 前端接口 81:80
http://43.138.42.251:81/

# 数据库
```
