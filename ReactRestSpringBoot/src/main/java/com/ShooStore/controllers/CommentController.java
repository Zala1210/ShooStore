package com.ShooStore.controllers;

import com.ShooStore.services.CommentService;
import com.ShooStore.services.ShoeService;
import com.ShooStore.models.AddComment;
import com.ShooStore.models.Comment;
import com.ShooStore.models.Shoe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/comments")
@CrossOrigin(origins="http://localhost:3000")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public List<Comment> getCommentsByShoeId(@PathVariable Integer id) throws IOException {
        System.out.println(id);
        return commentService.getCommentsByShoeId(id);
    }
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Comment addComment(@RequestBody AddComment payload) throws IOException {
        System.out.println(payload.toString());
        Integer a = 1;
        return commentService.save(payload);
    }
    @CrossOrigin(origins="http://localhost:3000")
    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<Object> deleteComment(@PathVariable int id){
        Comment deletedComment = commentService.delete(id);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(deletedComment.getComment_id()).toUri();
        return ResponseEntity.created(location).build();
    }
}
