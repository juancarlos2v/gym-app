package com.gymapp.GymApp.Controladores;

import com.gymapp.GymApp.Entidades.Clase;
import com.gymapp.GymApp.Servicios.ClaseServicio;
import com.gymapp.GymApp.dtos.ClaseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/turnos")
public class ClaseControlador {

    @Autowired
    ClaseServicio claseServicio;

    @GetMapping("/")
    public List<Clase> listarClases(){
        return claseServicio.listarClases();
    }

    @GetMapping("/{id}")
    public Clase buscarClase(@PathVariable Long id){
        return claseServicio.buscarClase(id);
    }

    @PostMapping("/")
    public ResponseEntity<Object> agregarClase(@RequestBody Clase t){
        Clase clase =  claseServicio.agregarClases(t);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> modificarClase(@PathVariable Long id, @RequestBody ClaseDTO turnoModificado){
        Clase clase = claseServicio.buscarClase(id);

        clase.setNombre(turnoModificado.getNombre());
        clase.setCupo(turnoModificado.getCupo());
        clase.setEntrenador(turnoModificado.getEntrenador());
        clase.setFechaYhora(turnoModificado.getFechaYhora());

        claseServicio.guardarClase(clase);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/reserva")
    public ResponseEntity<Object> reservarClase(@RequestBody Clase clase){
        //encontrar usuario autenticado
        //Turno turno= new Turno();

        reservarClase(clase);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
