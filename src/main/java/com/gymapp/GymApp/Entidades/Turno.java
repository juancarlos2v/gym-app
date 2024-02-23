package com.gymapp.GymApp.Entidades;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

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
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String clase;
    private String entrenador;
    private LocalDate fechaYhora;
    private int cupo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "turno_id")
    private Usuario usuario;

}
