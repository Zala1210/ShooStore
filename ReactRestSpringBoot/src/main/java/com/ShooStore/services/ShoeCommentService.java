package com.ShooStore.services;

import com.ShooStore.dao.ShoeCommentDao;
import com.ShooStore.models.Comment;
import com.ShooStore.models.Shoe;
import com.ShooStore.models.ShoeComment;
import com.ShooStore.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShoeCommentService {
    @Autowired
    ShoeCommentDao shoeCommentDao;
    public List<ShoeComment> getAllShoeComments(){
        List<ShoeComment> l =  new ArrayList<>();
        shoeCommentDao.findAll().forEach(l::add);
        return l;
    }
    public ShoeComment delete(int id){
        List<ShoeComment> list = getAllShoeComments();
        for(ShoeComment sc : list){
            if(sc.getComment_id() == id){
                ShoeComment deletedShoeComment = sc;
                shoeCommentDao.delete(sc);
                return sc;
            }
        }
        return  null;
    }
}
