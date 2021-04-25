package com.oussama.demo.repository;

import com.oussama.demo.beans.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Integer> {

    Person findById(int id);
    Person findByLogin(String username);
}
