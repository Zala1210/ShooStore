package com.ShooStore.dao;

import com.ShooStore.models.Comment;
import com.ShooStore.models.Shoe;
import com.ShooStore.models.ShoeComment;
import com.ShooStore.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



public interface ShoeCommentDao extends CrudRepository<ShoeComment,Integer> {
    @Query(value = "SELECT * FROM resource_table WHERE File_id=?1", nativeQuery = true)
    ShoeComment findResource(Integer i);
}

