<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type:text/html;charset=utf-8");
    #1、从前端拿来数据

    $phone = @$_POST["phone"];
    $txt = @$_POST["txt"];
    if($phone == "" || $txt == ""){
        die("参数不全");
    }
    #2、把数据放入到数据库之中

    // 1、如何连接数据库
    // mysql_connect(servername,username,password);
                    // 服务名    用户名     密码
    $con=mysql_connect("localhost","root","123456");
    // echo $con;
    // if($con){
    //     echo "数据库连接成功";
    // }

    if(!$con){
        die("数据库连接失败");
    }
    
    // 向某一个表之中写入一些东西
    // 1、选中数据库
    mysql_select_db("userlist",$con);

    // 判定是否存在相同用户名
    // 查找：
    // select 要查找的字段名 from 表名 where 条件;
     //解决数据库中文乱码问题
     mysql_query('SET NAMES UTF8');
    $result=mysql_query("SELECT phone,txt FROM detaillist WHERE phone='$phone'");
    // echo $result;
    //注册加密用MD5 登陆也是md5
    $password=md5($txt);
    while($row=mysql_fetch_array($result)){
        // echo json_encode($row)."<br>";
        // echo json_encode($row);
        if($row['password']===$password){
            die ("登录成功");
        }else{
            die("登陆失败");
        }
    }
    echo mysql_error();
    echo "登录失败";
?>