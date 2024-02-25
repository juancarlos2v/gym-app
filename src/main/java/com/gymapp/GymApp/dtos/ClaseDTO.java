package com.gymapp.GymApp.dtos;

import com.gymapp.GymApp.Entidades.Clase;
import com.gymapp.GymApp.Entidades.Turno;

import java.time.LocalDate;

public class ClaseDTO {
    private String id;
    private String nombre;
    private String entrenador;
    private LocalDate fechaYhora;
    private Turno turno;
    private Integer precio;
    private Boolean activo;
    private int cupo;

    public ClaseDTO() {
    }

    public ClaseDTO(Clase clase) {
        this.id = clase.getId();
        this.nombre = clase.getNombre();
        this.entrenador = clase.getEntrenador();
        this.fechaYhora = clase.getFechaYhora();
        this.turno=clase.getTurno();
        this.precio= clase.getPrecio();
        this.activo=clase.getActivo();
        this.cupo = clase.getCupo();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEntrenador() {
        return entrenador;
    }

    public void setEntrenador(String entrenador) {
        this.entrenador = entrenador;
    }

    public LocalDate getFechaYhora() {
        return fechaYhora;
    }

    public void setFechaYhora(LocalDate fechaYhora) {
        this.fechaYhora = fechaYhora;
    }

    public Turno getTurno() {
        return turno;
    }

    public void setTurno(Turno turno) {
        this.turno = turno;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public int getCupo() {
        return cupo;
    }

    public void setCupo(int cupo) {
        this.cupo = cupo;
    }
}


