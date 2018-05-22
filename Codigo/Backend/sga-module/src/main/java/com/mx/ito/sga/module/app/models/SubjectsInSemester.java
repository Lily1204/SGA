package com.mx.ito.sga.module.app.models;

public class SubjectsInSemester {

    private int studentId;
    private int semester;
    private Subject[] subjects;

    public SubjectsInSemester() {
    }

    public SubjectsInSemester(int studentId, int semester, Subject[] subjects) {
        this.studentId = studentId;
        this.semester = semester;
        this.subjects = subjects;
    }

    public int getStudentId() {
        return studentId;
    }

    public int getSemester() {
        return semester;
    }

    public Subject[] getSubjects() {
        return subjects;
    }
}
