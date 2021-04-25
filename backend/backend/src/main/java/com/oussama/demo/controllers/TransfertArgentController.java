package com.oussama.demo.controllers;

import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import com.oussama.demo.beans.TransfertArgent;
import com.oussama.demo.repository.PayementTelephoneRepository;
import com.oussama.demo.repository.TransfertArgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TransfertArgentController {
    @Autowired
    TransfertArgentRepository transfertArgentRepository;




    @PostMapping("/transfert/save")
    public void save(@RequestBody TransfertArgent transfertArgent) {
        transfertArgentRepository.save(transfertArgent);

    }
    @DeleteMapping("/transfert/delete/{id}")
    public void delete(@PathVariable(required = true) String id) {
        TransfertArgent transfertArgent = transfertArgentRepository.findById(Integer.parseInt(id));
        transfertArgentRepository.delete(transfertArgent);
    }
    @GetMapping("/transfert/{id}")
    public TransfertArgent findById(@PathVariable(required = true) String id) {
        return  transfertArgentRepository.findById(Integer.parseInt(id));
        // payementTelephoneRepository.delete(payementTelephone);
    }
    @GetMapping("/transfert/all/{login}")
    public List<TransfertArgent> findAllByPerson(@PathVariable(required = true) String login) {
        return transfertArgentRepository.findByPersonLogin(login);
    }

    @GetMapping("/transfert/all")
    public List<TransfertArgent> findAll() {
        return transfertArgentRepository.findAll();
    }

    @PutMapping("/transfert/update")
    public void updateOrSave(@RequestBody TransfertArgent transfertArgent) {
        transfertArgentRepository
                .save(transfertArgent);

    }
}
