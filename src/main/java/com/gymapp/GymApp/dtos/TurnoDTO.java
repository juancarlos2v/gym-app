package com.gymapp.GymApp.dtos;

import com.gymapp.GymApp.Entidades.Turno;

import java.time.LocalDate;

public class TurnoDTO {
    private String id;
    private String clase;
    private String entrenador;
    private LocalDate fechaYhora;
    private int cupo;

    public TurnoDTO() {
    }

    public TurnoDTO(Turno turno) {
        this.id = turno.getId();
        this.clase = turno.getClase();
        this.entrenador = turno.getEntrenador();
        this.fechaYhora = turno.getFechaYhora();
        this.cupo = turno.getCupo();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClase() {
        return clase;
    }

    public void setClase(String clase) {
        this.clase = clase;
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

    public int getCupo() {
        return cupo;
    }

    public void setCupo(int cupo) {
        this.cupo = cupo;
    }
}


