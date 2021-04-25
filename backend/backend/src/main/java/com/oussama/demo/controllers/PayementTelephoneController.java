package com.oussama.demo.controllers;

import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import com.oussama.demo.repository.PayementFactureRepository;
import com.oussama.demo.repository.PayementTelephoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("*")
public class PayementTelephoneController {
    @Autowired
    PayementTelephoneRepository payementTelephoneRepository;




    @PostMapping("/recharge/save")
    public void save(@RequestBody PayementTelephone payementTelephone) {
        payementTelephoneRepository.save(payementTelephone);

    }
    @DeleteMapping("/recharge/delete/{id}")
    public void delete(@PathVariable(required = true) String id) {
        PayementTelephone payementTelephone = payementTelephoneRepository.findById(Integer.parseInt(id));
        payementTelephoneRepository.delete(payementTelephone);
    }
    @GetMapping("/recharge/{id}")
    public PayementTelephone findById(@PathVariable(required = true) String id) {
        return  payementTelephoneRepository.findById(Integer.parseInt(id));
       // payementTelephoneRepository.delete(payementTelephone);
    }

    @GetMapping("/recharge/all")
    public List<PayementTelephone> findAll() {
        return payementTelephoneRepository.findAll();
    }

    @GetMapping("/recharge/all/{login}")
    public List<PayementTelephone> findAllByPerson(@PathVariable(required = true) String login) {
        return payementTelephoneRepository.findByPersonLogin(login);
    }

    @DeleteMapping("/recherge/deleteAll")
    public void deletAllrecharges(){
        payementTelephoneRepository.deleteAll();
    }
    @PutMapping("/recharge/update")
    public void updateOrSave(@RequestBody PayementTelephone payementTelephone) {
        payementTelephoneRepository.save(payementTelephone);

    }
}
