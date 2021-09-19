package com.ShooStore.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ShooStore.models.Shoe;

public interface ShoeDao extends CrudRepository<Shoe,Integer> {

    @Query(value = "SELECT * FROM resource_table WHERE File_id=?1", nativeQuery = true)
    Shoe findResource(Integer i);

}
