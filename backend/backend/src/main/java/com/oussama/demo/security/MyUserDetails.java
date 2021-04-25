package com.oussama.demo.security;

import com.oussama.demo.beans.Person;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MyUserDetails implements UserDetails {
    private String login;
    private String password;
    private boolean active;
    private List<GrantedAuthority> autorities;

    public MyUserDetails(Person user){
            this.login=user.getLogin();
            this.password=user.getPassWord();
            this.active= user.getActive();
            this.autorities=Arrays.stream(user.getRoles().split(","))
            .map(SimpleGrantedAuthority::new).collect(Collectors.toList());

    }
    public MyUserDetails(){

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return autorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

}
