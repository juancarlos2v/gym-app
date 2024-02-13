package com.gymapp.GymApp.Entidades;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="Turno")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String clase;
    private String entrenador;
    private LocalDate fechaYhora;
    private int cupo;

    @OneToOne
    private Usuario usuario;

}
