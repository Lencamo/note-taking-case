## 一、修改内容

### 1、前端

> 不用修改，端口 80

### 2、后端

> 不用修改，端口 8080

### 3、数据库

> mysql：修改密码、ip 地址

> redis：修改密码、ip 地址

## 二、部署流程

### 1、服务器部署

```sh
# 编写或上传ruoyi.sh
# vim ruoyi.sh

# 赋予权限
chmod +x *.sh

# 构建镜像
sh ruoyi.sh buildImage

# 启动数据库
sh ruoyi.sh startDatabase
# 连接数据库并上传SQL文件

# 启动项目
sh ruoyi.sh startRuoyi
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
