package com.z.ssm.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-10-19:21
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    private String adminName;
    private String adminUsername;
    private String adminPassword;
}
