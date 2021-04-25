package com.oussama.demo.controllers;

import com.oussama.demo.beans.Operation;
import com.oussama.demo.beans.PayementTelephone;
import com.oussama.demo.repository.OperationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class OperationController {
    @Autowired
    OperationRepo operationRepo;
    @GetMapping("/operation/all")
    public List<Operation> findAll() {
        return operationRepo.findAll();
    }

    /*@GetMapping("/operation/numByPersons/{id}")
    public List<Object> findAllOperation(@PathVariable(required = true) String id) {
        return operationRepo.countOperationsByPerson(Integer.parseInt(id));
    }*/

    @GetMapping("/operation/all/{login}")
    public List<Operation> findAllByPerson(@PathVariable(required = true) String login) {
        return operationRepo.findByPersonLogin(login);
    }
}
