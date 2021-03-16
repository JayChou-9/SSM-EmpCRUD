package com.z.ssm.controller;

import com.z.ssm.bean.Admin;
import com.z.ssm.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

/**
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-10-19:18
 */
@Controller
public class AdminLoginController {

    @Autowired
    private AdminService adminService;


    @PostMapping("/adminLogin")
    public String adminLogin(Admin admin, ModelMap modelMap, HttpSession session){
        Admin a = adminService.login(admin);
        if (a != null){
            session.setAttribute("admin",a);
            return "manage";
        }
        modelMap.addAttribute("msg","用户名密码错误或不存在");
        return "forward:/index.jsp";
    }

    @GetMapping("/adminExit")
    public String exit(HttpSession session){
        System.out.println(session.getAttribute("admin"));
        session.invalidate();
        return "redirect:/index.jsp";
    }


}
