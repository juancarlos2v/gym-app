package com.gymapp.GymApp.Controladores;

import com.gymapp.GymApp.Entidades.Turno;
import com.gymapp.GymApp.Servicios.TurnosServicio;
import com.gymapp.GymApp.dtos.TurnoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/turnos")
public class TurnoControlador {

    @Autowired
    TurnosServicio turnosServicio;

    @GetMapping("/")
    public Set<Turno> listarTurnos(){
        Set<Turno> turnos = turnosServicio.listarTurnos();

        return turnos;
    }

    @GetMapping("/{id}")
    public Turno buscarTurno(@PathVariable Long id){
        Turno turno= turnosServicio.buscarTurno(id);

        return turno;
    }

    @PostMapping("/")
    public ResponseEntity<Object> agregarTurno(@RequestBody Turno t){
        Turno turno =  turnosServicio.agregarTurno(t);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> modificarTurno(@PathVariable Long id, @RequestBody TurnoDTO turnoModificado){
        Turno turno= turnosServicio.buscarTurno(id);

        turno.setClase(turnoModificado.getClase());
        turno.setCupo(turnoModificado.getCupo());
        turno.setEntrenador(turnoModificado.getEntrenador());
        turno.setFechaYhora(turnoModificado.getFechaYhora());

        turnosServicio.modificarTurno(turno);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/reserva")
    public ResponseEntity<Object> reservarTurno(@RequestBody Turno turno){
        //encontrar usuario autenticado
        //Turno turno= new Turno();

        turnosServicio.reservarTurno(turno);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
