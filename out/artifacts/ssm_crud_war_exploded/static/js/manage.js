
let currenPage; //当前页
let totalPages; //总页数
let num; //总记录数
function to_page(pn){
    $.ajax({
        url:APP_PATH+"/emps",
        data:"pn="+pn,
        type:"GET",
        success:function (result){
            if (result.code === 520){
                currenPage = result.dataMessage.pageInfo.pageNum;
                totalPages = result.dataMessage.pageInfo.pages;
                num = result.dataMessage.pageInfo.total;
                build_emps_table(result);
                build_page_info(result);
                build_page_nav(result);
            }else{
                alert("后台服务器正在维护中");
            }
        }
    });
}

//构建表格信息
function build_emps_table(result){
    //清空table表格
    $("#emps_table tbody").empty();
    const emps = result.dataMessage.pageInfo.list;
    $.each(emps,function (index){
        const checkboxTd = $("<td></td>").append($("<input type='checkbox' class='checkbox check_item'/>"));
        const empIdTd = $("<td></td>").append(this.empId);
        const empNameTd = $("<td></td>").append(this.empName);
        const genderTd = $("<td></td>").append(this.gender);
        const emailTd = $("<td></td>").append(this.email);
        const deptNameTd = $("<td></td>").append(this.department.deptName);
        const editBtn = $("<button></button>").addClass("btn btn-success btn-xs edit_btn").attr("edit-id",this.empId)
            .append($("<span></span>").addClass("glyphicon glyphicon-pencil").attr("aria-hidden",true)).append("编辑");
        const deleteBtn = $("<button></button>").addClass("btn btn-danger btn-xs delete_btn").attr("delete-id",this.empId)
            .append($("<span></span>").addClass("glyphicon glyphicon-trash").attr("aria-hidden",true)).append("删除");
        $("<tr></tr>")
            .append(checkboxTd)
            .append(empIdTd)
            .append(empNameTd)
            .append(genderTd)
            .append(emailTd)
            .append(deptNameTd)
            .append($("<td></td>").append(editBtn).append("&nbsp;&nbsp;").append(deleteBtn))
            .appendTo("#emps_table tbody");
    });

}

//解析分页信息
function build_page_info(result){
    $("#page_info_area").empty();
    $("#page_info_area").append("当前"+currenPage+"页," +
        "总"+totalPages+"页,总"+num+"条记录");
}

//解析分页条
function build_page_nav(result){
    $("#page_nav_area").empty();

    let ul = $("<ul></ul>").addClass("pagination");

    let fistPageLi = $("<li></li>").append($("<a></a>").append("首页").attr("href","#"));
    let prePageLi = $("<li></li>").append($("<a></a>").append("&laquo;"));
    if (! result.dataMessage.pageInfo.hasPreviousPage){
        fistPageLi.addClass("disabled");
        prePageLi.addClass("disabled");
    }else{
        fistPageLi.click(function (){to_page(1);});
        prePageLi.click(function (){to_page(currenPage-1);});
    }
    let nextPageLi = $("<li></li>").append($("<a></a>").append("&raquo;"));
    let lastPageLi = $("<li></li>").append($("<a></a>").append("末页").attr("href","#"));
    if (! result.dataMessage.pageInfo.hasNextPage){
        nextPageLi.addClass("disabled");
        lastPageLi.addClass("disabled");
    }else{
        nextPageLi.click(function (){to_page(currenPage+1);});
        lastPageLi.click(function (){to_page(totalPages);});
    }

    //添加首页和前一页
    ul.append(fistPageLi).append(prePageLi);

    //遍历给ul添加页码提示
    $.each(result.dataMessage.pageInfo.navigatepageNums,function (index,item){
        let numLi = $("<li></li>").append($("<a></a>").append(item));
        if (currenPage === item){
            numLi.addClass("active");
        }

        numLi.click(function (){to_page(item);});

        ul.append(numLi);
    });
    //添加后一页和末页
    ul.append(nextPageLi).append(lastPageLi);
    const navEle = $("<nav></nav>").append(ul);
    navEle.appendTo("#page_nav_area");

}

