package com.ShooStore.services;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ShooStore.dao.ShoeDao;
import com.ShooStore.models.Shoe;

@Service

public class ShoeService {

    @Autowired
    private ShoeDao shoeDao;
    public List<Shoe> getAllShoes(){
        List<Shoe> shoes = new ArrayList<>();
        shoeDao.findAll().forEach(shoes::add);
        return shoes;
    }


    public Shoe getShoeById(Integer id) {
        return shoeDao.findById(id).orElse(new Shoe());
    }


    public List<Shoe> getShoesByName(String name) {
        List<Shoe> shoes = new ArrayList<>();
        List<Shoe> list = getAllShoes();
        for(Shoe shoe : list){
            System.out.println(name);
            if(shoe.getName().startsWith(name)){
                System.out.println(shoe.getName());
                shoes.add(shoe);
            }else if(shoe.getName().equals(name)){
                System.out.println(shoe.getName());
                shoes.add(shoe);
            }else if(shoe.getName().endsWith(name)){
                System.out.println(shoe.getName());
                shoes.add(shoe);
            }
        }
        return shoes;
    }


    public Shoe save(Shoe shoe) {
        shoeDao.save(shoe);
        return shoe;

    }


    public Shoe delete(int id) {
        Shoe s = shoeDao.findById(id).orElse(new Shoe());
        shoeDao.delete(s);
        return s;

    }

}
