package com.ShooStore.models;

import javax.persistence.*;


import java.util.Date;

        import javax.persistence.Column;
        import javax.persistence.Entity;
        import javax.persistence.GeneratedValue;
        import javax.persistence.GenerationType;
        import javax.persistence.Id;
        import javax.persistence.Table;

@Entity
@Table(name = "shoe_comment")
public class ShoeComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "shoe_comment_id")
    private Integer shoe_comment_id;

    @Column(name = "shoe_id")
    private int shoe_id;

    @Column(name = "comment_id")
    private Integer comment_id;

    @Column(name = "user_id")
    private int user_id;

    public int getComment_id() {
        return comment_id;
    }

    public void setComment_id(Integer comment_id) {
        this.comment_id = comment_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getShoe_id() {
        return shoe_id;
    }

    public void setShoe_id(int shoe_id) {
        this.shoe_id = shoe_id;
    }


    @Override
    public String toString() {
        return "ShoeComment{" +
                "comment_id=" + comment_id +
                ", shoe_id=" + shoe_id +
                ", comment_id=" + comment_id +
                ", user_id=" + user_id +
                '}';
    }
}