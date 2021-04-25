package com.oussama.demo.security;

import com.oussama.demo.beans.Person;
import com.oussama.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service

public class MyUserDetailsService implements UserDetailsService {
       @Autowired
        PersonRepository personRepository;
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

       Person user= personRepository.findByLogin(userName);
       if (user==null){
           throw  new UsernameNotFoundException("Not Found " +userName);
       }
        return new MyUserDetails(user);
    }
}
