package com.gymapp.GymApp.Entidades;

import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;

@Entity
public class Usuario {

    @Id
    private String id;

}
