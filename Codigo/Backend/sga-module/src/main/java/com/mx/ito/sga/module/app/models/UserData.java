package com.mx.ito.sga.module.app.models;

public class UserData {

    private String id;
    private String name;
    private String lastName;
    private String carer;
    private int average;
    private int carerProgress;

    public UserData(String id, String name, String lastName, String carer, int average, int carerProgress) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.carer = carer;
        this.average = average;
        this.carerProgress = carerProgress;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getCarer() {
        return carer;
    }

    public int getAverage() {
        return average;
    }

    public int getCarerProgress() {
        return carerProgress;
    }
}
