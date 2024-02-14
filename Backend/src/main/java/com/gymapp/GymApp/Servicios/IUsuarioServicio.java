package com.gymapp.GymApp.Servicios;

import com.gymapp.GymApp.Entidades.Usuario;
import java.util.List;

public interface IUsuarioServicio {

    public List<Usuario> traerUsuarios();
    public Usuario registrarUsuario(String dni, String nombre, String apellido, String email, String password);
    public Usuario bajaUsuario(String dni);
    public  Usuario borrarUsuario(Long id);
}
