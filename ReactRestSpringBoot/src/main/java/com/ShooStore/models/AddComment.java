package com.ShooStore.models;

import java.util.Date;

public class AddComment {

    private Integer user_id;
    private Integer shoe_id;
    private String text;
    private Date date_posted;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getShoe_id() {
        return shoe_id;
    }

    public void setShoe_id(Integer shoe_id) {
        this.shoe_id = shoe_id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate_posted() {
        return date_posted;
    }

    public void setDate_posted(Date date_posted) {
        this.date_posted = date_posted;
    }

    @Override
    public String toString() {
        return "AddComment{" +
                "user_id=" + user_id +
                ", shoe_id=" + shoe_id +
                ", text='" + text + '\'' +
                ", date_posted=" + date_posted +
                '}';
    }
}
