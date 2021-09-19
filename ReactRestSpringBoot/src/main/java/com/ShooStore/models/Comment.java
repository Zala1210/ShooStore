package com.ShooStore.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name = "comment_id")
    private Integer comment_id;

    @Column(name = "text")
    private String text;

    @Column(name = "user_id")
    private int user_id;

    private String commentedBy;

    public String getCommentedBy() {
        return commentedBy;
    }

    public void setCommentedBy(String commentedBy) {
        this.commentedBy = commentedBy;
    }

    @Column(name = "date_posted")
    private Date date_posted;

    public Integer getComment_id() {
        return this.comment_id;
    }

    public void setComment_id(Integer comment_id) {
        this.comment_id = comment_id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }



    public Date getDate_posted() {
        return date_posted;
    }

    public void setDate_posted(Date date_posted) {
        this.date_posted = date_posted;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "comment_id=" + comment_id +
                ", text='" + text + '\'' +
                ", user_id=" + user_id +
                ", commentedBy='" + commentedBy + '\'' +
                ", date_posted=" + date_posted +
                '}';
    }
}
