package com.oussama.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {

    @GetMapping("/")
    public String home(){
         return ("<h1> Welcome </h1>");
         }
    @GetMapping("/user")
    public String user(){
        return ("<h1> Welcome User </h1>");
    }

    @GetMapping("/user/page1")
        public String page1(){return("<h1> page1</h1>");
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/admin")
    public String admin(){
        return ("<h1> Welcome Admin </h1>");
    }

}