//清空表单样式既内容
function reset_form(ele){
    //reset()重置方法为原生的js方法
    $(ele)[0].reset();
    $(ele).find("*").removeClass("has-error has-success");
    $(ele).find(".help-block").text("");
}

//点击新增弹出模态框
$("#emp_add_modal_btn").click(function (){
    //清除表单数据（输入的text或成功错误信息）
    reset_form("#empAddModal form");

    getDepts("#depts_add_select");
    $("#empAddModal").modal({});
});

//查出所有的部门信息
function getDepts(ele){
    $(ele).empty();
    $.ajax({
        url:APP_PATH+"/depts",
        type: "GET",
        success:function (result){
            if (result.code === 520){
                $.each(result.dataMessage.depts,function (){
                    let optionEle = $("<option></option>").append(this.deptName).attr("value",this.deptId);
                    optionEle.appendTo(ele);
                });
            }else{
                alert("目前无法添加新员工");
            }
        }
    });
}

//数据校验
function validate_add_form(){
    //员工姓名校验
    const $empName = $("#empName_add_input");
    let empName = $empName.val();
    const regName = /(^[a-zA-Z0-9_]{6,8}$)|(^[\u2E80-\u9FFF]{2,5}$)/;
    //员工email校验
    const $email = $("#email_add_input");
    let email = $email.val();
    const regEmail = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(!regName.test(empName) || !regEmail.test(email)){
        if (!regName.test(empName)){
            show_validate_msg($empName,"error","用户名只能是6-8位数字 英文 _组合,或2-5位汉字");
        }else {
            show_validate_msg($empName,"success","");
        }
        if (!regEmail.test(email)){
            show_validate_msg($email,"error","请输入合法的邮箱");
        }else {
            show_validate_msg($email,"success","");
        }
        return false;
    }
    show_validate_msg($empName,"success","");
    show_validate_msg($email,"success","");
    return true;
}

function show_validate_msg(ele,status,msg){
    //先清除当前元素的校验状态
    ele.parent().removeClass("has-success has-error");
    ele.next("span").text("");
    if (status === "success"){
        ele.parent().addClass("has-success");
        ele.next("span").text(msg);
    }else if(status === "error"){
        ele.parent().addClass("has-error");
        ele.next("span").text(msg);
    }
}
//实时校验数据库用户名是否可用
$("#empName_add_input").change(function (){
    let empName = this.value;
    if (empName !==""){
        $.ajax({
            url:APP_PATH+"/checkUser",
            data:"empName="+empName,
            type:"POST",
            success:function (result){
                if (result.code === 520){
                    show_validate_msg($("#empName_add_input"),"success","当前用户名可用");
                    $("#emp_save_btn").attr("ajax-va","success");
                }else{
                    show_validate_msg($("#empName_add_input"),"error",result.dataMessage.va_msg);
                    $("#emp_save_btn").attr("ajax-va","error");
                }
            }
        });
    }
});

//点击保存
$("#emp_save_btn").click(function (){
    //1.先对数据进行校验
    if(!validate_add_form()){
        return false;
    }
    //2.查看Ajax验证是否通过
    if ($(this).attr("ajax-va") === "error"){
        return false;
    }
    //3.再进行保存
    $.ajax({
        url:APP_PATH+"/emp",
        type: "POST",
        data:$("#empAddModal form").serialize(),
        success:function (result){
            if (result.code === 520){
                alert("添加成功");
                //员工保存成功后
                // 需要关闭模态框
                $("#empAddModal").modal('hide');
                // 然后跳到最后一页
                to_page(num); //因为分页插件配置了数据合理化，当页码过大时默认查询最后一页
                return;
            }
            //失败则显示失败信息
            //console.log(result);
            //由哪个字段的错误信息就显示哪个字段
            if (undefined !== result.dataMessage.errorFields.email){
                //显示邮箱错误信息
                show_validate_msg($("#email_add_input"),"error",result.dataMessage.errorFields.email);
            }else{
                show_validate_msg($("#empName_add_input"),"error",result.dataMessage.errorFields.empName);
            }

        }
    });
});


