package com.gymapp.GymApp.Controladores;

import com.gymapp.GymApp.Entidades.Usuario;
import com.gymapp.GymApp.Servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioControlador {

     @Autowired
    UsuarioServicio usuarioServicio;

    @PostMapping("/registro")
     public ResponseEntity<Object> registrar(@RequestParam String dni,@RequestParam String nombre,@RequestParam String apellido,@RequestParam String email,@RequestParam String password){
        usuarioServicio.registrarUsuario(dni,nombre,apellido,email,password);
        return new ResponseEntity<>(HttpStatus.CREATED);
     }

    @PatchMapping("/baja")
    public ResponseEntity<Object> baja(@RequestParam String dni){
        usuarioServicio.bajaUsuario(dni);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
