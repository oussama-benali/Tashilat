package com.oussama.demo.controllers;




import com.oussama.demo.beans.Person;
import com.oussama.demo.models.AuthenticationRequest;
import com.oussama.demo.models.AuthenticationResponse;
import com.oussama.demo.repository.PersonRepository;
import com.oussama.demo.security.MyUserDetailsService;
import com.oussama.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PersonController {
    @Autowired
    private PersonRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;


    @PostMapping("/save")
    public void save(@RequestBody Person person) {
        userRepository.save(person);

    }
    @GetMapping("/{name}")
    public Person getByLogin(@PathVariable(required = true) String name){
        return userRepository.findByLogin(name);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/autenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable(required = true) String id) {
        Person user = userRepository.findById(Integer.parseInt(id));
        userRepository.delete(user);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/admin/all")
    public List<Person> findAll() {
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update")
    public void updateOrSave(@RequestBody Person person) {
        userRepository.save(person);

    }


}