$(function (){
    to_page(1);
    //修改的点击事件;使用事件委托进行绑定
    $("#emps_table tbody").delegate(".edit_btn","click",function(){

        let empId = $(this).attr("edit-id");
        //查出员工信息
        getEmp(empId);
        //查出部门信息
        getDepts("#empUpdateModal select");

        //将id传递给模态框更新按钮
        $("#emp_update_btn").attr("edit-id",empId);
        //弹出修改模态框
        $("#empUpdateModal").modal({});
    });

    function getEmp(empId){
        $.ajax({
            url:APP_PATH+"/emp/"+empId,
            type:"GET",
            success:function (result){
                let empData = result.dataMessage.emp;
                $("#empName_update_input").val(empData.empName);
                $("#email_update_input").val(empData.email);
                $("#empUpdateModal input[name=gender]").val([empData.gender]);
                $("#depts_update_select option[value='"+empData.did+"']").prop("selected",true);
                //console.log(empData.did);
            }
        });
    }

    //点击更新按钮进行数据更新
    $("#emp_update_btn").click(function (){
        //验证邮箱是否合法
        const $email = $("#email_update_input");
        let email = $email.val();
        const regEmail = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (!regEmail.test(email)){
            show_validate_msg($email,"error","请输入合法的邮箱");
            return false;
        }else {
            show_validate_msg($email,"success","");
        }
        //校验完成后发生Ajax请求
        let empId = $(this).attr("edit-id");
        $.ajax({
            url:APP_PATH+"/emp/"+empId,
            data:$("#empUpdateModal form").serialize()+"&_method=PUT",
            type:"POST",
            success:function (result){
                alert(result.msg);
                $("#empUpdateModal").modal('hide');
                to_page(currenPage);
            }
        });
    });

    //员工单独删除
    $("#emps_table tbody").delegate(".delete_btn","click",function(){
        //取到员工姓名和ID
        const empName = $(this).parents("tr").find("td:eq(2)").text();
        const empId = $(this).attr("delete-id");
        //1.弹出对话框
        console.log(empName)
        if (confirm("是否要删除【"+empName+"】员工吗?")){
            $.ajax({
                url:APP_PATH+"/emp/"+empId,
                type:"POST",
                data:"_method=DELETE",
                success:function (result){
                    //反馈处理信息
                    alert(result.msg);
                    //回到本页
                    to_page(currenPage);
                }
            });
        }
    });

    //选择按钮的控制
    $("#check_all").click(function (){

        $(".check_item").prop("checked",$(this).prop("checked"));
    });
    $("#emps_table tbody").delegate(".check_item","click",function(){
        //判断当前选择中的元素是否为6个
       let flag =  $(".check_item:checked").length === $(".check_item").length;
        $("#check_all").prop("checked",flag);
    });


    //批量删除按钮
    $("#emp_delete_all_btn").click(function (){
        if ($(".check_item:checked").length === 0){
            alert("请选择需要删除的员工");
            return false;
        }
        let empNames = "";
        let ids = "";
        $.each($(".check_item:checked"),function (){
            empNames += $(this).parents("tr").find("td:eq(2)").text()+",";
            ids += $(this).parents("tr").find("td:eq(1)").text()+"-";
        });
        //去除多余的,
        empNames = empNames.substring(0,empNames.length-1);
        //去除多余的-
        ids = ids.substring(0,ids.length-1);
        if (confirm("确认删除【"+empNames+"】员工吗?")){
            $.ajax({
                url:APP_PATH+"/emp/"+ids,
                type:"POST",
                data:"_method=DELETE",
                success:function (result){
                    alert(result.msg);
                    //回到当前页码
                    to_page(currenPage);
                }
            });
        }
    });

    $(".exit").click(function (){
         return confirm("是否注销当前用户?");
    });

});


