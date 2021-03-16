package com.z.ssm.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * 通用的返回类
 * @author ZHOUJIEStart
 * Email:z2371099771@163.com
 * @create 2021-03-11-11:41
 */
@Data
public class Message {

    private int code; //状态码 520-成功 666-失败

    private String msg; //提示信息

    private Map<String,Object> dataMessage = new HashMap<>(); //用户要返回给浏览器的数据

    public static Message success(){
        Message result = new Message();
        result.setCode(520);
        result.setMsg("处理成功");
        return result;
    }

    public static Message fail(){
        Message result = new Message();
        result.setCode(666);
        result.setMsg("处理失败");
        return result;
    }

    public Message add(String key,Object value){
        this.dataMessage.put(key,value);
        return this;
    }
}
