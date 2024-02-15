package com.gymapp.GymApp.Controladores;

import com.gymapp.GymApp.Entidades.Usuario;
import com.gymapp.GymApp.Exepcion.RecursoNoEncontradoExepcion;
import com.gymapp.GymApp.Servicios.UsuarioServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioControlador {

    @Autowired
    UsuarioServicio usuarioServicio;

    private static final Logger logger = LoggerFactory.getLogger(UsuarioControlador.class);

    @PostMapping("/registro")
    public ResponseEntity<Object> registrar(@RequestParam String dni, @RequestParam String nombre, @RequestParam String apellido, @RequestParam String email, @RequestParam String password) {
        usuarioServicio.registrarUsuario(dni, nombre, apellido, email, password);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/baja")
    public ResponseEntity<Object> baja(@RequestParam String dni) {
        usuarioServicio.bajaUsuario(dni);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    // http://localhost:8080/api/usuarios
    
    @GetMapping("/usuarios")
    public List<Usuario> obtenerListadoUsuarios() {
        var usuarios = usuarioServicio.listarUsuarios();
        usuarios.forEach(empleado -> logger.info(empleado.toString()));
        return usuarios;
    }

    @PostMapping("/usuarios")
    public Usuario agregarUsuario(@RequestBody Usuario usuario) {
        logger.info("Usuario a Agregar: " + usuario);
        return usuarioServicio.guardarCambiar(usuario);
    }
//

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioServicio.buscarPorId(id);
        if (usuario == null) {
            throw new RecursoNoEncontradoExepcion("No se encontro el ID: " + id);
        }
        return ResponseEntity.ok(usuario);
    }
//

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id,
            @RequestBody Usuario usuarioRecibido) {
        Usuario usuario = usuarioServicio.buscarPorId(id);
        if (usuario == null) {
            throw new RecursoNoEncontradoExepcion("No se encontro el ID: " + id);
        }
        usuario.setDni(usuarioRecibido.getDni());
        usuario.setNombre(usuarioRecibido.getNombre());
        usuario.setApellido(usuarioRecibido.getApellido());
        usuario.setEmail(usuarioRecibido.getEmail());
        usuario.setPassword(usuarioRecibido.getPassword());
        usuarioServicio.guardarCambiar(usuario);
        return ResponseEntity.ok(usuario);
    }
//

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Map<String, Boolean>>
            eliminarUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioServicio.buscarPorId(id);
        if (usuario == null) {
            throw new RecursoNoEncontradoExepcion("No se encontro el ID: " + id);
        }
        usuarioServicio.borrar(usuario);
        //Json {"eliminado", true}
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
