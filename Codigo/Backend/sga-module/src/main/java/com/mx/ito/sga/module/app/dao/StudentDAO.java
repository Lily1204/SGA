package com.mx.ito.sga.module.app.dao;

import com.mx.ito.sga.module.app.models.Subject;
import com.mx.ito.sga.module.app.models.SubjectInSemester;

import java.util.HashMap;

public class StudentDAO {

    private static HashMap<Integer, SubjectInSemester[]> subjectsInSemester;

    {
        subjectsInSemester = new HashMap<>();
        Subject subjectsFirst[] = new Subject[]{
                new Subject("1g1", "Calculo Diferencial", 5, 80),
                new Subject("1g2", "Matematicas Discretas", 5, 90),
                new Subject("1g3", "Calculo Diferencial", 5, 80)
        };
        SubjectInSemester subjectsInSemester[] = new SubjectInSemester[]{new SubjectInSemester(1, subjectsFirst)};
    }
}
