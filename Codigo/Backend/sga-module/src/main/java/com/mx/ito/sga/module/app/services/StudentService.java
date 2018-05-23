package com.mx.ito.sga.module.app.services;

import com.mx.ito.sga.module.app.aspects.ServiceAOP;
import com.mx.ito.sga.module.app.dao.StudentDAO;
import com.mx.ito.sga.module.app.models.*;
import org.apache.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/student")
public class StudentService {


    private static final Logger logger = Logger.getLogger(StudentService.class);

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

    @ServiceAOP
    @RequestMapping(value = "/basic_data", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity postBasicData(@RequestParam(value = "control_number") int controlNumber,
                                 @RequestBody StudentData studentData) {
        logger.info(String.valueOf(studentData));
        studentDAO.setStudentData(controlNumber, studentData);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.OK);
    }

    @ServiceAOP
    @RequestMapping(value = "/address_data", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<AddressData> getAddressData(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity<>(studentDAO.getAddressData(controlNumber), new HttpHeaders(), HttpStatus.OK);
    }

    @ServiceAOP
    @RequestMapping(value = "/address_data", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity postAddressData(@RequestParam(value = "control_number") int controlNumber,
                                   @RequestBody AddressData addressData) {
        logger.info(String.valueOf(addressData));
        studentDAO.setAddressData(controlNumber, addressData);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.OK);
    }

    @ServiceAOP
    @RequestMapping(value = "/report_card", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ReportCard> getReportCard(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity<>(studentDAO.getReportCard(controlNumber), new HttpHeaders(), HttpStatus.OK);
    }

    @ServiceAOP
    @RequestMapping(value = "/schedule_data", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<ScheduleData> getScheduleData(@RequestParam(value = "control_number") int controlNumber) {
        return new ResponseEntity<>(studentDAO.getScheduleData(controlNumber), new HttpHeaders(), HttpStatus.OK);
    }
}
