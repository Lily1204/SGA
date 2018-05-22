package com.mx.ito.sga.module.app.models;

public class UserData {

    private int id;
    private String name;
    private String lastName;
    private String carer;
    private int average;
    private int carerProgress;

    public UserData() {
    }

    public UserData(int id, String name, String lastName, String carer, int average, int carerProgress) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.carer = carer;
        this.average = average;
        this.carerProgress = carerProgress;
    }

    public int getId() {
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
