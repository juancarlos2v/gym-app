package com.gymapp.GymApp.Entidades;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private String telefono;
    private String telefonoAuxiliar;
    private LocalDate fechaDeNacimiento;
    @Column(name = "fecha_vencimiento")
    private LocalDateTime fechaVencimiento;
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_membresia")
    private TipoMembresia tipoMembresia;
    private boolean aptoFisico;
    private boolean activo;
    
    
    //@OneToMany(mappedBy = "usuario",fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuario_clase",
            joinColumns = @JoinColumn(name = "fk_usuario", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "fk_clase", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Clase> clases = new HashSet<>();

    public Usuario(String dni, String nombre) {
        this.dni = dni;
        this.nombre = nombre;
    }

}
