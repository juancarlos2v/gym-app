package com.gymapp.GymApp.Entidades;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario")
    private Long idUsuario;
    @Column(name = "dni", unique = true)
    private String dni;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private boolean aptoFisico;
    private boolean activo;
    @OneToOne
    private Turno turno;

    public Usuario(String dni, String nombre, String apellido, String email, String password, boolean activo) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.activo = activo;

    }

}
