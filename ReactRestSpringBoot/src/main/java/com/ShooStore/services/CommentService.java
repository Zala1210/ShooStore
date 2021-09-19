package com.ShooStore.services;

import com.ShooStore.dao.CommentDao;
import com.ShooStore.dao.ShoeCommentDao;
import com.ShooStore.dao.UserDao;
import com.ShooStore.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentDao commentDao;
    @Autowired
    UserDao userDao;
    @Autowired
    private ShoeCommentDao shoeCommentDao;
    @Autowired
    UserService userService;

    @Autowired
    ShoeCommentService shoeCommentService;
    public List<Comment> getAllComments(){

        List<Comment> comments = new ArrayList<>();
        commentDao.findAll().forEach(comments::add);

        return comments;
    }
    public Comment getCommentById(Integer id) {

        return commentDao.findById(id).orElse(new Comment());
    }
    public Comment save(Comment comment) {
        commentDao.save(comment);
        return comment;

    }
    public List<Comment> getCommentsByShoeId( int id){
        List<ShoeComment> l =  new ArrayList<>();
        shoeCommentDao.findAll().forEach(l::add);
        List<Comment> comments = new ArrayList<>();
        for(ShoeComment mc : l){
            if(mc.getShoe_id() == id){

                Comment comment =  getCommentById(mc.getComment_id());
                User u = userService.getUserById(mc.getUser_id());
                comment.setCommentedBy(u.getUsername());
                System.out.println(comment.toString());
                comments.add(comment);
            }
        }
        return comments;
    }

    public Comment save(AddComment c) {
        Comment newComment = new Comment();
        newComment.setText(c.getText());
        newComment.setUser_id(c.getUser_id());
        newComment.setDate_posted(new Date());

        Integer id =commentDao.save(newComment).getComment_id();
        ShoeComment newShoeComment = new ShoeComment();
        newShoeComment.setShoe_id(c.getShoe_id());
        newShoeComment.setComment_id(id);
        newShoeComment.setUser_id(c.getUser_id());

        shoeCommentDao.save(newShoeComment);
        return newComment;

    }
    public Comment delete(int id) {

        shoeCommentService.delete(id);
        Comment c = commentDao.findById(id).orElse(new Comment());
        commentDao.delete(c);
        return c;

    }
}