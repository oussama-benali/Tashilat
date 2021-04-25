package com.oussama.demo.repository;

import com.oussama.demo.beans.Operation;
import com.oussama.demo.beans.PayementFacture;
import com.oussama.demo.beans.PayementTelephone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PayementFactureRepository extends JpaRepository<PayementFacture,Integer> {
    @Query("select f from PayementFacture f")
    List<PayementFacture> allOperations();

    PayementFacture findById(int id);
    List<PayementFacture> findByPersonLogin(String login);
}
