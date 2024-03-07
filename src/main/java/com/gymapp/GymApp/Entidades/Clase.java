package com.gymapp.GymApp.Entidades;


import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String entrenador;
    private LocalDateTime  fechaYhora;
    private Turno turno;
    private Integer precio;
    private Boolean activo;
    private int cupo;
    @ManyToMany(mappedBy = "clases")
    private Set<Usuario> usuarios = new HashSet<>();


}

