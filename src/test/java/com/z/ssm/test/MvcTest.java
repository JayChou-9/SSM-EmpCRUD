package com.z.ssm.test;

import com.github.pagehelper.PageInfo;
import com.z.ssm.bean.Admin;
import com.z.ssm.bean.Employee;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * 使用Spring测试模块的测试请求功能，测试crud请求的准确性
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-10-20:03
 */
@WebAppConfiguration
//Spring5整合JUnit5测试 复合注解
@SpringJUnitConfig(locations = {"classpath:applicationContext.xml","classpath:spring-mvc.xml"})
public class MvcTest {

//    //传入Springmvc的ioc
//    @Autowired
//    private WebApplicationContext context;
//
//    //虚拟mvc请求，获取到处理结果
//    private MockMvc mockMvc;
//
//    //junit5 Before已经被BeforeEach所代替
//    @BeforeEach
//    public void initMockMvc(){
//         mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
//    }
//
//    @Test
//    public void testPage() throws Exception {
//
//        //模拟请求拿到返回值
//        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/emps")
//                .param("pn", "1")).andReturn();
//
//        //请求成功后，请求域中会有pageInfo对象
//        MockHttpServletRequest request = result.getRequest();
//        PageInfo pi = (PageInfo)request.getAttribute("pageInfo");
//
//        System.out.println("当前页面: "+pi.getPageNum());
//        System.out.println("总页码: "+pi.getPages());
//        System.out.println("总记录数: "+pi.getTotal());
//        System.out.println("在页面需要连续显示的页码");
//        int[] nums = pi.getNavigatepageNums();
//        for (int i : nums) System.out.print(" "+i);
//        System.out.println();
//        //获取员工数据
//        List<Employee> list = pi.getList();
//        list.forEach(employee ->
//            System.out.println("ID: "+employee.getEmpId()+" Name: "+employee.getEmpName()));
//
//    }
}
