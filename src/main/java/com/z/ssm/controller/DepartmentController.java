package com.z.ssm.controller;

import com.z.ssm.bean.Department;
import com.z.ssm.bean.Message;
import com.z.ssm.dao.DepartmentMapper;
import com.z.ssm.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-12-9:25
 */
@Controller
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    /**
     * 返回所有的部门信息
     * @return
     */
    @ResponseBody
    @GetMapping("/depts")
    public Message getDepts(){
        List<Department> departments = departmentService.getDepts();
        return departments == null ? Message.fail() : Message.success().add("depts",departments);
    }
}
