package com.gymapp.GymApp.Entidades;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Turno")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Clase {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String nombre;
    private String entrenador;
    private LocalDate fechaYhora;
    private Turno turno;
    private Integer precio;
    private Boolean activo;
    private int cupo;
    @ManyToMany(mappedBy = "clases")
    private Set<Usuario> usuarios = new HashSet<>();


}

