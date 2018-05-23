package com.mx.ito.sga.module.app.models;

public class ReportCard {

    private String name;
    private String date;
    private String career;
    private int progress;
    private int qualification;
    private Subject[] subjects;

    public ReportCard() {

    }

    public ReportCard(String name, String date, String career, int progress, int qualification, Subject[] subjects) {
        this.name = name;
        this.date = date;
        this.career = career;
        this.progress = progress;
        this.qualification = qualification;
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

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

    public int getQualification() {
        return qualification;
    }

    public void setQualification(int qualification) {
        this.qualification = qualification;
    }

    public Subject[] getSubjects() {
        return subjects;
    }

    public void setSubjects(Subject[] subjects) {
        this.subjects = subjects;
    }
}
