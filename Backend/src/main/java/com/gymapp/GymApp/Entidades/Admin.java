package com.gymapp.GymApp.Entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "admin")
public class Admin {

    @Id

    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")

    @GeneratedValue(strategy = GenerationType.AUTO)

    private String id;


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAdmin")
    private Long idAdmin;

    private String nombre;
    private String password;

}
