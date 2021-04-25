package com.oussama.demo.repository;

import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import com.oussama.demo.beans.TransfertArgent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransfertArgentRepository extends JpaRepository<TransfertArgent,Integer> {

    TransfertArgent findById(int id);

    List<TransfertArgent> findByPersonLogin(String login);
}
