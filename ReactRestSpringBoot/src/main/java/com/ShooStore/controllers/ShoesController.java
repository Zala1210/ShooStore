package com.ShooStore.controllers;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import com.ShooStore.services.ShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.ShooStore.models.Shoe;



@RestController
@RequestMapping(value = "/shoes")
@CrossOrigin(origins="http://localhost:3000")
public class ShoesController {
    @Autowired
    private ShoeService shoeService;
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Shoe> getAllShoes() throws IOException {

        return shoeService.getAllShoes();
    }
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public Shoe getShoeById(@PathVariable Integer id) throws IOException {
        return shoeService.getShoeById(id);

    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(value = "/name")
    public List<Shoe> getShoesByName(@RequestBody String name) throws IOException {
        if(name.endsWith("=")){
            name = name.substring(0, name.length() - 1);
        }
        System.out.println(name);
        return shoeService.getShoesByName(name);

    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping(value="/add")
    public ResponseEntity<Object> addShoe(@RequestBody Shoe shoe){
        Shoe savedShoe = shoeService.save(shoe);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(savedShoe.getId()).toUri();
        return ResponseEntity.created(location).build();
    }
    @CrossOrigin(origins="http://localhost:3000")
    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<Object> deleteShoe(@PathVariable int id){
        Shoe savedShoe = shoeService.delete(id);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(savedShoe.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

}