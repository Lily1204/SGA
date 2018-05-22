package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.aspects.ServiceAOP;
import com.mx.ito.sga.module.app.dao.StudentDAO;
import com.mx.ito.sga.module.app.models.AcademicLoadRequest;
import com.mx.ito.sga.module.app.models.StudentData;
import com.mx.ito.sga.module.app.models.Subject;
import com.mx.ito.sga.module.app.models.SubjectsInSemester;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/student")
public class StudentService {

    private StudentDAO studentDAO;

    {
        studentDAO = new StudentDAO();
    }

    @ServiceAOP
    @RequestMapping(value = "/subjects", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<SubjectsInSemester[]> getSubjects(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity<>(studentDAO.getSubjectsInSemester(controlNumber), new HttpHeaders(), HttpStatus.OK);
    }

    @ServiceAOP
    @RequestMapping(value = "/academic_load", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity postAcademicLoad(@RequestParam(value = "control_number") int controlNumber,
                                    @RequestBody AcademicLoadRequest request) {
        if (request.getSubjects() != null && request.getSubjects().length > 0)
            return new ResponseEntity(new HttpHeaders(), HttpStatus.OK);
        else
            return new ResponseEntity(new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

    @ServiceAOP
    @RequestMapping(value = "/basic_data", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<StudentData> getBasicData(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity<>(studentDAO.getStudentData(controlNumber), new HttpHeaders(), HttpStatus.OK);
    }
}
