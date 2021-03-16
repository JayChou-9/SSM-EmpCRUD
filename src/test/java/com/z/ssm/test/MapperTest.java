package com.z.ssm.test;

import com.z.ssm.bean.Admin;
import com.z.ssm.bean.Department;
import com.z.ssm.bean.Employee;
import com.z.ssm.dao.AdminMapper;
import com.z.ssm.dao.DepartmentMapper;
import com.z.ssm.dao.EmployeeMapper;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import java.util.UUID;

/**
 * 测试dao层的工作
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-07-15:47
 */
//Spring5整合JUnit5测试 复合注解
@SpringJUnitConfig(locations = "classpath:applicationContext.xml")
public class MapperTest {

    @Autowired
    private EmployeeMapper employeeMapper;

    @Autowired
    private DepartmentMapper departmentMapper;

    @Autowired
    private AdminMapper adminMapper;

    @Autowired
    private SqlSession sqlSession;

    @Test
    public void testCRUD() {

//        Admin login = adminMapper.login(new Admin(null, "17707284921", "01234"));
//        System.out.println(login);

//        System.out.println(departmentMapper);

        //插入部门
//        departmentMapper.insertSelective(new Department(null,"开发部"));
//        departmentMapper.insertSelective(new Department(null,"测试部"));

//        employeeMapper.insertSelective(new Employee(null,"甜可可","女","tiankeke@gmail.com",2));

        //生成员工信息
//        EmployeeMapper mapper = sqlSession.getMapper(EmployeeMapper.class);
//        for (int i = 1; i <= 2000;i ++){
//            String uid = UUID.randomUUID().toString().substring(0, 5);
//            mapper.insertSelective(
//                    new Employee(null,
//                            uid,
//                            i % 2 == 0 ? "男" : "女",
//                            uid+"@gmail.com",
//                            i % 2 == 0 ? 1 : 2)
//            );
//        }
//        System.out.println("批量插入完成");
//    }
    }
}
