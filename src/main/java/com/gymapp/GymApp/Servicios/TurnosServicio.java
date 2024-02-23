package com.gymapp.GymApp.Servicios;

import com.gymapp.GymApp.Entidades.Turno;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class TurnosServicio implements ITurnoServicio{
    @Override
    public Set<Turno> listarTurnos() {
        return null;
    }

    @Override
    public Turno buscarTurno(Long id) {
        return null;
    }

    @Override
    public Turno agregarTurno(Turno turno) {
        return null;
    }


    @Override
    public void modificarTurno(Turno turno) {

    }

    @Override
    public Turno reservarTurno(Turno turno) {
        return null;
    }

    @Override
    public void cancelarTurno(Long id) {

    }

    @Override
    public void guardarTurno(Turno turno) {

    }
}
