package com.z.ssm.bean;

import lombok.*;

import javax.validation.constraints.Pattern;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Employee {
    private Integer empId;

    @Pattern(regexp = "(^[a-zA-Z0-9_]{6,8}$)|(^[\\u2E80-\\u9FFF]{2,5}$)",
            message = "用户名必须是唯一的或是6-8位数字 英文 _组合,或2-5位汉字")
    private String empName;

    private String gender;

    @Pattern(regexp = "^([a-zA-Z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$",
            message = "请输入合法的邮箱信息")
    private String email;

    private Integer dId;

    private Department department;

    public Employee(Integer empId, String empName, String gender, String email, Integer dId) {
        this.empId = empId;
        this.empName = empName;
        this.gender = gender;
        this.email = email;
        this.dId = dId;
    }
}