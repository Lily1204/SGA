package com.mx.ito.sga.module.app.models;

public class StudentData {

    private String name;
    private String middleName;
    private String lastName;
    private String mothersLastName;
    private String career;
    private int semester;
    private String birthday;
    private String placeOfBirth;
    private String stateOfBirth;
    private String bloodType;
    private String email;
    private String telephone;
    private TutorData father;
    private TutorData mother;
    private TutorData tutor;

    public StudentData() {
    }

    public StudentData(String name, String middleName,
                       String lastName, String mothersLastName,
                       String career, int semester, String birthday,
                       String placeOfBirth, String stateOfBirth,
                       String bloodType, String email, String telephone,
                       TutorData father, TutorData mother,
                       TutorData tutor) {
        this.name = name;

        this.middleName = middleName;
        this.lastName = lastName;
        this.mothersLastName = mothersLastName;
        this.career = career;
        this.semester = semester;
        this.birthday = birthday;
        this.placeOfBirth = placeOfBirth;
        this.stateOfBirth = stateOfBirth;
        this.bloodType = bloodType;
        this.email = email;
        this.telephone = telephone;
        this.father = father;
        this.mother = mother;
        this.tutor = tutor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
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

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public String getStateOfBirth() {
        return stateOfBirth;
    }

    public void setStateOfBirth(String stateOfBirth) {
        this.stateOfBirth = stateOfBirth;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
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

    public TutorData getFather() {
        return father;
    }

    public void setFather(TutorData father) {
        this.father = father;
    }

    public TutorData getMother() {
        return mother;
    }

    public void setMother(TutorData mother) {
        this.mother = mother;
    }

    public TutorData getTutor() {
        return tutor;
    }

    public void setTutor(TutorData tutor) {
        this.tutor = tutor;
    }
}
