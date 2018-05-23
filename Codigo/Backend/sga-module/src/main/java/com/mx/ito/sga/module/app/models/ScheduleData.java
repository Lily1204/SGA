package com.mx.ito.sga.module.app.models;

public class ScheduleData {
    private String name;
    private String date;
    private String career;
    private String credits;
    private ScheduleSubject[] subjects;

    public ScheduleData() {

    }

    public ScheduleData(String name, String date, String career, String credits, ScheduleSubject[] subjects) {
        this.name = name;
        this.date = date;
        this.career = career;
        this.credits = credits;
        this.subjects = subjects;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public String getCredits() {
        return credits;
    }

    public void setCredits(String credits) {
        this.credits = credits;
    }

    public ScheduleSubject[] getSubjects() {
        return subjects;
    }

    public void setSubjects(ScheduleSubject[] subjects) {
        this.subjects = subjects;
    }
}
