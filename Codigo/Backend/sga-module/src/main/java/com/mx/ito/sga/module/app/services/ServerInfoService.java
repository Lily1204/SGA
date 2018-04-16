package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.aspects.ServiceAOP;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class ServerInfoService {

    @ServiceAOP
    @RequestMapping(value = "/server-info", method = RequestMethod.GET)
    public @ResponseBody
    String getServerInfo(@RequestParam(value = "name", defaultValue = "v:") String name) {
        return "Server Online " + name;
    }
}
