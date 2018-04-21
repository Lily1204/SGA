package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.models.DynaCache;
import com.mx.ito.sga.module.app.models.GeneralInfo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/WS-Perfilamiento-web/rest")
public class CustomService {

    @RequestMapping(value = "/obtenerInfoGeneral", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<GeneralInfo> getGeneralInfo() {
        return new ResponseEntity<GeneralInfo>(new GeneralInfo(), new HttpHeaders(), HttpStatus.OK);
    }

    @RequestMapping(value = "/cipher/decryptor", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<DynaCache> getDynaCache() {
        return new ResponseEntity<DynaCache>(new DynaCache(), new HttpHeaders(), HttpStatus.OK);
    }
}
