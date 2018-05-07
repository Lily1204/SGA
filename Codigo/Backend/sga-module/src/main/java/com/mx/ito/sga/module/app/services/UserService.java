package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.aspects.ServiceAOP;
import com.mx.ito.sga.module.app.dao.UserDAO;
import com.mx.ito.sga.module.app.models.UserData;
import com.mx.ito.sga.module.app.models.UserAuthRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class UserService {

    private UserDAO userDAO;

    {
        userDAO = new UserDAO();
    }

    @ServiceAOP
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<UserData> userLogin(@RequestBody UserAuthRequest userAuthRequest) {
        UserData userData = userDAO.getUserByControlNumberAndPassword(userAuthRequest.getControlNumber(), userAuthRequest.getPassword());
        if (userData != null) {
            return new ResponseEntity<>(userData, new HttpHeaders(),
                    HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.UNAUTHORIZED);
        }
    }
}
