package com.oussama.demo.controllers;

import com.oussama.demo.beans.Operation;
import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import com.oussama.demo.beans.Person;
import com.oussama.demo.repository.OperationRepo;
import com.oussama.demo.repository.PayementFactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
public class PayementFactureController {

    @Autowired
    PayementFactureRepository payementFactureRepository;




    @PostMapping("/facture/save")
    public void save(@RequestBody PayementFacture payementFacture) {
        payementFactureRepository.save(payementFacture);

    }
    @DeleteMapping("/facture/delete/{id}")
    public void delete(@PathVariable(required = true) String id) {
        PayementFacture payementFacture = payementFactureRepository.findById(Integer.parseInt(id));
        payementFactureRepository.delete(payementFacture);
    }

    @GetMapping("/facture/all")
    public List<PayementFacture> findAll() {
        return payementFactureRepository.findAll();
    }

    @GetMapping("/facture/all/{login}")
    public List<PayementFacture> findAllByPerson(@PathVariable(required = true) String login) {
        return payementFactureRepository.findByPersonLogin(login);
    }
    @PutMapping("/facture/update")
    public void updateOrSave(@RequestBody PayementFacture payementFacture) {
        payementFactureRepository.save(payementFacture);

    }

    }
