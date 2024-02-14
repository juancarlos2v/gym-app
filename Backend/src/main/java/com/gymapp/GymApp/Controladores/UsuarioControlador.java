package com.gymapp.GymApp.Controladores;

import com.Gym.appweb.servicios.ServicioUsuario;
import com.gymapp.GymApp.Entidades.Usuario;
import com.gymmapp.GymApp.exepcion.RecursoNoEncontradoExepcion;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioControlador {


    /*
     @Autowired
    UsuarioServicio usuarioServicio;



    @GetMapping("/registro")
     public ResponseEntity<Object> registrar(){


     return new ResponseEntity<>(HttpStatus.CREATED);

     }*/
    
    private static final Logger logger = LoggerFactory.getLogger(UsuarioControlador.class);

    @Autowired
    private ServicioUsuario usuarioServicio;

    // http://localhost:8080/appweb/usuarios
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
