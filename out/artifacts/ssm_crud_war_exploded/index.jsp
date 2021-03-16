<%--
  Created by IntelliJ IDEA.
  User: ZhouJie
  Date: 2021/3/7
  Time: 13:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% pageContext.setAttribute("APP_PATH",request.getContextPath()); %>

<html>
  <head>
    <title>$Title$</title>
    <link rel="stylesheet" type="text/css" href="${APP_PATH}/static/css/login.css"/>
    <script type="text/javascript" src="${APP_PATH}/static/js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript">
      $(function(){
        $("#submit").click(function(){
          $(this).css({boxShadow:"none"});
        });
      });
    </script>
    <style>

    </style>
  </head>
  <body>
  <div class="background">
    <div class="input">
      <div class="logo"></div>
      <div class="form">
        <form action="${APP_PATH}/adminLogin" method="post">
          <input class="username" type="text" placeholder="用户名" name="adminUsername">
          <sapn class="block"></sapn>
          <input class="password" type="password" placeholder="密&nbsp;&nbsp;&nbsp;码" name="adminPassword">
          <sapn class="block2">${msg}</sapn>
          <input id="submit" class="submit" type="submit" value="登录">
        </form>
      </div>

    </div>
  </div>
  </body>
</html>
