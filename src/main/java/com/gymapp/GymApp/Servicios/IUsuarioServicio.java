package com.gymapp.GymApp.Servicios;

import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;

public interface IUsuarioServicio {

    List<Usuario> listarUsuarios();

    Usuario bajaUsuario(String dni);

    Usuario guardarCambiar(Usuario usuario);

    void borrar(Usuario usuario);

     Usuario buscarPorId(Long id_usuario);

}
