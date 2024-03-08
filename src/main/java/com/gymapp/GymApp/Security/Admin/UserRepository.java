package com.gymapp.GymApp.Security.Admin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Admin, Integer> {

    Optional<Admin> findByUsername(String adminName);

}
