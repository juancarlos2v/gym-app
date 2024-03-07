package com.gymapp.GymApp.Controladores;

import com.gymapp.GymApp.Entidades.Usuario;
import com.gymapp.GymApp.Exepcion.RecursoNoEncontradoExepcion;
import com.gymapp.GymApp.Servicios.UsuarioServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/api")
public class UsuarioControlador {

    @Autowired
    UsuarioServicio usuarioServicio;

    private static final Logger logger = LoggerFactory.getLogger(UsuarioControlador.class);

//    @PatchMapping("/usuarios/baja")
//    public ResponseEntity<Object> baja(@RequestParam String dni) {
//        usuarioServicio.bajaUsuario(dni);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
    @GetMapping(value = "usuarios")
    public List<Usuario> obtenerListadoUsuarios() {
        var usuarios = usuarioServicio.listarUsuarios();
        usuarios.forEach(empleado -> logger.info(empleado.toString()));
        return usuarios;
    }

    //http://localhost:8080/api/usuarios/agregar
    
    @PostMapping(value = "/usuarios/agregar")
    public Usuario agregarUsuario(@RequestBody Usuario usuario) {
        logger.info("Usuario a Agregar: " + usuario);
        return usuarioServicio.guardarCambiar(usuario);
    }
//

    @GetMapping(value = "/usuarios/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioServicio.buscarPorId(id);
        if (usuario == null) {
            throw new RecursoNoEncontradoExepcion("No se encontro el ID: " + id);
        }
        return ResponseEntity.ok(usuario);
    }

    @GetMapping(value = "/usuarios/porDni/{dni}")
    public ResponseEntity<Usuario> obtenerUsuarioPorDni(@PathVariable String dni) {
        Optional<Usuario> optionalUsuario = usuarioServicio.buscarPorDni(dni);
        if (optionalUsuario.isPresent()) {
            return ResponseEntity.ok(optionalUsuario.get());
        } else {
            throw new RecursoNoEncontradoExepcion("No se encontro el ID: " + dni);
        }
    }

//
    @PutMapping(value = "/usuarios/modificar/{id}")
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
        usuario.setTelefono(usuarioRecibido.getTelefono());
        usuario.setTelefonoAuxiliar(usuarioRecibido.getTelefonoAuxiliar());
        usuario.setFechaDeNacimiento(usuarioRecibido.getFechaDeNacimiento());
        usuario.setFechaVencimiento(usuarioRecibido.getFechaVencimiento());
        usuario.setTipoMembresia(usuarioRecibido.getTipoMembresia());
        usuario.setAptoFisico(usuarioRecibido.isAptoFisico());
        usuario.setActivo(usuarioRecibido.isActivo());
        usuarioServicio.guardarCambiar(usuario);
        return ResponseEntity.ok(usuario);
    }
//

    @DeleteMapping(value = "/usuarios/eliminar/{id}")
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

    @GetMapping(value = "/usuarios/paginados")
    public ResponseEntity<Page<Usuario>> obtenerListadoUsuarios(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Usuario> usuariosPage = usuarioServicio.listarUsuariosPaginados(pageable);
        usuariosPage.forEach(usuario -> logger.info(usuario.toString()));
        return ResponseEntity.ok(usuariosPage);
    }

}
