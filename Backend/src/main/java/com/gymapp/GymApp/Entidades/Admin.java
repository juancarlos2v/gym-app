package com.gymapp.GymApp.Entidades;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="Administrador")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Admin {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String nombre;
    private String password;



}
