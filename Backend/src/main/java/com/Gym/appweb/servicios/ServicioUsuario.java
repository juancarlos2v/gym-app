package com.Gym.appweb.servicios;

import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;

public interface ServicioUsuario {

    public List<Usuario> listarUsuarios();

    public Usuario guardarCambiar(Usuario usuario);

    public void borrar(Usuario usuario);

    public Usuario buscarPorId(Long id_usuario);
}
