package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.models.UserAuth;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class UserService {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public @ResponseBody
    boolean userLogin(@RequestBody UserAuth userAuth) {
        return true;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public @ResponseBody
    HttpStatus userLogout() {
        return HttpStatus.NO_CONTENT;
    }
}
