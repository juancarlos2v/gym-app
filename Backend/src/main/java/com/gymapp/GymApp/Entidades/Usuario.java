package com.gymapp.GymApp.Entidades;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="Usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Usuario {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String dni;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private boolean aptoFisico;
    private boolean activo;
    @OneToOne
    private Turno turno;

    public Usuario(String dni, String nombre, String apellido, String email, String password,boolean activo){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.password=password;
        this.activo=activo;

    }



}
