package com.mx.ito.sga.module.app.models;

public class AddressData {
    String street;
    int number;
    String colony;
    String township;
    String town;
    String state;
    int postalCode;

    public AddressData() {

    }

    public AddressData(String street, int number, String colony, String township, String town, String state, int postalCode) {

        this.street = street;
        this.number = number;
        this.colony = colony;
        this.township = township;
        this.town = town;
        this.state = state;
        this.postalCode = postalCode;
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

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }
}
