package com.gymapp.GymApp.Servicios;

import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IUsuarioServicio {

    List<Usuario> listarUsuarios();

//    Usuario bajaUsuario(String dni);

    Usuario guardarCambiar(Usuario usuario);

    void borrar(Usuario usuario);

    Usuario buscarPorId(Long id_usuario);
    
    Optional<Usuario> buscarPorDni(String dni);
    
    Page<Usuario> listarUsuariosPaginados(Pageable pageable);

}
