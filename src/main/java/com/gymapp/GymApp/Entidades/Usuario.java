package com.gymapp.GymApp.Entidades;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

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
    //private boolean aptoFisico;
    private boolean activo;
    //@OneToMany(mappedBy = "usuario",fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuario_clase",
            joinColumns = @JoinColumn(name = "fk_usuario", nullable = false),
            inverseJoinColumns = @JoinColumn(name="fk_clase", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Clase> clases = new HashSet<>();

    public Usuario(String dni, String nombre, String apellido, String email, String password, Boolean activo) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.activo = activo;

    }

}
