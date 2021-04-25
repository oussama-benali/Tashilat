package com.oussama.demo.repository;

import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface PayementTelephoneRepository extends JpaRepository<PayementTelephone, Integer> {

    PayementTelephone findById(int id);
    List<PayementTelephone> findByPersonLogin(String login);
}
