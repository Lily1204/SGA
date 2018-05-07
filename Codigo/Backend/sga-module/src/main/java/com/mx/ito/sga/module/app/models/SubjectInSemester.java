package com.mx.ito.sga.module.app.models;

public class SubjectInSemester {

    private int semester;
    private Subject[] subjects;

    public SubjectInSemester(int semester, Subject[] subjects) {
        this.semester = semester;
        this.subjects = subjects;
    }

    public int getSemester() {
        return semester;
    }

    public Subject[] getSubjects() {
        return subjects;
    }
}
