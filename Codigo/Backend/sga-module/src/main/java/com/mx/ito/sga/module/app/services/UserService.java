package com.mx.ito.sga.module.app.services;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserService {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public @ResponseBody
    boolean userLogin() {
        return true;
    }
}
