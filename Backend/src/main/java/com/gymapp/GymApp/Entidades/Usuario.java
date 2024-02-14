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

<<<<<<< Updated upstream
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String dni;
=======
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario")
    private Long idUsuario;
    @Column(name = "dni", unique = true)
    private String dni;;
>>>>>>> Stashed changes
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private boolean aptoFisico;
    private boolean activo;
    @OneToOne
    private Turno turno;



}
