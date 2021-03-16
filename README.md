# 项目介绍

项目名称：员工管理系统

项目描述：基于浏览器实现的员工管理系统，可以进行管理员登入退出对员工的CRUD

项目架构：Maven+Spring+SpringMVC+MyBatis+HTML+CSS+jQuery+Bootstrap3

技术要点：

​	1）基础数据的CRUD

​	2）MyBatis-generator逆向工程和分页插件 PageHelper

​	3）使用RESTful风格

​	4）数据库多对一关系连表查询

​	5）基于Bootstarp3的后台页面搭建

项目简介：服务器启动后，拦截器对指定的请求地址进行拦截，判断session域中是否存在管理员信息，管理员需要使用账号登入系统，将账号信息保存到session域中，否则重定向到登入界面。后端控制器将所有的请求的结果都封装为一个自定义类然后通过Json数据格式返回给前端界面，管理员成功登入后通过发送Ajax请求使用分页插件技术查询获取到所有员工的信息，可以对所有员工进行一系列的CRUD操作，员工添加操作时，先进行jQuery前端校验，然后发送Ajax异步请求对用户名进行实时校验，最后在后端使用JSR303校验法则保证数据的安全性，修改员工时，进行了员工信息的回显再修改数据。最后通过注销用户销毁session域中的对象。

## 效果预览
登入页面
![Image text](https://github.com/Z-Kanan/SSM-EmpCRUD/blob/master/login.png)
管理页面
![Image text](https://github.com/Z-Kanan/SSM-EmpCRUD/blob/master/manage.png)
修改页面
![Image text](https://github.com/Z-Kanan/SSM-EmpCRUD/blob/master/update.png)

## 使用注意
### 1.开发工具的选择
请使用 IntelliJ IDEA, 尽量不要用 Eclipse/MyEclipse，使用前者项目起不来我可以帮忙解决，后者直接忽视(理论上可以起)

### 2.确保你安装了 Maven
从官网下载 Maven，并配置阿里云镜像，IDEA 或 Eclipse 里需要设置 Maven 的 settings.xml 。

### 3.请安装 Lombok 插件
代码中多次使用 @Data 注解，请确保你的 IDE 安装了 Lombok 插件，否则找不到 getter/setter 方法。如果你的 lombok 无效，可能是 pom.xml 里的 lombok 版本和你安装的lombok 版本相差较大。
无论是 Eclipse 还是 IDEA 都需要安装 lombok。

### 4.如何运行
代码克隆下来后，直接跑，肯定无法运行，没有启动类，需要通过 tomcat 来运行，无论是 Eclipse 还是 IDEA 都很容易。还有因为数据库、tomcat服务器、maven仓库jar包、版本不同或者缺失，还有数据库的数据为本地数据请根据文档中的sql语句生成指定数据库




