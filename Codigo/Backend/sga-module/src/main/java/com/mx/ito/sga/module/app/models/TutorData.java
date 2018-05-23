package com.mx.ito.sga.module.app.models;

public class TutorData {
    private String name;
    private String lastName;
    private String mothersLastName;
    private String email;
    private String telephone;
    private String street;
    private int number;
    private String colony;
    private String township;
    private int postalCode;
    private String workCenter;
    private String kinship;

    public TutorData() {
    }

    public TutorData(String name, String lastName,
                     String mothersLastName,
                     String email, String telephone,
                     String street, int number,
                     String colony, String township,
                     int postalCode, String workCenter,
                     String kinship) {
        this.name = name;
        this.lastName = lastName;
        this.mothersLastName = mothersLastName;
        this.email = email;
        this.telephone = telephone;
        this.street = street;
        this.number = number;
        this.colony = colony;
        this.township = township;
        this.postalCode = postalCode;
        this.workCenter = workCenter;
        this.kinship = kinship;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMothersLastName() {
        return mothersLastName;
    }

    public void setMothersLastName(String mothersLastName) {
        this.mothersLastName = mothersLastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getColony() {
        return colony;
    }

    public void setColony(String colony) {
        this.colony = colony;
    }

    public String getTownship() {
        return township;
    }

    public void setTownship(String township) {
        this.township = township;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public String getWorkCenter() {
        return workCenter;
    }

    public void setWorkCenter(String workCenter) {
        this.workCenter = workCenter;
    }

    public String getKinship() {
        return kinship;
    }

    public void setKinship(String kinship) {
        this.kinship = kinship;
    }
}
