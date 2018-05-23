package com.mx.ito.sga.module.app.models;

public class ScheduleSubject {
    private String subject;
    private String hour;
    private ScheduleRoom room;

    public ScheduleSubject() {
    }

    public ScheduleSubject(String subject, String hour, ScheduleRoom room) {
        this.subject = subject;
        this.hour = hour;
        this.room = room;

    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public ScheduleRoom getRoom() {
        return room;
    }

    public void setRoom(ScheduleRoom room) {
        this.room = room;
    }
}
