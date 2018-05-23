package com.mx.ito.sga.module.app.models;

public class Subject {
    private String code;
    private String name;
    private int credits;
    private int qualification;

    public Subject() {
    }

    public Subject(String code, String name, int credits, int qualification) {
        this.code = code;
        this.name = name;
        this.credits = credits;
        this.qualification = qualification;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public int getCredits() {
        return credits;
    }

    public int getQualification() {
        return qualification;
    }
}
