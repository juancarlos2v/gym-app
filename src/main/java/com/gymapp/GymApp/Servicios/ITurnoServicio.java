package com.gymapp.GymApp.Servicios;


import com.gymapp.GymApp.Entidades.Turno;

import java.util.Set;

public interface ITurnoServicio {

    Set<Turno> listarTurnos();
    Turno buscarTurno(Long id);
    Turno agregarTurno(Turno turno);
    void modificarTurno(Turno turno);
    Turno reservarTurno(Turno turno);
    void cancelarTurno(Long id);
    void guardarTurno(Turno turno);

}
