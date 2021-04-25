package com.oussama.demo.repository;

import com.oussama.demo.beans.Operation;
import com.oussama.demo.beans.PayementTelephone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OperationRepo extends JpaRepository<Operation,Integer> {
    Operation findById(int id);
    List<Operation> findByPersonLogin(String login);


     // @Query("select count(*) as numberOfOperation,o.person from Operation AS o group by o.person")
   // List<Object> countOperationsByPerson( int id);



}
