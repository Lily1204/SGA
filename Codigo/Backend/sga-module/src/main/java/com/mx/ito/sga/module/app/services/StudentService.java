package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.aspects.ServiceAOP;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/student")
public class StudentService {

    @ServiceAOP
    @RequestMapping(value = "/subjects", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity getSubjects(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity(null, new HttpHeaders(), HttpStatus.OK);
    }
}
